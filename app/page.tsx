import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Custumers from "./components/LandingPage/Custumers";
import SocialProof from "./components/LandingPage/SocialProof";
import { BasicNavbar } from "./dashboard/navbar";

interface Ipage {}

const page: React.FC<Ipage> = () => {
  return (
    <main className="m-0 flex flex-col overflow-hidden ">
      <header className="">
        <div className="mb-[72px]">
          <BasicNavbar />
        </div>
        <Header />
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
export default page;
