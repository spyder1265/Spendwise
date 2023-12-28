import "animate.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "bg-gray-50 dark:bg-neutral-900 dark:text-gray-50",
          inter.className,
        )}
      >
        <ClientOnly>
          <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
        </ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
