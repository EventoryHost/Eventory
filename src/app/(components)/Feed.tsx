"use client";
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Nav from "./nav"; // Import the Nav component
import DropdownBar from "@/components/ui/dropdownbar";
import Sectiontwo from "./sectiontwo";

const Feed: React.FC = () => {
  return (
    <div className="h-fit w-[100%]">
      <div className="flex justify-between items-start h-full">
        <div className="flex-1 flex flex-col pl-10 pt-20">
          <h1 className="text-5xl  font-bold leading-[60px]">
            Find the perfect <br></br> Vendors for your <br></br> Event
          </h1>
          <p className="mt-8 font-light  text-md">
            Discover, compare, and book top-rated vendors <br />
            for weddings, corporate events, parties, and <br />
            more – all in one place.
          </p>
          <div className="mt-8">
            <DropdownBar />
          </div>
        </div>
        <div className="flex-1 ml-4 pr-5 h-full">
          <ParallaxScroll className="custom-class" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
