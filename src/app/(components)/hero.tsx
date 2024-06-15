"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Nav from "./nav"; // Import the Nav component
import DropdownBar from "@/components/ui/dropdownbar";
import Sectiontwo from "./sectiontwo";
import { Horizontal } from "./horizontal";

const Feed: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Define a media query for medium screens and larger
  const isMediumScreenOrLarger = useMediaQuery({ query: "(min-width: 946px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="md:h-[90vh] h-[70vh] flex md:flex-row flex-col w-[100%]">
        <div className="flex lg:w-[50%] w-[100%] h-[100%] items-center justify-center">
          <div className="flex flex-col items-start min mt-[10%] justify-center md:mb-[20%] mb-[1%] px-[4%] h-full">
            <h1 className="md:text-6xl text-4xl font-bold">
              Find the Perfect Vendors for Your Event
            </h1>
            <p className="w-[70%] md:text-xl mt-7">
              Discover, compare, and book top-rated vendors for weddings,
              corporate events, parties, and more – all in one place.
            </p>
            <div className="mt-7 w-[100%]">
              <DropdownBar />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-4 pr-5 h-full">
          <div className="relative h-full w-full">
            {isMounted && isMediumScreenOrLarger && (
              <ParallaxScroll className="custom-class" />
            )}
          </div>
        </div>
      </div>
      {isMounted && !isMediumScreenOrLarger && (
        <>
          <Horizontal/>
        </>
      )}
    </>
  );
};

export default Feed;
