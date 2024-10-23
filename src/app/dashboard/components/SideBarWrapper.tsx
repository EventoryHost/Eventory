"use client";

import { useContextbar } from "../context/SidebarContext";
import Sidebar from "./SideBar";

export const SideBarWrapper = () => {
  const { isSidebarOpen, toggleSidebar } = useContextbar();
  return <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />;
};
