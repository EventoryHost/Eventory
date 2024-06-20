"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Categories,
  handleSearch,
  handleSearchAbort,
  handleSearchClick,
} from "@/controllers/search";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Categories[]>([]);
  const tabs: string[][] = [
    ["About", "#"],
    ["Venues", "#"],
    ["Vendors", "#"],
    ["Events", "#"],
    ["Special Services", "#"],
    ["Business", "/business"],
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-300 dark:bg-gray-900 dark:border-gray-700">
      <div className=" flex flex-wrap gap-0 items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse sm:pl-12 lg:pl-3 xl:pl-12"
        >
          <Image
            width={30}
            height={30}
            src="/logo.svg"
            alt="Eventory Logo"
            className="w-10 h-13"
          />
        </a>
        <div className="flex-1 pl-[5px] sm:pl-0 max-w-full max-h-full ">
          <form className="flex justify-center relative flex-grow mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="w-full max-w-[21rem] md:max-w-[27rem] lg:max-w-[18rem] xl:max-w-[27rem] relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 xl:pl-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full md:w-[27rem] lg:w-[18rem] xl:w-[27rem] p-2 pl-7 xl:pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search for vendors, occasions or location"
                value={query}
                onChange={async (e) => {
                  const value = e.target.value;
                  setQuery(value);
                  setResults(await handleSearch(value));
                }}
                onClick={async () => setResults(await handleSearchClick())}
                onBlur={async () => setResults(await handleSearchAbort())}
                required
              />
              {results.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setQuery(result.category);
                        setResults([]);
                      }}
                    >
                      {result.category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 xl:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {tabs.map(([tab, redirect], index) => (
              <li key={index}>
                <a
                  href={redirect}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {tab}
                </a>
              </li>
            ))}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <Image
                      src="/cart-icon.svg"
                      width={40}
                      height={40}
                      alt="Cart"
                      className="mix-blend-multiply"
                    />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow hidden"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <div className="dropdown dropdown-end h-min">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 bg-white shadow menu menu-sm dropdown-content rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <Link href={"/customerlogin"}>Customer Login</Link>
                  </li>
                  <li>
                    <Link href={"/customersignup"}>Customer Signup</Link>
                  </li>
                  <li>
                    <Link href={"/login"}>Vendor Login</Link>
                  </li>
                  <li>
                    <Link href={"/signup"}>Vendor Signup</Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
