"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { DropdownBar } from "@/components/dropdownbar";
import { Horizontal } from "./horizontal";
import { FlipWords } from "@/components/ui/flip-words";

const Feed: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Define a media query for medium screens and larger
  const isMediumScreenOrLarger = useMediaQuery({ query: "(min-width: 946px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const words = ["Vendor", "Venue", "Caterer"];

  return (
    <>
      <div className="flex w-[100%] flex-col flex-wrap justify-start overflow-hidden md:flex-row md:py-0 lpt:h-[90vh]">
        <div className="flex w-[100%] items-center justify-start lg:w-[50%]">
          <div className="mb-[10%] mt-[10%] flex h-[70vh] flex-col items-start justify-start px-[4%] md:h-[80vh] lg:mb-[40%] lg:h-[90vh]">
            <h1 className="text-4xl font-bold md:text-6xl">
              Find the Perfect
              <br />
              <FlipWords words={words} className="" /> for Your Event
            </h1>
            <p className="mt-7 w-[70%] md:text-xl">
              Discover, compare, and book top-rated vendors for weddings,
              corporate events, parties, and more – all in one place.
            </p>
            <div className="mt-7 flex items-start justify-center self-start">
              <DropdownBar />
            </div>
          </div>
        </div>
        <div className="ml-4 flex-1 pr-5">
          <div className="max-w-[100%]">
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
