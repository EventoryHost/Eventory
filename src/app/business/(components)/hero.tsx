import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="flex min-w-full items-center min-h-[90vh] justify-center abhero"
    >
      <div className="mt-5 flex min-h-fit max-w-[100rem] flex-col items-center justify-center px-3 md:px-5">
        <div className="flex flex-col items-center justify-center space-y-9 md:p-9 md:px-5">
          <div className="lg:w-[80%] xl:w-[50%]">
            <h1 className="text-center text-3xl font-bold leading-snug md:text-5xl">
              Build Your Business with Instant Connectivity
            </h1>
          </div>
          <div className="text-sm md:w-[50%] md:text-lg">
            <p className="text-center">
              Unlock your business&apos;s full potential by partnering with us!
              Join our platform to amplify your reach and connect with a vast,
              diverse customer base, fueling your growth and driving your
              success to new heights.
            </p>
          </div>
          <div className="flex w-fit flex-col items-center justify-center space-y-2">
            <button className="w-fit rounded-xl bg-[#2E3192] p-5 font-light text-white">
              Get Started
            </button>
            <Link
              href={""}
              onClick={(e) => e.preventDefault()}
              className="text-[#2E3192] underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
