import ClientOnly from "@/app/components/ClientOnly";
import { flowbiteTheme } from "@/app/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Flowbite } from "flowbite-react";
import React from "react";

interface Iproviders {
  children: React.ReactNode;
}

const providers: React.FC<Iproviders> = ({ children }) => {
  return (
    <ClientOnly>
      <AntdRegistry>
        <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
      </AntdRegistry>
    </ClientOnly>
  );
};
export default providers;
