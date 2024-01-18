"use client";

import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import ClientOnly from "../components/ClientOnly";
import { DashboardSidebar } from "../components/Dashboard/Sidebar/sidebar";
import { DashboardNavbar } from "../components/Navbar/navbar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <ClientOnly>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-neutral-900",
            isCollapsed ? "lg:ml-[4.1rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </ClientOnly>
  );
};

export default DashboardLayout;
