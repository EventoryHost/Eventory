"use client"
import React, { useState, useEffect, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DropdownProps {
    label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:text-black"
                type="button"
            >
                {label}
                <svg
                    className="w-2 h-2 ml-2"
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
                <div
                    id="dropdown"
                    className={`z-10 ${isDropdownVisible ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute mt-1`}
                >
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date as Date)}
                        inline
                    />
                </div>
            ) : (
                <div
                    id="dropdown"
                    className={`z-10 ${isDropdownVisible ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 absolute mt-1`}
                >
                    <ul className="py-1 text-xs text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
        <div className="flex justify-between items-center w-full flex-col md:flex-row border border-gray-300 rounded-2xl">
            <div className="flex justify-between items-center w-full">
                <div className="flex pl-[2.8rem] items-center text-black">
                    <img className="mr-2" src="/event.svg" alt="" />
                    <Dropdown label="Event" />
                    <div className="border-l border-gray-300 h-8 ml-4"></div>
                </div>
                <div className="flex items-center pl-[1.5rem] pr-3">
                    <img className="mr-2" src="/Location.svg" alt="" />
                    <Dropdown label="Location" />
                    <div className="border-l border-gray-300 h-8 ml-4"></div>
                </div>
                <div className="flex items-center ml-4">
                    <img className="mr-2" src="/Calendar.svg" alt="" />
                    <Dropdown label="Dates" />
                </div>
            </div>
            <div className="flex ml-4">
                <button className="py-4 pr-[4rem] pl-[4rem] md:rounded-l-sm text-white bg-[#2E3192] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm text-xs h-full w-full border-none rounded-2xl">Explore</button>
            </div>
        </div>

    );
}

export default DropdownBar;
