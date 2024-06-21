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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
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
        className="font-sm inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-center text-xs text-black hover:bg-gray-100 focus:outline-none focus:ring-blue-300 dark:text-black"
        type="button"
      >
        {label}
        <svg
          className="ml-1 h-2 w-2"
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
          } absolute mt-1 w-32 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
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
    <div className="relative flex min-w-fit flex-col items-center justify-between rounded-2xl border border-gray-300 md:flex-row md:p-0">
      <div className="flex w-full items-center justify-evenly md:flex-row md:px-2">
        <div className="flex w-[30%] items-center justify-center border-r md:mb-0 md:w-[33.3%]">
          <img className="w-3 md:w-5" src="/event.svg" alt="Event" />
          <Dropdown label="Event" />
          <div className="ml-4 hidden h-8 border-gray-300 md:block"></div>
        </div>
        <div className="flex w-[35%] items-center justify-center border-r md:mb-0 md:w-[33.3%] md:pl-4">
          <img
            className="w-3 md:w-5"
            width={10}
            src="/Location.svg"
            alt="Location"
          />
          <Dropdown label="Location" />
          <div className="ml-4 hidden h-8 border-gray-300 md:block"></div>
        </div>
        <div className="flex w-[30%] items-center justify-center md:mb-0 md:w-[33.3%] md:pl-4">
          <img
            className="w-3 md:w-5"
            width={10}
            src="/Calendar.svg"
            alt="Dates"
          />
          <Dropdown label="Dates" />
        </div>
      </div>
      <div className="w-full md:w-auto">
        <button className="w-full rounded-xl bg-[#2E3192] py-2 text-xs text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:w-auto md:rounded-l-none md:rounded-r-xl md:px-16 md:py-4 md:text-sm">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DropdownBar;
