import React, { useState } from "react";
import { useContextbar } from "../context/SidebarContext";
import { ArrowBigDown, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";

interface DropdownMenuProps {
}

const ProfileDropdownMenu: React.FC<DropdownMenuProps> = ({
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContextbar();

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click from propagating
  };

  const userList = [
    {
      name: 'vijay malliya',
      category: 'Decorotorion Provider'
    },
    {
      name: 'vijay malliya',
      category: 'photographer & videographer'
    }
  ]

  return (
    <div
      className="absolute right-0 mt-2 w-[400px] bg-white border-2 rounded-lg shadow-lg top-[40px] z-40"
      onClick={handleDropdownClick} // Add onClick handler here
    >
      <div className="p-6 flex flex-col gap-4 items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-300">
          {/* User avatar can go here */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-xl text-gray-500"> {user?.name}</p>
          <p className="text-base font-medium text-[#2E3192]">50% Profile completion</p>
        </div>
        <div className={`cursor-pointer rounded-full border-2 text-center xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-6 md:py-2 bg-[#2E3192] text-white`}
        >
          View Profile
        </div>
        <div className="w-full  flex gap-2 flex-col">
          <div className="bg-[#F0EFFC] p-4 rounded-xl">
            <div className="flex justify-between items-center ">

              <div className="">show more accounts
              </div>
              {isOpen ?
                <div className={` bg-[#2E3192] rounded-full p-1 flex items-center justify-center`} onClick={() => setIsOpen(!isOpen)}>
                  <ChevronUp className="text-white w-4 h-4" />
                </div> :
                <div className={` bg-gray-500 rounded-full p-1 flex items-center justify-center`} onClick={() => setIsOpen(!isOpen)}>
                  <ChevronDown className="text-white w-4 h-4" />
                </div>
              }

            </div>
            {isOpen && ( 
              <ul className="my-2 flex flex-col ">
                {userList.map((user, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer flex items-center gap-2 py-4 ${index < userList.length - 1 ? 'border-b-1 border-gray-400' : '' 
                      }`}
                  >                    
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                      {/* User avatar can go here */}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-[10px] font-medium text-gray-700">{user.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between items-center bg-[#F0EFFC] p-4 rounded-xl">
            <div className="">Sign Out</div>
            <div className="flex  items-center justify-center ">
              <img src="/Logout.svg" alt="wallet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdownMenu;
