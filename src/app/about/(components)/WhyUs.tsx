"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {};

const WhyUs = (props: Props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="mt-9 flex flex-col items-center justify-center">
      <div className="mt-9 flex w-[90%] flex-col items-center justify-center">
        <h2 className="self-start text-left text-2xl font-semibold max-sm:mb-10 md:mb-10 md:text-4xl lg:mb-14">
          Why choose us?
        </h2>
        <div className="flex w-[100%] flex-col items-stretch justify-between gap-5 md:flex-row">
          <div
            ref={ref1}
            className="flex min-h-[20rem] flex-1 flex-col items-center justify-between rounded-xl bg-[#7E7DDF] p-3 py-5"
            style={{
              transform: isInView1 ? "none" : "translateY(200px)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <p className="text-2xl font-medium text-white">
              Innovation & Excellence
            </p>
            <Image
              src={
                "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/about/why_us_1.png"
              }
              width={300}
              height={300}
              quality={100}
              alt=""
            />
          </div>
          <div
            ref={ref2}
            className="flex min-h-[20rem] flex-1 flex-col items-center justify-between rounded-xl bg-[#7E7DDF] p-3 py-5"
            style={{
              transform: isInView2 ? "none" : "translateY(200px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            <p className="text-2xl font-medium text-white">Customer Focus</p>
            <Image
              src={
                "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/about/why_us_2.png"
              }
              width={300}
              height={300}
              quality={100}
              alt=""
            />
          </div>
          <div
            ref={ref3}
            className="flex min-h-[20rem] flex-1 flex-col items-center justify-between rounded-xl bg-[#7E7DDF] p-3 py-5"
            style={{
              transform: isInView3 ? "none" : "translateY(200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
          >
            <p className="text-2xl font-medium text-white">
              Integrity & Collaboration
            </p>
            <Image
              src={
                "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/about/why_us_3.png"
              }
              width={300}
              height={300}
              quality={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
