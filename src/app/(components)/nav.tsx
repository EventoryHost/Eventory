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
    <nav className="border-b-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-0 p-4">
        <a
          href="/"
          className="flex items-center space-x-3 sm:pl-12 lg:pl-3 xl:pl-12 rtl:space-x-reverse"
        >
          <Image
            width={30}
            height={30}
            src="/logo.svg"
            alt="Eventory Logo"
            className="h-13 w-10"
          />
        </a>
        <div className="max-h-full max-w-full flex-1 pl-[5px] sm:pl-0">
          <form className="relative mx-auto flex flex-grow justify-center">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full max-w-[21rem] md:max-w-[27rem] lg:max-w-[18rem] xl:max-w-[27rem]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 xl:pl-5">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-7 text-sm text-gray-900 md:w-[27rem] lg:w-[18rem] xl:w-[27rem] xl:pl-12"
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
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className="cursor-pointer p-2 hover:bg-gray-200"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
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
          <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 xl:space-x-8 rtl:space-x-reverse">
            {tabs.map(([tab, redirect], index) => (
              <li key={index}>
                <a
                  href={redirect}
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
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
                  className="btn btn-circle btn-ghost"
                >
                  <div className="indicator">
                    <Image
                      src="/cart-icon.svg"
                      width={40}
                      height={40}
                      alt="Cart"
                      className="mix-blend-multiply"
                    />
                    <span className="badge indicator-item badge-sm">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card dropdown-content card-compact z-[1] mt-3 hidden w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
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
                  className="avatar btn btn-circle btn-ghost"
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
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
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
