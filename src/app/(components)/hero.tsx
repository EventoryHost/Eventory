"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Nav from "./nav"; // Import the Nav component
import DropdownBar from "@/components/ui/dropdownbar";
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
      <div className="flex h-[70vh] w-[100%] flex-col md:h-[90vh] md:flex-row">
        <div className="flex h-[100%] w-[100%] items-center justify-center lg:w-[50%]">
          <div className="min mb-[1%] mt-[10%] flex h-full flex-col items-start justify-center px-[4%] md:mb-[20%]">
            <h1 className="text-4xl font-bold md:text-6xl">
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
