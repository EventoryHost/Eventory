import React, { useState } from "react";
import { useContextbar } from "../context/SidebarContext";
import { ArrowBigDown, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";

interface DropdownMenuProps {}

const ProfileDropdownMenu: React.FC<DropdownMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContextbar();

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click from propagating
  };

  const userList = [
    {
      name: "vijay malliya",
      category: "Decorotorion Provider",
    },
    {
      name: "vijay malliya",
      category: "photographer & videographer",
    },
  ];

  return (
    <div
      className="absolute right-0 top-[40px] z-40 mt-2 w-[400px] rounded-lg border-2 bg-white shadow-lg"
      onClick={handleDropdownClick} // Add onClick handler here
    >
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-300">
          {/* User avatar can go here */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-medium text-gray-500"> {user?.name}</p>
          <p className="text-base font-medium text-[#2E3192]">
            50% Profile completion
          </p>
        </div>
        <div
          className={`cursor-pointer rounded-full border-2 bg-[#2E3192] text-center text-white xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-6 md:py-2`}
        >
          View Profile
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="rounded-xl bg-[#F0EFFC] p-4">
            <div className="flex items-center justify-between">
              <div className="">show more accounts</div>
              {isOpen ? (
                <div
                  className={`flex items-center justify-center rounded-full bg-[#2E3192] p-1`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ChevronUp className="h-4 w-4 text-white" />
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center rounded-full bg-gray-500 p-1`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ChevronDown className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
            {isOpen && (
              <ul className="my-2 flex flex-col">
                {userList.map((user, index) => (
                  <li
                    key={index}
                    className={`flex cursor-pointer items-center gap-2 py-4 ${
                      index < userList.length - 1
                        ? "border-b-1 border-gray-400"
                        : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                      {/* User avatar can go here */}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-[10px] font-medium text-gray-700">
                        {user.category}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#F0EFFC] p-4">
            <div className="">Sign Out</div>
            <div className="flex items-center justify-center">
              <img src="/Logout.svg" alt="wallet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdownMenu;
