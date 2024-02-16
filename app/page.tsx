"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Custumers from "./components/LandingPage/Custumers";
import SocialProof from "./components/LandingPage/SocialProof";
import { BasicNavbar } from "./components/Navbar/navbar";

interface Ipage {}

const Page: React.FC<Ipage> = () => {
  const [hasAuth, setHasAuth] = useState(false);
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setHasAuth(true);
    }
  }, [status]);
  return (
    <main className="m-0 flex flex-col overflow-hidden ">
      <header className="">
        <div className="mb-[72px]">
          <BasicNavbar
            isLoggedIn={hasAuth}
            username={(hasAuth && data?.user?.name?.split(" ")[0]) || ""}
          />
        </div>
        <Header isLoggedIn={hasAuth} />
      </header>
      <section>
        <SocialProof />
      </section>
      <section>
        <Custumers />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default Page;
