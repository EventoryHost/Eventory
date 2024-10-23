"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the User and BusinessDetails interfaces
interface BusinessDetails {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  annualrevenue: string;
  businessAddress: string;
  cities: string[]; 
  pinCode: number;
  years: string;
}

interface User {
  name: string;
  mobile: string;
  businessDetails: BusinessDetails;
}

// Extend SidebarContextProps to include user state
interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with initial undefined value
const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Add user state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        user, // Provide user state to context
        setUser, // Provide function to update user
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Hook to use the Sidebar and User context
export const useContextbar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
