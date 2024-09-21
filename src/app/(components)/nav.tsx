"use client";
import "../globals.css";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { IoIosClose } from "react-icons/io";
import {
  Categories,
  handleSearch,
  handleSearchAbort,
  handleSearchClick,
} from "@/controllers/search";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Categories[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const pathname = usePathname();

  return (
    <nav
      className={`navbar flex flex-col shadow-md ${
        pathname === "/" ? "bg-[#BFBFEF]" : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* logo eventory part */}
        <div className="logo flex flex-col items-center justify-center">
          <Link href={"/"}>
            <svg
              width="21"
              height="29"
              viewBox="0 0 37 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H35.6004C35.6004 6.46032 30.3633 11.6974 23.903 11.6974H0V0Z"
                fill="url(#paint0_linear_2126_47)"
              />
              <path
                d="M0 33.1124C0 25.2951 6.33713 18.958 14.1544 18.958V47.9999H0V33.1124Z"
                fill="#0A0929"
              />
              <path
                d="M1 29C1 23.4772 5.47715 19 11 19H33V29H1Z"
                fill="#0A0929"
              />
              <rect
                y="36.7052"
                width="36.8872"
                height="11.2941"
                fill="#0A0929"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2126_47"
                  x1="0"
                  y1="5.84872"
                  x2="35.6004"
                  y2="5.84872"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6966EB" />
                  <stop offset="0.204" stopColor="#5F5DD6" />
                  <stop offset="1" stopColor="#3B3A85" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <p className="font-marko-one-regular hidden font-semibold md:block md:text-xs">
            Eventory
          </p>
        </div>

        {/* search part */}
        <div className="hidden max-h-full flex-1 sm:pl-0 md:mx-0 lg:mx-10 lg:block">
          <form className="relative mx-auto flex flex-grow justify-start">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <div className="relative w-full max-w-[21rem] justify-between px-5 md:max-w-[27rem] lg:max-w-[18rem] lg:px-0 xl:max-w-[27rem]">
              <input
                type="text"
                id="default-search"
                className="block w-full justify-start rounded-lg border border-gray-300 bg-gray-50 p-2 pl-3 text-start text-xs text-gray-900"
                placeholder="Search for services"
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

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-[rgba(46,49,146,1)] px-3">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.99998"
                    cy="9"
                    r="8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 14.958L19.5 19.958"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

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

        {/* mobile hamburger and profile */}
        <div className="menu-icon border-[rgba(161,161,161,1)] px-0 md:rounded-none md:border-0">
          <div className="flex flex-row gap-2">
            <div className="menu-icon">
              <div className="dropdown dropdown-end h-min">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex flex-col items-center justify-center"
                >
                  <svg
                    className="ml-[3px] mt-2 text-black"
                    width="20"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      transform="matrix(-1 0 0 1 16 3)"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 16.9347C5 16.0743 5.54085 15.3068 6.35109 15.0175V15.0175C10.004 13.7128 13.996 13.7128 17.6489 15.0175V15.0175C18.4591 15.3068 19 16.0743 19 16.9347V18.2502C19 19.4376 17.9483 20.3498 16.7728 20.1818L15.8184 20.0455C13.2856 19.6837 10.7144 19.6837 8.18162 20.0455L7.22721 20.1818C6.0517 20.3498 5 19.4376 5 18.2502V16.9347Z"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  //  bg-[url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-[80vw] translate-x-10 rounded-box bg-white p-2 shadow sm:ml-0 sm:w-[40vw] md:w-[40vw]"
                >
                  <div className="w-full rounded-lg bg-white">
                    <div className="px-3 text-center">
                      <h2 className="mb-2 text-lg font-semibold text-[rgba(46,49,146,1)]">
                        Welcome to Eventory
                      </h2>
                      <p className="hover:text-text-gray-600 mb-4 text-start text-sm text-gray-600 lg:pl-4">
                        To manage your account and do bookings for your events.
                      </p>
                      <div className="mb-4 flex justify-around">
                        <Link href="/">
                          <button className="rounded-lg border border-gray-700 px-5 py-[7px] duration-100 hover:bg-[rgba(46,49,146,1)] hover:text-[#fcfcfc]">
                            Log In
                          </button>
                        </Link>
                        <Link href="/signup">
                          <button className="rounded-lg bg-[rgba(46,49,146,1)] px-4 py-2 text-white">
                            Sign up
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* <ul className="flex flex-col items-start font-poppins text-sm font-semibold text-[rgba(0,0,0,1)]">
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className=" ">
                          <p className=""> Account Details </p>
                        </a>
                        <span className="item-end">&gt;</span>
                      </li>
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className=" ">
                          <p> Bookings</p>
                        </a>
                        <span className="item-end">&gt;</span>
                      </li>
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className="gap-8">
                          <p>Saved vendors </p>
                        </a>
                        <span>&gt;</span>
                      </li>
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className="gap-8">
                          <p>Billing and Payments</p>
                        </a>
                        <span>&gt;</span>
                      </li>
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className="gap-8">
                          <p>Feedback</p>
                        </a>
                        <span>&gt;</span>
                      </li>
                      <li className="flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className="gap-8">
                          <p>Contact us </p>
                        </a>
                        <span>&gt;</span>
                      </li>
                      <li className="mr-[20px] flex w-full flex-row items-center justify-between py-2">
                        <a href="#" className="gap-8">
                          <p>Help</p>
                        </a>
                        <span>&gt;</span>
                      </li>
                    </ul> */}
                  </div>
                </ul>
              </div>
            </div>

            <div className="menu-icon">
              <svg
                className="mt-1"
                width="1"
                height="30"
                viewBox="0 0 1 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="40"
                  stroke="#797878"
                />
              </svg>
            </div>

            <div className="menu-icon items-center" onClick={handleShowNavbar}>
              <svg
                className={`hamburger mr-1 mt-2 items-center text-black ${showNavbar && "rotate-90 scale-90 duration-100"}`}
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L4 6"
                  stroke="#2B3F6C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 12L4 12"
                  stroke="#2B3F6C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 18H4"
                  stroke="#2B3F6C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* nav List */}

        <div
          className={`nav-elements ${showNavbar && "active sm:shadow-2xl md:shadow-none"}`}
        >
          <button
            onClick={handleShowNavbar}
            className="mr-[2vw] mt-[2vh] w-10 ncom:hidden"
          >
            <IoIosClose size={35} />
          </button>
          <div className="flex w-auto items-center justify-center">
            <ul
              onClick={handleShowNavbar}
              className={`${showNavbar && "item-start flex"}`}
            >
              <li className="top-margin">
                <Link href={"/about"}>
                  <p>About</p>
                </Link>
              </li>
              <li className="top-margin">
                <Link href="/business">
                  <p>Business</p>
                </Link>
              </li>
              <li className="top-margin">
                <Link href={"#"}>
                  <p>Venue</p>
                </Link>
              </li>
              <li className="top-margin">
                <Link href={"#"}>
                  <p>Vendors</p>
                </Link>
              </li>
              <li className="top-margin">
                <Link href={"/EventListing"}>
                  <p>Events</p>
                </Link>
              </li>
              <li className="top-margin">
                <Link href={"#"}>
                  <p>Special Events</p>
                </Link>
              </li>
              <li className="top-margin ncom:hidden">
                <Link href={"#"}>
                  <p>Inventory</p>
                </Link>
              </li>
              <li className="seprator">
                <svg
                  width="1"
                  height="40"
                  viewBox="0 0 1 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499998"
                    y2="40"
                    stroke="#797878"
                  />
                </svg>
              </li>
              <li className="hidden ncom:block">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="hidden md:block"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.3968 7.77867C2.66025 5.22985 4.80791 3.29272 7.37031 3.29272H15.5974C18.5111 3.29272 20.8076 5.77415 20.5824 8.67916L19.9623 16.6792C19.7605 19.2829 17.5888 21.2927 14.9772 21.2927H6.54343C3.57869 21.2927 1.26512 18.7277 1.56993 15.7787L2.3968 7.77867Z"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2.8865 8.48779L20.0127 8.48779"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.7438 2.2439L15.7438 5.17073"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.18005 2.2439L7.18005 5.17073"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14.4391H13"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 12L10.5 16.8781"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.7177 4H15.0985L16.178 4.10518C18.2354 4.30563 19.9574 5.7515 20.5107 7.74324L21.5544 11.5L23.0238 18V18C23.5223 20.0357 21.981 22 19.8852 22H14.2074"
                      stroke="#2B3F6C"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <p className="bottom-0 mt-[1px] text-xs">Inventory</p>
                </div>
              </li>
              <li id="profile" className="flex flex-col">
                <div className="dropdown dropdown-end h-min">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex flex-col items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                        transform="matrix(-1 0 0 1 16 3)"
                        stroke="#2B3F6C"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M5 16.9347C5 16.0743 5.54085 15.3068 6.35109 15.0175V15.0175C10.004 13.7128 13.996 13.7128 17.6489 15.0175V15.0175C18.4591 15.3068 19 16.0743 19 16.9347V18.2502C19 19.4376 17.9483 20.3498 16.7728 20.1818L15.8184 20.0455C13.2856 19.6837 10.7144 19.6837 8.18162 20.0455L7.22721 20.1818C6.0517 20.3498 5 19.4376 5 18.2502V16.9347Z"
                        stroke="#2B3F6C"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <p className="bottom-0 text-xs">Profile</p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="item-center menu dropdown-content menu-sm z-[1] mt-4 rounded-box bg-[rgba(255,255,255,1)] p-2 shadow-lg md:w-[44vw] lg:w-[33vw] xl:w-[20vw]"
                  >
                    <div className="w-full rounded-lg bg-white">
                      <div className="px-3 text-center">
                        <h2 className="mb-2 text-lg font-semibold text-[rgba(46,49,146,1)]">
                          Welcome to Eventory
                        </h2>
                        <p className="hover:text-text-gray-600 mb-4 text-start text-sm text-gray-600 lg:pl-4">
                          To manage your account and do bookings for your
                          events.
                        </p>
                        <div className="mb-4 flex justify-around">
                          {/* <Link href="/login">
                            <button className="rounded-lg border border-gray-700 px-5 py-[7px] duration-100 hover:bg-[rgba(46,49,146,1)] hover:text-[#fcfcfc]">
                              Log In
                            </button>
                          </Link> */}
                          <Link href="/signup">
                            <button className="rounded-lg bg-[rgba(46,49,146,1)] px-4 py-2 text-white">
                              Register as Vendor
                            </button>
                          </Link>
                        </div>
                      </div>
                      {/* <ul className="item-start -ml-1 flex flex-col font-poppins text-sm font-semibold text-[rgba(0,0,0,1)]">
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className=" ">
                            <p className="text-sm md:text-base">
                              {" "}
                              Account Details{" "}
                            </p>
                          </a>
                          <span className="item-end">&gt;</span>
                        </li>
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className=" ">
                            <p className="text-sm md:text-base"> Bookings</p>
                          </a>
                          <span className="item-end">&gt;</span>
                        </li>
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className="gap-8">
                            <p className="text-sm md:text-base">
                              Saved vendors{" "}
                            </p>
                          </a>
                          <span>&gt;</span>
                        </li>
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className="gap-8">
                            <p className="text-sm md:text-base">
                              Billing and Payments
                            </p>
                          </a>
                          <span>&gt;</span>
                        </li>
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className="gap-8">
                            <p className="text-sm md:text-base">Feedback</p>
                          </a>
                          <span>&gt;</span>
                        </li>
                        <li className="flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className="gap-8">
                            <p className="text-sm md:text-base">Contact us </p>
                          </a>
                          <span>&gt;</span>
                        </li>
                        <li className="mr-[20px] flex w-full flex-row items-center justify-between py-2">
                          <a href="#" className="gap-8">
                            <p className="text-sm md:text-base">Help</p>
                          </a>
                          <span>&gt;</span>
                        </li>
                      </ul> */}
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container lg:hidden">
        <form className="relative mx-0 flex w-full pt-2">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <div className="relative w-full justify-between lg:px-0">
            <input
              type="text"
              id="default-search"
              className="block w-full justify-start rounded-lg border border-gray-300 bg-gray-50 p-2 pl-2 text-start text-xs text-gray-900 sm:pl-3 md:text-center md:text-sm"
              placeholder="Search for party and event services"
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center rounded-r-lg bg-[rgba(46,49,146,1)] px-3 py-3 xl:pr-7">
              <svg
                width="16"
                height="17"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.99998"
                  cy="9"
                  r="8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 14.958L19.5 19.958"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

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
    </nav>
  );
};

export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Categories,
//   handleSearch,
//   handleSearchAbort,
//   handleSearchClick,
// } from "@/controllers/search";

// const Nav: React.FC = () => {
// const [isOpen, setIsOpen] = useState(false);
// const [query, setQuery] = useState("");
// const [results, setResults] = useState<Categories[]>([]);
//   const tabs: string[][] = [
//     ["About", "/about"],
//     ["Venues", "#"],
//     ["Vendors", "#"],
//     ["Events", "#"],
//     ["Special Services", "#"],
//     ["Business", "/business"],
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="border-gray-300 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
//       <div className="mx-auto flex flex-wrap items-center justify-between gap-0 p-4">

//         {/* 1. logo portion  */}

//         {/* <a href="/" className="s items-center justify-center">
//           <Image
//             width={30}
//             height={30}
//             src="/logo.svg"
//             alt="Eventory Logo"
//             className="h-13 w-10"
//           />
//         </a> */}

//         {/* 2.  searching poriton */}

//         {/* <div className="mx-5 max-h-full max-w-full flex-1 pl-[10px] sm:pl-0 md:mx-0">
//           <form className="relative mx-auto flex flex-grow justify-center">
//             <label
//               htmlFor="default-search"
//               className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
//             >

//             </label>
//             <div className="relative w-full max-w-[21rem] md:max-w-[27rem] lg:max-w-[18rem] xl:max-w-[27rem]">
//               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 xl:pl-5">
//                 <svg
//                   className="h-4 w-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 id="default-search"
//                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-7 text-sm text-gray-900 md:w-[27rem] lg:w-[18rem] xl:w-[27rem] xl:pl-12"
//                 placeholder="Search for party and event services"
//                 value={query}
//                 onChange={async (e) => {
//                   const value = e.target.value;
//                   setQuery(value);
//                   setResults(await handleSearch(value));
//                 }}
//                 onClick={async () => setResults(await handleSearchClick())}
//                 onBlur={async () => setResults(await handleSearchAbort())}
//                 required
//               />

//               {results.length > 0 && (
//                 <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
//                   {results.map((result, index) => (
//                     <li
//                       key={index}
//                       className="cursor-pointer p-2 hover:bg-gray-200"
//                       onClick={() => {
//                         setQuery(result.category);
//                         setResults([]);
//                       }}
//                     >
//                       {result.category}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </form>
//         </div> */}

//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex flex-col h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100
//           focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
//            dark:focus:ring-gray-600 lg:hidden"
//           aria-controls="navbar-dropdown"
//           aria-expanded={isOpen ? "true" : "false"}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="h-5 w-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
//           id="navbar-dropdown"
//         >
//           <ul className="z-100 mt-4 flex flex-col items-center rounded-lg
//           border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-col md:gap-4
//                     md:space-x-4 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 xl:space-x-8 rtl:space-x-reverse">
//             {tabs.map(([tab, redirect], index) => (
//               <li key={index}>
//                 <a
//                   href={redirect}
//                   className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700
//                    dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700
//                    md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//                 >
//                   {tab}
//                 </a>
//               </li>
//             ))}
//             <div className="flex-none">
//               <div className="dropdown dropdown-end">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-circle btn-ghost"
//                 >
//                   <div className="indicator">
//                     <Image
//                       src="/cart-icon.svg"
//                       width={40}
//                       height={40}
//                       alt="Cart"
//                       className="mix-blend-multiply"
//                     />
//                     <span className="badge indicator-item badge-sm">8</span>
//                   </div>
//                 </div>
//                 <div
//                   tabIndex={0}
//                   className="card dropdown-content card-compact z-[1] mt-3 hidden w-52 bg-base-100 shadow"
//                 >
//                   <div className="card-body">
//                     <span className="text-lg font-bold">8 Items</span>
//                     <span className="text-info">Subtotal: $999</span>
//                     <div className="card-actions">
//                       <button className="btn btn-primary btn-block">
//                         View cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <li>
//               <div className="dropdown dropdown-end h-min">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="avatar btn btn-circle btn-ghost"
//                 >
//                   <div className="w-10 translate-y-2 items-center justify-center">
//                     <svg
//                       width="28"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="4"
//                         cy="4"
//                         r="4"
//                         transform="matrix(-1 0 0 1 16 3)"
//                         stroke="#2B3F6C"
//                         strokeWidth="1.5"
//                       />
//                       <path
//                         d="M5 16.9347C5 16.0743 5.54085 15.3068 6.35109 15.0175V15.0175C10.004 13.7128 13.996 13.7128 17.6489 15.0175V15.0175C18.4591 15.3068 19 16.0743 19 16.9347V18.2502C19 19.4376 17.9483 20.3498 16.7728 20.1818L15.8184 20.0455C13.2856 19.6837 10.7144 19.6837 8.18162 20.0455L7.22721 20.1818C6.0517 20.3498 5 19.4376 5 18.2502V16.9347Z"
//                         stroke="#2B3F6C"
//                         strokeWidth="1.5"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <ul
//                   tabIndex={0}
//                   className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
//                 >
//                   <li>
//                     <a className="justify-between">Profile</a>
//                   </li>
//                   <li>
//                     <Link href={"/customerlogin"}>Customer Login</Link>
//                   </li>
//                   <li>
//                     <Link href={"/customersignup"}>Customer Signup</Link>
//                   </li>
//                   <li>
//                     <Link href={"/login"}>Vendor Login</Link>
//                   </li>
//                   <li>
//                     <Link href={"/signup"}>Vendor Signup</Link>
//                   </li>
//                   <li>
//                     <a>Settings</a>
//                   </li>
//                   <li>
//                     <a>Logout</a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
