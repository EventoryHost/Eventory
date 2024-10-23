import React, { useState } from "react";

interface Notification {
  read: boolean;
  timeago: string;
  title: string;
  description: string;
}

interface NotificationDropdownMenuProps {
  notifications: Notification[];
  setIsOpen: (isOpen: boolean) => void; // Add setIsOpen prop
}

const NotificationDropdownMenu: React.FC<NotificationDropdownMenuProps> = ({
  notifications,
  setIsOpen, // Destructure the prop
}) => {
  const [filter, setFilter] = useState<"read" | "unread">("read");

  // Filter notifications based on the selected filter
  const filteredNotifications =

    notifications.filter((notification) =>
      filter === "read" ? notification.read : !notification.read
    );

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click from propagating
  };

  return (
    <div
      className="absolute right-0 mt-2 w-[400px] bg-white border-2 rounded-lg shadow-lg top-[20px] z-40"
      onClick={handleDropdownClick} // Add onClick handler here
    >
      <div className="p-4">
        <h4 className="font-medium text-xl my-4">Notifications</h4>

        {/* Toggle Switch */}
        <div className="flex items-center mb-4">
          <div
            className="relative inline-flex items-center cursor-pointer w-full"
            onClick={() => setFilter(filter === "read" ? "unread" : "read")}
          >
            <div className="w-full h-12 bg-gray-100 rounded-lg transition-colors duration-300 ease-in-out relative overflow-hidden">
              {/* Container for both labels */}
              <div className="absolute w-full h-full flex items-center justify-around ">
                <span className={`text-sm font-medium transition-colors duration-300 ${filter === 'read' ? 'text-gray-700' : 'text-black'}`}>
                  Read
                </span>
                <span className={`text-sm font-medium transition-colors duration-300 ${filter === 'unread' ? 'text-gray-700' : 'text-black'}`}>
                  Unread
                </span>
              </div>

              {/* Sliding white background */}
              <div
                className={`absolute w-1/2 h-full bg-white rounded-lg  transition-transform duration-300 ease-in-out border-2
                ${filter === "unread" ? "translate-x-full" : "translate-x-0"}`}
              />
            </div>
          </div>
        </div>

        {filteredNotifications.length === 0 ? (
          <p className="text-gray-500">No notifications</p>
        ) : (
          <div className="flex flex-col gap-6">
         { filteredNotifications.map((notification, index) => (
            <div
              key={index}
              className={`flex items-center gap-5  
                `}
            >
              <div className="w-10 h-10 p-2 rounded-full border-2 flex items-center justify-center">
                <img src="/wallet.svg" alt="wallet" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h5 className="font-medium text-base">{notification.title}</h5>
                  <span className="text-xs text-gray-400">{notification.timeago}</span>

                </div>
                <p className="text-sm text-gray-600">
                  {notification.description.split(" ").map((word, idx) => {
                    if (word.toLowerCase() === "completed") {
                      return (
                        <span key={idx} className="text-green-600">
                          {word}{" "}
                        </span>
                      );
                    } else if (word.toLowerCase() === "failed") {
                      return (
                        <span key={idx} className="text-red-600">
                          {word}{" "}
                        </span>
                      );
                    } else {
                      return word + " ";
                    }
                  })}
                </p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdownMenu;
