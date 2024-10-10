import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex min-w-full items-center min-h-[90vh] justify-center abhero">
      {/* Random positioned images surrounding the hero */}
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 1"
        className="absolute md:block hidden top-10 left-5 w-[100px] h-[100px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 2"
        className="absolute md:block hidden top-15 left-20 w-[100px] h-[100px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 3"
        className="absolute md:block hidden top-10 w-[100px] h-[100px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 4"
        className="absolute md:block hidden top-20 right-10 w-[80px] h-[80px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 5"
        className="absolute md:block hidden bottom-16 left-10 w-[60px] h-[60px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 6"
        className="absolute md:block hidden bottom-5 right-20 w-[90px] h-[90px] object-contain"
      />
      {/* Additional images */}
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 7"
        className="absolute md:hidden block top-5 right-5 w-[110px] h-[110px] object-contain"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 8"
        className="absolute md:block hidden bottom-10 right-30 w-[90px] h-[90px] object-contain"
      />

      {/* Hero Section */}
      <div className="mt-5 flex min-h-fit max-w-[100rem] flex-col items-center justify-center px-3 md:px-5">
        <div className="flex z-10 flex-col items-center justify-center space-y-9 md:p-9 md:px-5">
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
              href={"/"}
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
