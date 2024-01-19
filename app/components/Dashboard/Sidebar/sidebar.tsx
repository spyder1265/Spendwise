import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import { signOut } from "next-auth/react";
import type { FC } from "react";
import { FaCog } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id={"sidebar"}
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col justify-between border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.Items className="flex h-[87vh] flex-col justify-between">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#Dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#Kanban" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#Inbox" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#Users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#Products" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#SignUp" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Sidebar.Item href="#Upgrade" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#Settings" icon={FaCog}>
            Settings
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => signOut()}
            className="self-end justify-self-end"
            icon={FaArrowRightFromBracket}
          >
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
