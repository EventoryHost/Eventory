import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import ConditionalNav from "../(components)/ConditionalNav";
import { SidebarProvider } from "../dashboard/context/SidebarContext";
import { SideBarWrapper } from "./components/SideBarWrapper";

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
      <div className="flex h-[100vh] pt-[27vw] md:pt-[15vw] lg:pt-[4.5vw] scrollbar-hide overflow-hidden overflow-y-auto">
        <SideBarWrapper />
        {children}
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
