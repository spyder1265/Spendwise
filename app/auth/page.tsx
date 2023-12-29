"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { BasicFooter } from "../components/Footer/Footer";
import Login from "../components/Form/Login";
import { BasicNavbar } from "../dashboard/navbar";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState<boolean>(
    searchParams.has("register") ? false : true,
  );

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <BasicNavbar
            isAuth
            isLogin={isLogin}
            onFormChange={() => setIsLogin(!isLogin)}
          />
        </div>
        <div className="flex h-screen w-full flex-col items-center justify-center pt-[72px] md:overflow-y-hidden">
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="animate__animated animate__fadeIn flex min-w-[400px] flex-col items-start justify-center gap-5 rounded-xl px-8 py-7 shadow-lg dark:shadow-black md:min-w-[500px]"
          >
            <div className="flex w-full items-center justify-center">
              <h1 className="text-4xl font-bold">Login</h1>
            </div>
            <Login onSubmit={handleSubmit} />
          </div>
        </div>
        {/* copy right */}
        <BasicFooter />
      </div>
    </>
  );
};
export default Page;
