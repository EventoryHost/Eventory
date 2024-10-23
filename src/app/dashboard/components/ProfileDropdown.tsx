import React, { useState } from "react";
import { useContextbar } from "../context/SidebarContext";



interface DropdownMenuProps {
  setIsOpen: (isOpen: boolean) => void; // Add setIsOpen prop
}

const ProfileDropdownMenu: React.FC<DropdownMenuProps> = ({
  setIsOpen, // Destructure the prop
}) => {
  const [filter, setFilter] = useState<"read" | "unread">("read");
  const { user, setUser} = useContextbar();

 

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click from propagating
  };

  return (
    <div
      className="absolute right-0 mt-1 w-[400px] bg-white border-2 rounded-lg shadow-lg top-[40px] z-40"
      onClick={handleDropdownClick} // Add onClick handler here
    >
        {user?.name}
      
    </div>
  );
};

export default ProfileDropdownMenu;
