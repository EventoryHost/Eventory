"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Nav from "./nav"; // Import the Nav component
import DropdownBar from "@/components/ui/dropdownbar";
import { Horizontal } from "./horizontal";
import {
  Categories,
  handleSearch,
  handleSearchAbort,
  handleSearchClick,
} from "@/controllers/search";

const Feed: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Categories[]>([]);

  // Define a media query for medium screens and larger
  const isMediumScreenOrLarger = useMediaQuery({ query: "(min-width: 946px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="flex h-[70vh] w-[100%] flex-col md:h-[90vh] md:flex-row">
        <div className="flex h-[100%] w-[100%] items-center justify-center lg:w-[50%]">
          <div className="min mt-10 flex h-full flex-col justify-normal px-[4%] md:mt-40 lg:mt-0 lg:justify-center">
            <div className="mb-5 block max-h-full items-center sm:pl-0 md:mx-0 lg:hidden">
              <form className="relative mx-auto flex flex-grow justify-center">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <div className="relative w-full max-w-[21rem] px-5 md:max-w-[27rem] lg:max-w-[18rem] lg:px-0 xl:max-w-[27rem]">
                  <div className="pointer-events-none absolute inset-y-0 flex items-center pl-2 xl:pl-5">
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
                    className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2 pl-6 sm:pl-9 md:pl-16 text-sm text-gray-900"
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
            <h1 className="text-4xl font-bold md:mt-32 md:text-6xl">
              Find the Perfect Vendors for Your Event
            </h1>
            <p className="mt-7 w-[70%] md:text-xl">
              Discover, compare, and book top-rated vendors for weddings,
              corporate events, parties, and more – all in one place.
            </p>
            <div className="mt-7 w-[100%]">
              <DropdownBar />
            </div>
          </div>
        </div>
        <div className="ml-4 h-full flex-1 pr-5">
          <div className="relative h-full w-full">
            {isMounted && isMediumScreenOrLarger && (
              <ParallaxScroll className="custom-class" />
            )}
          </div>
        </div>
      </div>
      {isMounted && !isMediumScreenOrLarger && (
        <>
          <Horizontal />
        </>
      )}
    </>
  );
};

export default Feed;
