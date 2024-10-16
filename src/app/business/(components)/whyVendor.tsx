import React from "react";
import Image from "next/image";

type Props = {};

const WhyVendor = (props: Props) => {
  return (
    <div className="mt-9 flex w-full flex-col bg-gradient-to-b from-[#BFBFEF] to-[#ffffff] px-4 py-9 md:px-10">
      <div className="items-start justify-start py-5 text-3xl font-semibold md:text-5xl">
        Why become vendor at <span className="text-[#2E3192]">Eventory</span>
      </div>
      <div className="mt-7 flex w-full flex-col items-center justify-between rounded-xl md:flex-row">
        <div className="flex min-h-[350px] w-full flex-col items-center justify-between rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-4 shadow-xl md:w-[30%]">
          <h1 className="text-lg font-semibold md:text-xl">
            Increased Visibility
          </h1>
          <Image
            width={80}
            height={80}
            src="https://d1u34m45xfa3ar.cloudfront.net/website/business-page/how_to/image 99.svg"
            alt="Increased Visibility"
          />
          <p className="mt-2 w-[80%] text-center text-sm md:text-lg">
            Expand your reach and attract more customers with our platform. We
            help boost your visibility, leading to a higher consumer rate and
            more business opportunities.
          </p>
        </div>
        <div className="mt-4 flex min-h-[350px] w-full flex-col items-center justify-between rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-4 shadow-xl md:mt-0 md:w-[30%]">
          <h1 className="text-xl font-semibold">More Bookings</h1>
          <Image
            width={80}
            height={80}
            src="https://d1u34m45xfa3ar.cloudfront.net/website/business-page/how_to/image 105.svg"
            alt="Streamlined Operations"
          />
          <p className="mt-2 w-[80%] text-center text-sm md:text-lg">
            Leverage our platform to showcase your services and increase your
            bookings. Our user-friend interface makes it easy for clients to
            find and book your services.
          </p>
        </div>
        <div className="mt-4 flex min-h-[350px] w-full flex-col items-center justify-between rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-4 shadow-xl md:mt-0 md:w-[30%]">
          <h1 className="text-center text-xl font-semibold">
            Streamlined Operations
          </h1>
          <Image
            width={80}
            height={80}
            src="https://d1u34m45xfa3ar.cloudfront.net/website/business-page/how_to/image 104.svg"
            alt="More Bookings"
          />

          <p className="mt-2 w-[80%] text-center text-sm md:text-lg">
            Simplify your business management with our advanced tools. From
            handling bookings to tracking payments, everything you need to
            manage your services efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyVendor;
