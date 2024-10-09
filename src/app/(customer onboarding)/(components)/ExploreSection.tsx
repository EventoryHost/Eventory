"use client";

import { DropdownBar } from "@/components/dropdownbar";
import Image from "next/image";
import { useState, useEffect } from "react";



interface ExploreSectionProps {
  slides: string[];
  eventType?: boolean;
}

export default function ExploreSection({ slides, eventType }: ExploreSectionProps) {
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
    <div
      className=" flex md:h-[399px] h-[454px] w-full items-center justify-between transition-opacity duration-1000 ease-in-out "

    >

      <div className="relative h-full w-full   overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex md:flex-row flex-col justify-between md:items-center  absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{
              background:
                "linear-gradient(90deg, #605ED8 0%, #4445B1 55.17%, #2E3192 100%)",
            }}
          >
            {eventType ?
              <div className="flex  flex-col space-y-8 md:mx-[72px] md:my-[35px] my-10 px-6 opacity-90 justify-center">

                <h1 className="md:text-4xl text-2xl font-semibold text-white md:w-[80%]">Turning visions into memories  </h1>
                <h1 className="md:text-2xl text-sm font-medium text-white "> Making events successful with Eventory!</h1>
                <h1 className="md:text-2xl text-sm font-medium text-white pt-8  "> <span className="md:text-4xl text-2xl font-semibold">Get 20% OFF</span> on your first 2 bookings</h1>
              </div>

              : <div className="flex w-1/2 flex-col items-start justify-center space-y-6 p-10 opacity-90">
                <h1 className="text-4xl font-bold text-white">Weddings in Jaipur</h1>
                {/* <ExploreBar /> */}
                <DropdownBar />
              </div>


            }
            <div className="relative h-full md:w-[597px] w-full  overflow-hidden ">
              {/* Image */}
              <div className="absolute inset-0 transition-opacity duration-500 "
                style={
                  isMobile
                    ? {
                      maskImage: 'linear-gradient(to bottom, transparent, black 50px)', // Adjusted for mobile view
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 50px)',
                    }
                    : {
                      maskImage: 'linear-gradient(to right, transparent, black 50px)', // Desktop view
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 50px)',
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
    </div >
    {/* Navigation Dots */}
    <div className="m-4 flex justify-center space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`md:h-3 md:w-3 h-2 w-2 rounded-full ${index === currentSlide
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
