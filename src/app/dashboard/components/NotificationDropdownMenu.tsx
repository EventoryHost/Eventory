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
  const filteredNotifications = notifications.filter((notification) =>
    filter === "read" ? notification.read : !notification.read,
  );

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click from propagating
  };

  return (
    <div
      className="absolute right-0 mt-4 w-[400px] bg-white border-2 rounded-lg shadow-lg top-[20px] z-40"
      onClick={handleDropdownClick} // Add onClick handler here
    >
      <div className="p-4">
        <h4 className="my-4 text-xl font-medium">Notifications</h4>

        {/* Toggle Switch */}
        <div className="mb-4 flex items-center">
          <div
            className="relative inline-flex w-full cursor-pointer items-center"
            onClick={() => setFilter(filter === "read" ? "unread" : "read")}
          >
            <div className="relative h-12 w-full overflow-hidden rounded-lg bg-gray-100 transition-colors duration-300 ease-in-out">
              {/* Container for both labels */}
              <div className="absolute flex h-full w-full items-center justify-around">
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${filter === "read" ? "text-gray-700" : "text-black"}`}
                >
                  Read
                </span>
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${filter === "unread" ? "text-gray-700" : "text-black"}`}
                >
                  Unread
                </span>
              </div>

              {/* Sliding white background */}
              <div
                className={`absolute h-full w-1/2 rounded-lg border-2 bg-white transition-transform duration-300 ease-in-out ${filter === "unread" ? "translate-x-full" : "translate-x-0"}`}
              />
            </div>
          </div>
        </div>

        {filteredNotifications.length === 0 ? (
          <p className="text-gray-500">No notifications</p>
        ) : (
          <div className="flex flex-col gap-6">
            {filteredNotifications.map((notification, index) => (
              <div key={index} className={`flex items-center gap-5`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 p-2">
                  <img src="/wallet.svg" alt="wallet" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-medium">
                      {notification.title}
                    </h5>
                    <span className="text-xs text-gray-400">
                      {notification.timeago}
                    </span>
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
