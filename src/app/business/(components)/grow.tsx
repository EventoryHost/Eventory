import React from "react";
import Image from "next/image";

type Props = {};

const Grow = (props: Props) => {
  return (
    <div className="flex min-h-[130vh] w-full items-start justify-center bg-[#D5D6E9] md:min-h-fit xl:p-9">
      <div className="mt-5 flex w-[90%] flex-col items-center justify-center gap-9 md:flex-row md:p-5">
        <div className="flex w-full flex-col items-center justify-around gap-11 md:w-[50%] md:items-start">
          <h1 className="text-center text-3xl font-bold leading-snug md:text-left md:text-5xl">
            We help to grow your business
          </h1>
          <p className="text-center text-sm md:text-left md:text-xl">
            Our platform revolutionizes event planning by effortlessly
            connecting you with a vast network of customers, ensuring a seamless
            and stress-free organizing experience. Whether it&apos;s a dream
            wedding, a high-profile corporate event, an unforgettable birthday
            party, or any celebration you envision, we guarantee unparalleled
            convenience and success in every detail.
          </p>
          <button className="w-fit rounded-xl bg-[#2E3192] p-5 font-light text-white">
            Get Started
          </button>
        </div>
        <div className="md:w-[50%]">
          <Image
            src={"https://d1u34m45xfa3ar.cloudfront.net/website/business-page/business_grow.png"}
            width={647}
            height={483}
            quality={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Grow;
