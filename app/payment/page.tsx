"use client";

import React from 'react';
import Payment from '../components/Payment/payment';
import { BasicNavbar } from '../components/Navbar/navbar';

const PaymentPage = () => {
  return (
    <div>
      <BasicNavbar />

      <Payment />
    </div>
  );
};

export default PaymentPage;
