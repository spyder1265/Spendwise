"use client";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Login from "../components/Form/Login";
import PasswordReset from "../components/Form/PasswordReset";
import Register from "../components/Form/Register";
import { BasicNavbar } from "../components/Navbar/navbar";
import Loader from "../components/loader";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const searchParams = useSearchParams();
  const { status } = useSession();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState<boolean>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    searchParams.has("login") &&
      !searchParams?.has("forgot-password") &&
      !searchParams?.has("register"),
  );

  const [isRegister, setIsRegister] = useState<boolean>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    searchParams.has("register") &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      !searchParams.has("forgot-password") &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      !searchParams.has("login"),
  );

  const [forgotPassword, setForgotPassword] = useState<boolean>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    searchParams.has("forgot-password") &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error

      !searchParams.has("register") &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error

      !searchParams.has("login"),
  );

  useEffect(() => {
    if (
      !searchParams?.has("login") &&
      !searchParams?.has("forgot-password") &&
      !searchParams?.has("register")
    ) {
      setIsLogin(true);
    }
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, searchParams, status]);

  if (status === "loading") {
    return <div></div>;
  }

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
    if (searchParams?.has("forgot-password")) {
      setForgotPassword(false);
      setIsLogin(true);
      router.push("/auth?login");
    }
  };

  if (status === "unauthenticated") {
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
          <div className="flex h-screen w-full flex-col items-center justify-center pt-[72px] md:overflow-y-hidden">
            <div className="animate__animated animate__fadeIn my-auto flex min-w-[400px] flex-col items-center justify-center gap-5 rounded-xl px-8 py-7 shadow-lg dark:shadow-black md:min-w-[500px]">
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
          {/* <BasicFooter /> */}
        </div>
      </>
    );
  } else if (status === "authenticated") {
    router.push("/dashboard");
  }
  return <Loader />;
};
export default Page;
