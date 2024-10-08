"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ImageRow from "./image_row";

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
      <div className="flex w-[100%] flex-col flex-wrap justify-center overflow-hidden bg-gradient-to-b from-[#BFBFEF] to-[#ffffff] md:flex-row md:py-0">
        <div className="flex w-[100%] flex-col items-center justify-center py-[8%] md:py-[3%] gap-9">
          <div className="flex flex-col items-center justify-center px-[4%]">
            <h1 className="text-center text-4xl font-bold md:text-6xl leading-relaxed">
            Hassle-free bookings<br/> at your convenience
            </h1>
            <p className="mt-7 text-center md:w-[60%] md:text-xl">
              Discover, compare, and book top-rated vendors for weddings,
              corporate events, parties, and more – all in one place.
            </p>
            <button className="bg-[#2E3192] rounded-xl px-5 py-3 mt-9 text-white">Get Started</button>
          </div>
          <ImageRow/>
        </div>
      </div>
    </>
  );
};

export default Feed;
