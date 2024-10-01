"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const HowItWorks = (props: Props) => {
  const [activeStep, setActiveStep] = useState(1);
  const images = [
    "https://res.cloudinary.com/dlofupmx3/image/upload/v1727812370/Frame_1430106705_z6bqlf.png",
    "https://res.cloudinary.com/dlofupmx3/image/upload/v1727813140/Frame_1430106705_1_rjxqen.png",
    "https://res.cloudinary.com/dlofupmx3/image/upload/v1727813140/Frame_1430106705_2_jznhnj.png",
  ];

  return (
    <div className="flex w-[100%] flex-col items-center justify-center gap-9 bg-gradient-to-b from-[#BFBFEF] to-[#ffffff] px-3 py-9 md:px-9">
      <div className="max-w-[1440px] flex items-center justify-center w-[100%] flex-col gap-9 py-9">
        <h1 className="text-3xl font-bold md:text-5xl">How it works</h1>
        <div className="mt-9 flex w-[100%] flex-col-reverse items-center justify-center gap-9 md:flex-row">
          <div className="flex w-[100%] flex-col items-start gap-3 md:w-[50%]">
            <div
              className={`flex min-h-[9rem] w-[100%] flex-col items-start justify-around gap-3 rounded-xl px-7 py-5 shadow-sm transition-all ${
                activeStep === 1 ? "bg-white" : "bg-[#F0EFFC]"
              }`}
              onClick={() => setActiveStep(1)}
              style={{ cursor: "pointer" }}
            >
              <p className="text-xl font-semibold text-black md:text-3xl">
                1. Explore
              </p>
              <p className="text-sm font-medium md:text-[2vw] xl:text-xl lg:text-lg">
                Discover the perfect vendors for your event from our diverse
                selection.
              </p>
            </div>
            <div
              className={`flex min-h-[9rem] w-[100%] flex-col items-start justify-around gap-3 rounded-xl px-7 py-5 shadow-sm transition-all ${
                activeStep === 2 ? "bg-white" : "bg-[#F0EFFC]"
              }`}
              onClick={() => setActiveStep(2)}
              style={{ cursor: "pointer" }}
            >
              <p className="text-xl font-semibold text-black md:text-3xl">
                2. Evaluate
              </p>
              <p className="text-sm font-medium md:text-[2vw] xl:text-xl lg:text-lg">
                Compare vendors based on reviews, services, availability, and
                pricing.
              </p>
            </div>
            <div
              className={`flex min-h-[9rem] w-[100%] flex-col items-start justify-around gap-3 rounded-xl px-7 py-5 shadow-sm transition-all ${
                activeStep === 3 ? "bg-white" : "bg-[#F0EFFC]"
              }`}
              onClick={() => setActiveStep(3)}
              style={{ cursor: "pointer" }}
            >
              <p className="text-xl font-semibold text-black md:text-3xl">
                3. Secure
              </p>
              <p className="text-sm font-medium md:text-[2vw] xl:text-xl lg:text-lg">
                Book your chosen vendors easily and securely through our
                platform.
              </p>
            </div>
          </div>

          <div className="w-[100%] md:w-[37%]">
            <Image
              alt=""
              src={images[activeStep - 1]}
              layout="responsive"
              objectFit="cover"
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
