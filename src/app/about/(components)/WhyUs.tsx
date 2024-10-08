import Image from "next/image";
import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <div className="flex w-[90%] flex-col items-center justify-center mt-9">
        <h2 className="self-start text-left text-2xl font-semibold max-sm:mb-10 md:mb-10 md:text-4xl lg:mb-14">
          Why choose us?
        </h2>
        <div className="flex md:flex-row flex-col justify-between gap-5 w-[100%] items-stretch">
          <div className="min-h-[20rem] p-3 py-5 flex-1 flex flex-col items-center justify-between rounded-xl bg-[#7E7DDF]">
            <p className="font-medium text-white text-2xl">Innovation & Excellence</p>
            <Image src={"https://res.cloudinary.com/dlofupmx3/image/upload/v1727963960/undraw_Innovative_re_rr5i-removebg-preview_1_tgrejg.png"} width={300} height={300} quality={100} alt="" />
          </div>
          <div className="min-h-[20rem] p-3 py-5 flex-1 flex flex-col items-center justify-between rounded-xl bg-[#7E7DDF]">
            <p className="font-medium text-white text-2xl">Customer Focus</p>
            <Image src={"https://res.cloudinary.com/dlofupmx3/image/upload/v1727963960/Group_1000000802_ywh9sm.png"} width={300} height={300} quality={100} alt="" />
          </div>
          <div className="min-h-[20rem] p-3 py-5 flex-1 flex flex-col items-center justify-between rounded-xl bg-[#7E7DDF]">
            <p className="font-medium text-white text-2xl">Integrity & Collaboration</p>
            <Image src={"https://res.cloudinary.com/dlofupmx3/image/upload/v1727963960/undraw_Collaborators_re_hont-removebg-preview_2_stna4j.png"} width={300} height={300} quality={100} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
