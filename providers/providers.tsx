import ClientOnly from "@/app/components/ClientOnly";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Flowbite } from "flowbite-react";
import { flowbiteTheme } from "@/app/theme";
import React from "react";
import ToastProvider from "./ToastProvider";

interface Iproviders {
  children: React.ReactNode;
}
const providers: React.FC<Iproviders> = ({ children }) => {
  return (
    <ClientOnly>
      <AntdRegistry>
        <Flowbite theme={{ theme: flowbiteTheme }}>
          <ToastProvider />
          {children}
        </Flowbite>
      </AntdRegistry>
    </ClientOnly>
  );
};
export default providers;
