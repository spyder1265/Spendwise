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
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";
import { BiArrowToRight, BiLock } from "react-icons/bi";
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
        <div className="relative w-full p-3 pr-4">
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
                  alt="logo"
                  height="100"
                  src="/dark.png"
                  width="100"
                  priority
                  className="absolute -z-10 my-auto ml-4 hidden scale-150 self-center dark:block"
                />
                <Image
                  alt="logo"
                  height="100"
                  src="/light.png"
                  width="100"
                  priority
                  className="absolute -z-10 my-auto ml-4 block scale-150 self-center dark:hidden"
                />
              </Navbar.Brand>
            </div>
            <DarkThemeToggle />
          </div>
        </div>
      </Navbar>
    </header>
  );
};

interface IBasicNavbar {
  className?: string;
  isLogin?: boolean;
  isAuth?: boolean;
  isLoggedIn?: boolean;
  username?: string;
  onFormChange?: () => void;
}

export const BasicNavbar: FC<IBasicNavbar> = ({
  isLogin,
  isAuth,
  isLoggedIn,
  username,
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", isActive: pathname === "/" },
    { name: "About", href: "/about", isActive: pathname === "/about" },
    { name: "Pricing", href: "/pricing", isActive: pathname === "/pricing" },
    { name: "Contact", href: "/contact", isActive: pathname === "/contact" },
    { name: "Payment", href: "/payment", isActive: pathname === "/payment" },
  ];

  return (
    <>
      <Navbar
        fluid
        className="fixed top-0 z-30 max-h-[72px] w-full border-b border-gray-100 bg-white p-0 dark:border-gray-700 dark:bg-neutral-900 sm:p-0"
      >
        <div className="relative w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navbar.Brand href="/" className="max-h-[72px]">
                <Image
                  alt="logo"
                  height="100"
                  src="/dark.png"
                  width="100"
                  priority
                  className="absolute -z-10 my-auto ml-4 hidden scale-150 self-center dark:block"
                />
                <Image
                  alt="logo"
                  height="100"
                  src="/light.png"
                  width="100"
                  priority
                  className="absolute -z-10 my-auto ml-4 block scale-150 self-center dark:hidden"
                />
                {/* <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Spendwise
                </span> */}
              </Navbar.Brand>
            </div>
            <div>
              <NavbarCollapse className="absolute inset-x-0 top-0 mt-[72px] w-full items-center justify-between bg-gray-50  shadow-none transition-transform duration-700 dark:bg-neutral-900 md:relative md:mt-0 md:border-none md:bg-transparent md:p-0 dark:md:bg-transparent lg:order-1 lg:flex lg:w-auto">
                {navigation.map((item, index) => (
                  <NavbarLink
                    key={index}
                    href={item.href}
                    active={item.isActive}
                    className={`${
                      !item.isActive && "hover:bg-neutral-300"
                    } active:bg-black`}
                  >
                    {item.name}
                  </NavbarLink>
                ))}
              </NavbarCollapse>
            </div>
            <div className="flex h-full items-center">
              {isLoggedIn ? (
                <div className="flex h-full items-center gap-2">
                  <div className="inline-flex h-full items-center gap-1 font-medium text-gray-400">
                    <span>Hello,</span>
                    <span className="capitalize">{username}</span>
                  </div>

                  <a
                    href="/dashboard"
                    className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                  >
                    Dashboard
                    <BiArrowToRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              ) : !isAuth && !isLoggedIn ? (
                <a
                  href="auth?login"
                  className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                >
                  login
                  <BiLock className="ml-2 h-5 w-5" />
                </a>
              ) : (
                !isLoggedIn && (
                  <>
                    <a
                      href={isLogin ? "auth?register" : "auth?login"}
                      className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    >
                      {isLogin ? "Register" : "Login"}
                      <BiLock className="ml-2 h-5 w-5" />
                    </a>
                  </>
                )
              )}

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
