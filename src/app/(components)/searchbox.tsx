"use client"
import React, { useState } from "react";

const Dropdown = ({ label } : {label : String}) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="relative inline-block">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:text-black"
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
        </div>
    );
};

export default function DropdownBar() {
    return (
        <div className="flex">
            <div className="flex justify-between items-center w-full border border-gray-300 rounded-lg">
                <Dropdown label="Event" />
                <div className="border-l border-gray-300 h-6 mx-2">
                </div>
                <Dropdown label="Location" />
                <div className="border-l border-gray-300 h-6 mx-2"></div>
                <Dropdown label="All dates" />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-r-lg text-xs px-3 py-1.5 h-full border border-l-0 border-gray-300">Blue Button</button>
            </div>
        </div>
    );
}