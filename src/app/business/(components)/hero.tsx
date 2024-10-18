import React from "react";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="abhero relative flex min-h-[90vh] min-w-full items-center justify-center">
      {/* Random positioned images surrounding the hero */}
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 1"
        className="absolute left-5 top-10 hidden h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 2"
        className="top-15 absolute left-20 hidden h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 3"
        className="absolute top-10 hidden h-[100px] w-[100px] object-contain md:block"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 4"
        className="absolute right-10 top-20 hidden h-[80px] w-[80px] object-contain md:block"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 5"
        className="absolute bottom-16 left-10 hidden h-[60px] w-[60px] object-contain md:block"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 6"
        className="absolute bottom-5 right-20 hidden h-[90px] w-[90px] object-contain md:block"
      />
      {/* Additional images */}
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 7"
        className="absolute right-5 top-5 block h-[110px] w-[110px] object-contain md:hidden"
      />
      <img
        src="https://res.cloudinary.com/dlofupmx3/image/upload/v1727962076/image_233_ryiwbb.png"
        alt="random image 8"
        className="right-30 absolute bottom-10 hidden h-[90px] w-[90px] object-contain md:block"
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
        
        <div className="relative flex w-full flex-col items-center justify-center space-y-9 px-3 md:px-5">
          <div className="relative h-[100%] w-full md:w-[80%]">
            <Image
              src={
                "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/business_hero.png"
              }
              width={1400}
              height={480}
              alt="image"
              quality={100}
              className="rounded-2xl"
            />
            <div className="absolute bottom-[-5rem] left-1/2 max-w-[85%] -translate-x-1/2 transform md:bottom-[-7rem] md:min-w-[60%]">
              <div className="relative flex items-center justify-center rounded-xl bg-[rgba(96,94,216,0.9)] p-0 px-4 md:p-7">
                <div className="flex w-[90%] items-center justify-center gap-[1rem] px-4 py-7 text-white md:gap-[4rem] lg:gap-[6rem] xl:h-[11rem]">
                  <div className="flex h-full flex-wrap text-center text-xs font-semibold leading-relaxed md:text-xl lg:text-3xl xl:text-3xl">
                    <div>Team Members</div>
                    <div className="w-full text-center">20+</div>
                  </div>

                  <div className="flex h-full flex-wrap text-center text-xs font-semibold leading-relaxed md:text-xl lg:text-3xl xl:text-3xl">
                    <div>Serving Cities</div>
                    <div className="w-full text-center">1</div>
                  </div>

                  <div className="flex h-full flex-wrap text-center text-xs font-semibold leading-relaxed md:text-xl lg:text-3xl xl:text-3xl">
                    <div>Event Categories</div>
                    <div className="w-full text-center">40+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
=======

      </div>
    </div>
  );
};

export default Hero;
