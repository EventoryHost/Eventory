import type { Metadata } from "next";
import Footer from "./(components)/footer";
import "./globals.css";
import Nav from "./(components)/nav";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Eventory",
  description: "Inventory for Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Custom font will load for a single page only */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-with-bg.svg" />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <div className={"h-[100vh] py-[27vw] md:py-[15vw] lg:py-[4.5vw]"}>
          {children}
        </div>
        <footer></footer>
        <Toaster />
      </body>
    </html>
  );
}
