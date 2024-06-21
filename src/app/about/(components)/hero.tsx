import React from "react";
import Image from "next/image";

type Props = {};
const Hero = (props: Props) => {
  return (
    <>
      <div className=" md:min-h-screen flex md:flex-row flex-col justify-center">
        <div className=" xs:mx-4 md:w-[40%]">
          <div className="  md:h-[500px] md:w-[50%] bg-[rgba(255,255,255,0.3)]  flex flex-row md:absolute md:top-1/2 md:ml-56  md:transform md:-translate-y-1/3 translate-y-2 md:-translate-x-44 shadow-xl">
            <div className="  xs:px-3 md:z-50 z-0 md:relative mt-5 md:ml-5 w-[100%] md:w-[70%] ">
              <h1 className=" xs:text-md text-3xl md:text-6xl font-bold text-gray-900 ">
                Making Magic
                <br />
                Happen
              </h1>
              <p className="text-gray-700 xs:text-sm md:max-w-[70%] mt-10 text-start justify-start ">
                Discover, compare, and book top-rated vendors for weddings,
                corporate events, parties, and more – all in one place.
              </p>
              <button className="bg-[rgba(46,49,146,1)]  md:mt-20 xs:my-5 xs:mb-12 text-white py-4 px-4 rounded-2xl shadow-lg">
                Connect with us
              </button>
            </div>
          </div>
        </div>
        <div className=" xs:mt-[-20px] md:mt-0 md:block md:w-[60%]">
          <img
            src="/aboutus/hero.png"
            alt="Event"
            className="w-full h-full md:object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
