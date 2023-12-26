import Custumers from "./components/LandingPage/Custumers";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import SocialProof from "./components/LandingPage/SocialProof";
import { BasicNavbar } from "./dashboard/navbar";

interface Ipage {}

const page: React.FC<Ipage> = () => {
  return (
    <main className="flex flex-col">
      <header className="">
        <div className="mb-[66px]">
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
