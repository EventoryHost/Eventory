import React from "react";
import Image from "next/image";

type Props = {};

const Grow = (props: Props) => {
  return (
    <div className="w-full md:min-h-fit min-h-[130vh] bg-[#D5D6E9] flex items-start justify-center xl:p-9">
      <div className="w-[90%] flex md:flex-row flex-col md:p-5 gap-9 items-center mt-5 justify-center">
        <div className="flex flex-col gap-11 md:items-start items-center md:w-[50%] w-full justify-around">
          <h1 className="md:text-5xl text-3xl font-bold md:text-left text-center leading-snug">We help to grow your business</h1>
          <p className="md:text-xl text-sm md:text-left text-center">
            Our platform revolutionizes event planning by effortlessly
            connecting you with a vast network of customers, ensuring a seamless
            and stress-free organizing experience. Whether it&apos;s a dream wedding,
            a high-profile corporate event, an unforgettable birthday party, or
            any celebration you envision, we guarantee unparalleled convenience
            and success in every detail.
          </p>
          <button className="bg-[#2E3192] text-white p-5 w-fit font-light rounded-xl">
            Get Started
          </button>
        </div>
        <div className="md:w-[50%]">
          <Image
            src={"/image 98.png"}
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
