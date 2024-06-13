import React from "react";
import Image from "next/image";

type Props = {};

const Works = (props: Props) => {
  return (
    <div className=" bg-[#C1C9F7] p-4 pt-[3rem] w-full flex justify-center items-center flex-col">
      <div className="pl-12 pb-12 self-start">
        <h1 className="md:text-5xl text-3xl font-bold">How it works</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-[85%] lg:px-0 px-4 gap-9 lg:gap-3 justify-between pt-3 pb-12">
        <div className="flex flex-col justify-center items-center min-h-[50%] w-full lg:w-1/3">
          <p className="font-semibold text-xl md:text-3xl self-start">1. Explore</p>
          <div className="flex-1 flex items-center justify-center">
            <Image width={400} height={400} src="/Group 39655.svg" alt="Explore" />
          </div>
          <div className="text-sm md:text-lg font-semibold text-center mt-4">
            Discover the perfect vendors for your event from our diverse selection.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[50%] w-full lg:w-1/3">
          <p className="font-semibold text-xl md:text-3xl self-start">2. Evaluate</p>
          <div className="flex-1 flex items-center justify-center">
            <Image width={350} height={350} src="/Group 39656-2.svg" alt="Evaluate" />
          </div>
          <div className="text-sm md:text-lg font-semibold text-center mt-7 md:mt-4">
            Compare vendors based on reviews, services, availability, and pricing.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[50%] w-full lg:w-1/3">
          <p className="font-semibold text-xl md:text-3xl self-start">3. Secure</p>
          <div className="flex-1 flex items-center justify-center">
            <Image width={300} height={300} src="/Group 39657-2.svg" alt="Secure" />
          </div>
          <div className="text-sm md:text-lg font-semibold text-center mt-7 md:mt-4">
            Book your chosen vendors easily and securely through our platform.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
