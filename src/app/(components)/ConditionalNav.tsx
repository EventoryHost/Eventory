"use client"; // Client component for layout management
import { usePathname } from "next/navigation";
import { useState } from "react"; // State for managing sidebar visibility
import Nav from "./nav";
import Navbar from "../dashboard/components/Navbar";
import Sidebar from "../dashboard/components/SideBar";
import Page from "../dashboard/page"; // Import the page component
import { useSidebar } from "../dashboard/context/SidebarContext";

export default function ConditionalNav() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  //   const toggleSidebar = () => {
  //     setIsSidebarOpen((prev) => !prev);
  //   };

  if (pathname.startsWith("/dashboard")) {
    return (
      <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* <Page isSidebarOpen={isSidebarOpen} /> */}
      </>
    );
  }

  return <Nav />;
}
