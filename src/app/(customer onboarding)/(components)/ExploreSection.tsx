"use client";

import { DropdownBar } from "@/components/dropdownbar";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ExploreSectionProps {
  slides: string[];
  eventType?: boolean;
}

export default function ExploreSection({
  slides,
  eventType,
}: ExploreSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(false); // Initial value can be false

  return (
    <>
      <div className="flex h-[454px] w-full items-center justify-between transition-opacity duration-1000 ease-in-out md:h-[399px]">
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 top-0 flex h-full w-full flex-col justify-between transition-opacity duration-1000 ease-in-out md:flex-row md:items-center ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              style={{
                background:
                  "linear-gradient(90deg, #605ED8 0%, #4445B1 55.17%, #2E3192 100%)",
              }}
            >
              {eventType ? (
                <div className="my-10 flex flex-col justify-center space-y-8 px-6 opacity-90 md:mx-[72px] md:my-[35px]">
                  <h1 className="text-2xl font-semibold text-white md:w-[80%] md:text-4xl">
                    Turning visions into memories{" "}
                  </h1>
                  <h1 className="text-sm font-medium text-white md:text-2xl">
                    {" "}
                    Making events successful with Eventory!
                  </h1>
                  <h1 className="pt-8 text-sm font-medium text-white md:text-2xl">
                    {" "}
                    <span className="text-2xl font-semibold md:text-4xl">
                      Get 20% OFF
                    </span>{" "}
                    on your first 2 bookings
                  </h1>
                </div>
              ) : (
                <div className="flex w-1/2 flex-col items-start justify-center space-y-6 p-10 opacity-90">
                  <h1 className="text-4xl font-bold text-white">
                    Weddings in Jaipur
                  </h1>
                  {/* <ExploreBar /> */}
                  <DropdownBar />
                </div>
              )}
              <div className="relative h-full w-full overflow-hidden md:w-[597px]">
                {/* Image */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={
                    isMobile
                      ? {
                          maskImage:
                            "linear-gradient(to bottom, transparent, black 50px)", // Adjusted for mobile view
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 50px)",
                        }
                      : {
                          maskImage:
                            "linear-gradient(to right, transparent, black 50px)", // Desktop view
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 50px)",
                        }
                  }
                >
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="m-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full md:h-3 md:w-3 ${
              index === currentSlide
                ? "bg-[#2E3192]"
                : "border-2 border-[#2E3192] bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
