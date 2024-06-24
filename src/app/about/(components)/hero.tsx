import React from "react";
import "../../globals.css";
import Image from "next/image";

type Props = {};
const Hero = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center md:min-h-screen md:flex-row">
        <div className="xs:mx-4 md:w-[40%]">
          <div className="flex translate-y-2 flex-row bg-[rgba(255,255,255,0.3)] shadow-xl md:absolute md:top-1/2 md:ml-56 md:h-[500px] md:w-[50%] md:-translate-x-44 md:-translate-y-1/3 md:transform">
            <div className="z-0 mt-5 w-[100%] xs:px-3 md:relative md:z-50 md:ml-5 md:w-[70%]">
              <h1 className="xs:text-md text-3xl font-bold text-gray-900 md:text-6xl">
                Making Magic
                <br />
                Happen
              </h1>
              <p className="mt-10 justify-start text-start text-gray-700 xs:text-sm md:max-w-[70%]">
                Discover, compare, and book top-rated vendors for weddings,
                corporate events, parties, and more – all in one place.
              </p>
              <button className="rounded-xl bg-[rgba(46,49,146,1)] px-4 py-4 text-xs text-white shadow-lg xs:my-5 xs:mb-12 md:mt-20 md:rounded-2xl md:text-lg">
                Connect with us
              </button>
            </div>
          </div>
        </div>
        <div className="xs:mt-[-20px] md:mt-0 md:block md:w-[60%]">
          <img
            src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/about_hero.png"
            alt="Event"
            className="h-full w-full md:object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
