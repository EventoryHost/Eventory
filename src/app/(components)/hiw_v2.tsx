"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {};

const HowItWorks = (props: Props) => {
  const [activeStep, setActiveStep] = useState(1);
  const images = [
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/img1.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/img2.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/img3.png",
  ];

  return (
    <div className="flex w-[100%] flex-col items-center justify-center gap-9 bg-gradient-to-b from-[#BFBFEF] to-[#ffffff] px-3 py-9 md:px-9">
      <div className="flex w-[100%] max-w-[1440px] flex-col items-center justify-center gap-9 py-9">
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
              <p className="text-sm font-medium md:text-[2vw] lg:text-lg xl:text-xl">
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
              <p className="text-sm font-medium md:text-[2vw] lg:text-lg xl:text-xl">
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
              <p className="text-sm font-medium md:text-[2vw] lg:text-lg xl:text-xl">
                Book your chosen vendors easily and securely through our
                platform.
              </p>
            </div>
          </div>

          <div className="w-[100%] md:w-[37%]">
            <Image
              alt=""
              src={images[activeStep - 1]}
              objectFit="cover"
              width={400}
              height={400}
              quality={100}
              loading="eager"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
