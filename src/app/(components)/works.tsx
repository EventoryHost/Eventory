import React from "react";
import Image from "next/image";

type Props = {};

const Works = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#C1C9F7] p-4 pt-[3rem]">
      <div className="mr-9 pb-12 pl-12 md:mr-0 lg:self-start">
        <h1 className="text-3xl font-bold md:text-5xl">How it works</h1>
      </div>

      <div className="flex w-full flex-col justify-between gap-9 px-4 pb-12 pt-3 lg:w-[85%] lg:flex-row lg:gap-3 lg:px-0">
        <div className="flex min-h-[50%] w-full flex-col items-center justify-center lg:w-1/3">
          <p className="self-start text-xl font-semibold md:text-3xl">
            1. Explore
          </p>
          <div className="mt-2 flex flex-1 items-center justify-center md:mt-0">
            <Image
              width={200}
              height={200}
              src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/works_01.svg"
              alt="Explore"
            />
          </div>
          <div className="mt-5 text-center text-sm font-semibold md:text-lg">
            Discover the perfect vendors for your event from our diverse
            selection.
          </div>
        </div>
        <div className="flex min-h-[50%] w-full flex-col items-center justify-center lg:w-1/3">
          <p className="self-start text-xl font-semibold md:text-3xl">
            2. Evaluate
          </p>
          <div className="flex flex-1 items-center justify-center">
            <Image
              width={350}
              height={350}
              src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/works_02.svg"
              alt="Evaluate"
            />
          </div>
          <div className="mt-7 text-center text-sm font-semibold md:mt-4 md:text-lg">
            Compare vendors based on reviews, services, availability, and
            pricing.
          </div>
        </div>
        <div className="flex min-h-[50%] w-full flex-col items-center justify-center lg:w-1/3">
          <p className="self-start text-xl font-semibold md:text-3xl">
            3. Secure
          </p>
          <div className="flex flex-1 items-center justify-center">
            <Image
              width={300}
              height={300}
              src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/works_images/works_03.svg"
              alt="Secure"
            />
          </div>
          <div className="mt-7 text-center text-sm font-semibold md:mt-4 md:text-lg">
            Book your chosen vendors easily and securely through our platform.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
