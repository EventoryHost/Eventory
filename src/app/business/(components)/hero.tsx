import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="abhero relative flex flex-col min-h-[90vh] min-w-full items-center justify-center">
      {/* Random positioned images surrounding the hero */}
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 1"
        className="hidden md:absolute left-5 top-10  h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 2"
        className="top-15 hidden md:absolute left-20  h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 3"
        className="hidden md:absolute top-10  h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 4"
        className="hidden md:absolute right-10 top-20  h-[80px] w-[80px] object-contain md:block"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 5"
        className="hidden md:absolute bottom-16 left-10  h-[60px] w-[60px] object-contain md:block"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 6"
        className="hidden md:absolute bottom-5 right-20  h-[90px] w-[90px] object-contain md:block"
      />
      {/* Additional images */}
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 7"
        className="hidden md:absolute right-5 top-5  h-[110px] w-[110px] object-contain md:hidden"
      />
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
        alt="random image 8"
        className="right-30 hidden md:absolute bottom-10  h-[90px] w-[90px] object-contain md:block"
      />

      {/* Hero Section */}
      <div className="mt-5 flex min-h-fit max-w-[100rem] flex-col items-center justify-center px-3 md:px-5">
        <div className="z-10 flex flex-col items-center justify-center space-y-9 md:p-9 md:px-5">
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
      <div className="md:hidden mt-10 flex justify-center gap-5">
        <img
          src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
          alt="image 1"
          className="h-[150px] w-[150px] object-contain"
        />
        <img
          src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
          alt="image 2"
          className="h-[150px] w-[150px] object-contain"
        />
        <img
          src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/girl.png"
          alt="image 3"
          className="h-[150px] w-[150px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
