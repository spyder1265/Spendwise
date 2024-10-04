"use client";

import { BasicFooter } from "../components/Footer/Footer";
import { BasicNavbar } from "../components/Navbar/navbar";
import Payment from "../components/Payment/payment";

const PaymentPage = () => {
  return (
    <div>
      <BasicNavbar />

      <Payment />

      <BasicFooter/>
    </div>
  );
};

export default PaymentPage;
