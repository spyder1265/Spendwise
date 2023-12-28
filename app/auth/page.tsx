"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { BasicNavbar } from "../dashboard/navbar";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState<boolean>(
    searchParams.has("register") ? false : true,
  );

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
          <h1>Auth</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
