"use client";
import React, { useState, useEffect, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../ui/modal"; // Adjust the import path as needed

interface DropdownProps {
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (label === "Dates") {
      setModalOpen(true);
    } else {
      setDropdownVisible(!isDropdownVisible);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:text-black"
        type="button"
      >
        {label}
        <svg
          className="w-2 h-2 ml-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {label === "Dates" ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <div
          id="dropdown"
          className={`z-50 ${
            isDropdownVisible ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute mt-1`}
        >
          <ul
            className="py-1 text-xs text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const DropdownBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-w-fit border border-gray-300 rounded-2xl md:p-0 relative">
      <div className="flex md:flex-row justify-evenly items-center md:px-2 w-full">
        <div className="flex md:w-[33.3%] w-[30%] border-r items-center justify-center md:mb-0">
          <img className="md:w-5 w-3" src="/event.svg" alt="Event" />
          <Dropdown label="Event" />
          <div className="border-gray-300 h-8 ml-4 hidden md:block"></div>
        </div>
        <div className="flex md:w-[33.3%] w-[35%] border-r items-center justify-center md:mb-0 md:pl-4">
          <img
            className="md:w-5 w-3"
            width={10}
            src="/Location.svg"
            alt="Location"
          />
          <Dropdown label="Location" />
          <div className="border-gray-300 h-8 ml-4 hidden md:block"></div>
        </div>
        <div className="flex md:w-[33.3%] w-[30%] items-center justify-center md:mb-0 md:pl-4">
          <img
            className="md:w-5 w-3"
            width={10}
            src="/Calendar.svg"
            alt="Dates"
          />
          <Dropdown label="Dates" />
        </div>
      </div>
      <div className="w-full md:w-auto">
        <button className="py-2 w-full md:py-4 md:pr-16 md:pl-16 text-white bg-[#2E3192] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm text-xs md:rounded-r-xl rounded-br-box rounded-bl-xl">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DropdownBar;
