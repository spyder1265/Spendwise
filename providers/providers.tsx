"use client";
import ClientOnly from "@/app/components/ClientOnly";
import { flowbiteTheme } from "@/app/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Flowbite } from "flowbite-react";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ToastProvider from "./ToastProvider";

interface Iproviders {
  children: React.ReactNode;
}

const providers: React.FC<Iproviders> = ({ children }) => {
  return (
    <ClientOnly>
      <SessionProvider>
        <AntdRegistry>
          <Flowbite theme={{ theme: flowbiteTheme }}>
            <ToastProvider />
            {children}
          </Flowbite>
        </AntdRegistry>
      </SessionProvider>
    </ClientOnly>
  );
};
export default providers;
