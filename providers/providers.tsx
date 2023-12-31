import ClientOnly from "@/app/components/ClientOnly";
import { flowbiteTheme } from "@/app/theme";
import { Flowbite } from "flowbite-react";
import React from "react";

interface Iproviders {
  children: React.ReactNode;
}

const providers: React.FC<Iproviders> = ({ children }) => {
  return (
    <ClientOnly>
      <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
    </ClientOnly>
  );
};
export default providers;
