"use client";

import { DropdownBar } from "@/components/dropdownbar";
import { useState, useEffect } from "react";

// Array of image URLs for the carousel
const images = [
  "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=2070&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1664530452611-69a2895ce19d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1635341109410-c6e11be45553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdlZGRpbmclMjBsb2NhdGlvbnxlbnwwfDB8MHx8fDA%3D",
];

export default function ExploreSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[300px] w-full items-center justify-between transition-opacity duration-1000 ease-in-out"
      style={{
        background: 'linear-gradient(90deg, #605ED8 0%, #4445B1 55.17%, #2E3192 100%)'
      }}
    >      
    {/* Left Side: Heading + Search Bar */}
      <div className="flex flex-col items-start justify-center w-1/2 p-10 space-y-6 opacity-90">
        <h1 className="text-4xl font-bold text-white">
          Weddings in Jaipur
        </h1>
        {/* <ExploreBar /> */}
        <DropdownBar />
      </div>

      {/* Right Side: Image Carousel */}
      <div className="relative w-[30%] h-full  rounded-xl overflow-hidden">
        {/* Image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={images[currentIndex]}
            alt={`Wedding Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
