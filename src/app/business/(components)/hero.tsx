import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-w-full">
      <div className="flex min-h-fit mb-[10rem] flex-col md:px-5 px-3 mt-5 justify-center items-center max-w-[100rem]">
        <div className="md:p-9 flex items-center justify-center flex-col md:px-5 space-y-9">
          <div className="xl:w-[50%] lg:w-[80%]">
            <h1 className="md:text-5xl text-3xl font-bold leading-snug text-center">
              Build Your Business with Instant Connectivity
            </h1>
          </div>
          <div className="md:w-[50%] md:text-lg text-sm">
            <p className="text-center">
              Unlock your business&apos;s full potential by partnering with us!
              Join our platform to amplify your reach and connect with a vast,
              diverse customer base, fueling your growth and driving your
              success to new heights.
            </p>
          </div>
          <div className="flex flex-col w-fit items-center justify-center space-y-2">
            <button className="bg-[#2E3192] text-white p-5 w-fit font-light rounded-xl">
              Get Started
            </button>
            <Link href={"/"} className="text-[#2E3192] underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center flex-col md:px-5 px-3 space-y-9">
          <div className="md:w-[80%] h-[100%] w-full relative">
            <Image
              src={"/hehe.png"}
              width={1400}
              height={480}
              alt="image"
              quality={100}
              className="rounded-2xl"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 md:bottom-[-7rem] bottom-[-5rem] md:min-w-[60%] max-w-[85%]">
              <div className="relative flex items-center justify-center md:p-7 p-0 px-4 rounded-xl bg-[rgba(96,94,216,0.9)]">
                <div className="flex text-white justify-center xl:h-[11rem] items-center py-7 md:gap-[4rem] lg:gap-[6rem] gap-[1rem] w-[90%] px-4">
                  <div className="xl:text-3xl lg:text-3xl md:text-xl text-xs leading-relaxed h-full text-center flex flex-wrap font-semibold">
                    Team Members 12+
                  </div>
                  <div className="xl:text-3xl lg:text-3xl md:text-xl text-xs leading-relaxed h-full text-center flex flex-wrap font-semibold">
                    Serving Cities 2+
                  </div>
                  <div className="xl:text-3xl lg:text-3xl md:text-xl text-xs leading-relaxed h-full text-center flex flex-wrap font-semibold">
                    Event Categories 40+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
