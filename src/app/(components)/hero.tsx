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
      <div className="flex w-[100%] flex-col flex-wrap justify-center overflow-hidden bg-gradient-to-b from-[#BFBFEF] to-[#ffffff] md:flex-row lg:py-[5vw] md:py-[15vw] py-[27vw]">
        <div className="flex w-[100%] flex-col items-center justify-center py-[8%] md:py-[3%]">
          <div className="flex flex-col items-center justify-center px-[4%]">
            <h1 className="text-center text-4xl font-bold md:text-6xl">
              Find the Perfect <FlipWords words={words} className="" />
              <br /> for Your Event
            </h1>
            <p className="mt-7 text-center md:w-[70%] md:text-xl">
              Discover, compare, and book top-rated vendors for weddings,
              corporate events, parties, and more – all in one place.
            </p>
            <div className="flex w-[100%] items-center justify-center self-start">
              <DropdownBar />
            </div>
          </div>
        </div>
        <Horizontal />
      </div>
    </>
  );
};

export default Feed;
