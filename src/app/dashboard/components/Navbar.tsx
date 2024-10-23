import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import NotificationDropdownMenu from "./NotificationDropdownMenu";
import ProfileDropdownMenu from "./ProfileDropdown";

interface NavbarProps {
  toggleSidebar: () => void;
}

const notifications = [
  {
    read: false,
    timeago: "2 minutes ago",
    title: "New Message",
    description: "You have received a new message completed from John Doe.",
  },
  {
    read: true,
    timeago: "1 hour ago",
    title: "Order Confirmed",
    description: "Your order #1234 has been failed and is on its way.",
  },
  {
    read: false,
    timeago: "3 hours ago",
    title: "Payment Successful",
    description: "Your payment of $45.00 was successful.",
  },
  {
    read: true,
    timeago: "1 day ago",
    title: "Password Changed",
    description: "Your password was changed successfully.",
  },
  {
    read: false,
    timeago: "2 days ago",
    title: "New Comment",
    description: "Someone commented on your post: 'Great work!'",
  },
  {
    read: true,
    timeago: "5 days ago",
    title: "Subscription Renewed",
    description: "Your monthly subscription has been renewed.",
  },
  {
    read: false,
    timeago: "1 week ago",
    title: "New Follower",
    description: "Jane Smith has started following you.",
  },
  {
    read: true,
    timeago: "2 weeks ago",
    title: "System Update",
    description: "A new system update is available. Please update soon.",
  },
  {
    read: false,
    timeago: "3 weeks ago",
    title: "Event Reminder",
    description: "Reminder: Your event starts in 2 hours.",
  },
  {
    read: true,
    timeago: "1 month ago",
    title: "Account Verification",
    description: "Your account has been successfully verified.",
  },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifDropdownRef = useRef<HTMLDivElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility based on type
  const toggleDropdown = (dropdownType: "notification" | "profile") => {
    if (dropdownType === "notification") {
      setIsNotifOpen((prev) => !prev);
      setIsProfileOpen(false); // Close the profile dropdown if the notification dropdown is opened
    } else if (dropdownType === "profile") {
      setIsProfileOpen((prev) => !prev);
      setIsNotifOpen(false); // Close the notification dropdown if the profile dropdown is opened
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notifDropdownRef, profileDropdownRef]);

  return (
    <nav className="navbar fixed top-0 z-20 flex flex-col bg-white">
      <div className="flex h-24 w-full items-center justify-between px-4">
        <div className="flex flex-[1.5] items-center gap-4">
          <Image
            width={30}
            height={30}
            src="/footer/footer-logo-01.svg"
            alt="Eventory logo"
            className="mix-blend-multiply"
          />
          <button className="text-xl font-bold text-gray-800">Eventory</button>
        </div>
        <div className="relative flex flex-[8.5] items-center justify-between space-x-4">
          <div className="relative flex min-w-[400px] items-center justify-start gap-2 rounded-md bg-slate-100 px-4 py-2">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search for bookings and items"
              className="block w-full border-none bg-transparent text-base outline-none"
            />
          </div>
          <div className="relative flex items-center justify-start gap-6">
            {/* Notification dropdown */}
            <div
              onClick={() => toggleDropdown("notification")}
              className="relative flex hover:cursor-pointer"
              ref={notifDropdownRef}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8565 15.082C14.7197 14.8614 16.5504 14.4217 18.3105 13.772C16.8199 12.1208 15.9962 9.9745 15.9995 7.75V7.05V7C15.9995 5.4087 15.3674 3.88258 14.2421 2.75736C13.1169 1.63214 11.5908 1 9.9995 1C8.4082 1 6.88208 1.63214 5.75686 2.75736C4.63164 3.88258 3.9995 5.4087 3.9995 7V7.75C4.00252 9.97463 3.17849 12.121 1.6875 13.772C3.4205 14.412 5.2475 14.857 7.1425 15.082M12.8565 15.082C10.9585 15.3071 9.04051 15.3071 7.1425 15.082M12.8565 15.082C13.0006 15.5319 13.0364 16.0094 12.9611 16.4757C12.8857 16.942 12.7013 17.384 12.4229 17.7656C12.1444 18.1472 11.7798 18.4576 11.3587 18.6716C10.9376 18.8856 10.4719 18.9972 9.9995 18.9972C9.52712 18.9972 9.06142 18.8856 8.64031 18.6716C8.21919 18.4576 7.85457 18.1472 7.57612 17.7656C7.29767 17.384 7.11326 16.942 7.03791 16.4757C6.96256 16.0094 6.9984 15.5319 7.1425 15.082"
                  stroke="#5D6679"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
                {notifications.filter((n) => !n.read).length}
              </span>
              {isNotifOpen && (
                <NotificationDropdownMenu
                  notifications={notifications}
                />
              )}
            </div>

            {/* Profile dropdown */}
            <div
              onClick={() => toggleDropdown("profile")}
              className="relative flex hover:cursor-pointer"
              ref={profileDropdownRef}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                {/* User avatar can go here */}
              </div>
              {isProfileOpen && (
                <ProfileDropdownMenu  />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
