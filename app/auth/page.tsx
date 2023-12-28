"use client";
import { useState } from "react";
import { BasicNavbar } from "../dashboard/navbar";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const [isLogin, setIsLogin] = useState(true);

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
        <div className="flex h-screen w-full flex-col items-center justify-center pt-[72px]">
          <h1>Auth</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
