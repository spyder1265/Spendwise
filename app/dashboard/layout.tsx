"use client";

import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import ClientOnly from "../components/ClientOnly";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

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
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-neutral-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </ClientOnly>
  );
};

export default DashboardLayout;
