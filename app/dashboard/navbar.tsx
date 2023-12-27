"use client";
import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import {
  DarkThemeToggle,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { useState, type FC } from "react";
import { HiMenuAlt1, HiMenuAlt3, HiX } from "react-icons/hi";

export const DashboardNavbar: FC<Record<string, never>> = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-neutral-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                aria-controls="sidebar"
                aria-expanded
                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                {isSidebarCollapsed || !isSmallScreen() ? (
                  <HiMenuAlt1 className="h-6 w-6" />
                ) : (
                  <HiX className="h-6 w-6" />
                )}
              </button>
              <Navbar.Brand href="/">
                <Image
                  alt="Flowbite logo"
                  height="24"
                  src="/favicon.png"
                  width="24"
                />
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </Navbar.Brand>
            </div>
            <DarkThemeToggle />
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export const BasicNavbar = function () {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-100 bg-white p-0 dark:border-gray-700 dark:bg-neutral-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navbar.Brand href="/">
                <Image
                  alt="Flowbite logo"
                  height="24"
                  src="/favicon.png"
                  width="24"
                />
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Spendwise
                </span>
              </Navbar.Brand>
            </div>
            <div>
              <NavbarCollapse className="absolute inset-x-1 top-0 mt-[78px] w-full items-center justify-between  bg-gray-50 shadow-none transition-all duration-700 dark:bg-neutral-800 md:relative md:mt-0 md:border-none md:p-0 lg:order-1 lg:flex lg:w-auto">
                {navigation.map((item, index) => (
                  <NavbarLink
                    key={index}
                    href={item.href}
                    className="hover:bg-gray-200"
                  >
                    {item.name}
                  </NavbarLink>
                ))}
              </NavbarCollapse>
            </div>
            <div className="flex h-full items-center">
              <a
                href="#start"
                className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
              >
                login
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <DarkThemeToggle />
              {isOpen ? (
                //eslint-disable-next-line
                <div onClick={() => setIsOpen(!isOpen)}>
                  <NavbarToggle barIcon={isOpen ? HiX : HiMenuAlt3} />
                </div>
              ) : (
                //eslint-disable-next-line
                <div onClick={() => setIsOpen(!isOpen)}>
                  <NavbarToggle barIcon={isOpen ? HiX : HiMenuAlt3} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};
