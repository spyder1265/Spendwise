"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BasicFooter } from "../components/Footer";
import Login from "../components/Form/Login";
import PasswordReset from "../components/Form/PasswordReset";
import Register from "../components/Form/Register";
import { BasicNavbar } from "../components/Navbar/navbar";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState<boolean>(
    searchParams.has("login") &&
      !searchParams.has("forgot-password") &&
      !searchParams.has("register"),
  );

  const [isRegister, setIsRegister] = useState<boolean>(
    searchParams.has("register") &&
      !searchParams.has("forgot-password") &&
      !searchParams.has("login"),
  );

  const [forgotPassword, setForgotPassword] = useState<boolean>(
    searchParams.has("forgot-password") &&
      !searchParams.has("register") &&
      !searchParams.has("login"),
  );

  useEffect(() => {
    if (
      !searchParams.has("login") &&
      !searchParams.has("forgot-password") &&
      !searchParams.has("register")
    ) {
      setIsLogin(true);
    }
  }, [searchParams]);

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleFormChange = () => {
    if (isLogin) {
      setIsLogin(false);
      setIsRegister(true);
      router.replace("/auth?register");
    } else if (isRegister) {
      setIsLogin(true);
      setIsRegister(false);
      router.replace("/auth?login");
    }
    if (searchParams.has("forgot-password")) {
      setForgotPassword(false);
      setIsLogin(true);
      router.push("/auth?login");
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <BasicNavbar
            isAuth
            isLogin={isLogin}
            onFormChange={() => handleFormChange()}
          />
        </div>
        <div className="flex h-screen w-full flex-col items-center justify-around pt-[72px] md:overflow-y-hidden">
          <div className="animate__animated animate__fadeIn flex min-w-[400px] flex-col items-start justify-center gap-5 rounded-xl px-8 py-7 shadow-lg dark:shadow-black md:min-w-[500px]">
            {isLogin ? (
              <>
                <div className="flex w-full items-center justify-center">
                  <h1 className="text-4xl font-bold">Login</h1>
                </div>
                <Login onSubmit={handleSubmit} />
              </>
            ) : isRegister ? (
              <>
                <div className="flex w-full items-center justify-center">
                  <h1 className="text-4xl font-bold">Register</h1>
                </div>
                <Register onSubmit={handleSubmit} />
              </>
            ) : (
              forgotPassword && (
                <>
                  <div className="flex w-full items-center justify-center">
                    <h1 className="text-4xl font-bold">Password Reset</h1>
                  </div>
                  <PasswordReset onSubmit={handleSubmit} />
                </>
              )
            )}
          </div>
        </div>
        <BasicFooter />
      </div>
    </>
  );
};
export default Page;
