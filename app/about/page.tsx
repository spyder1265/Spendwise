"use client";
import React from "react";
import { BasicNavbar } from "../dashboard/navbar";

const About: React.FC = () => {
  return (
    <>
      <div>
        <BasicNavbar />
      </div>

      <div className="flex flex-col items-center justify-center pt-16 dark:text-gray-400">
        <div className="w-9/12 border-b border-gray-100 p-8 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            About SpendWise
          </h1>
          <p className="mb-6 text-lg">
            Welcome to SpendWise, your all-in-one financial management platform
            designed to empower you to take control of your finances and make
            informed spending decisions. SpendWise is not just a financial
            management platform; it's your personal finance companion dedicated
            to empowering you on your journey to financial well-being. We
            believe that managing your money should be intuitive, insightful,
            and stress-free.
          </p>
        </div>

        <div className="w-9/12 border-b border-gray-100">
          <h2 className="mb-2 pt-4 text-2xl font-bold dark:text-white">
            Our Mission
          </h2>
          <div className="g-10 flex flex-row">
            <div>
              <p className="mb-6">
                At SpendWise, our mission is to provide users with the tools and
                insights they need to make informed financial decisions, achieve
                their goals, and build a secure future. We are committed to
                simplifying the complexities of personal finance, making it
                accessible to everyone. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mb-5 ml-6 animate-pulse justify-center align-top ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="200"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="#2256ee"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" />
                  <path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-9/12 justify-center border-b border-gray-100 pt-4">
          <h2 className="mb-2 text-2xl font-bold dark:text-white">
            Key Features
          </h2>
          <div>
            <ul className="ml-14 list-outside list-disc">
              <li className="py-2">
                <em className="font-medium">Expense Tracking:</em> Easily track
                and categorize your expenses in real-time.
              </li>
              <li className="py-2">
                <em className="font-medium">Budget Management:</em> Set and
                manage budgets to stay on top of your financial goals.
              </li>
              <li className="py-2">
                <em className="font-medium">Financial Insights:</em> Gain
                valuable insights into your spending patterns and financial
                health.
              </li>
              <li className="py-2">
                <em className="font-medium">Goal Tracking:</em> Set and monitor
                your savings and financial goals with ease.
              </li>
              <li className="py-2">
                <em className="font-medium">Secure and Private:</em> Your
                financial data is encrypted and protected for your peace of
                mind.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-6 text-center text-4xl font-bold dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="auth?register"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#info"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:ms-4"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
