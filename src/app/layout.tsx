import type { Metadata } from "next";
import Footer from "./(components)/footer";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ConditionalNav from "./(components)/ConditionalNav";
import { SidebarProvider } from "./dashboard/context/SidebarContext";
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
    <SidebarProvider>
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
            <ConditionalNav />
          </header>
          <div className={""}>
            {children}
          </div>
          <footer></footer>

          <Toaster />
        </body>
      </html>
    </SidebarProvider>
  );
}
