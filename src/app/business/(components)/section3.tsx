import React from "react";
import Image from "next/image";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <div className="flex flex-col mt-9 min-w-screen">
      <div className="md:text-5xl text-3xl md:px-10 px-4 font-semibold justify-start items-start py-5 bg-white">
        How to start at<span className="text-[#2E3192]"> Eventory</span>
      </div>
      <div className="flex mt-7 pb-9 flex-col min-h-[20rem] justify-start items-center bg-[#EAEAF4]">
        <div className="min-h-[5rem] flex md:flex-row flex-col w-full bg-white md:px-10 px-4 shadow-xl">
          <div className="bg-white gap-3 border-1 md:border-r-0 border-b-0 border-[#EAEAF4] flex px-4 py-7 flex-col min-w-[48%] rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-t-xl">
            <div className="flex flex-col gap-4">
              <Image src="/profile.svg" alt="" width={60} height={100} />
              <h1 className="font-semibold md:text-2xl text-lg">
                1. Create Profile
              </h1>
            </div>
            <div className="max-w-[70%] md:text-md text-sm">
              Register on our platform and build a detailed profile to showcase
              your services. Highlight your strengths and attract potential
              clients with a compelling profile.
            </div>
          </div>
          <div className="bg-white gap-3 justify-start items-start border-1 md:border-l-0 border-l-1 border-b-0 md:border-t-1 border-t-0 border-[#EAEAF4] flex px-4 py-7 flex-col min-w-[48%] md:rounded-tr-xl rounded-t-0">
            <div className="flex flex-col gap-4">
              <Image
                src="/eva_list-outline.svg"
                alt=""
                width={60}
                height={100}
              />
              <h1 className="font-semibold md:text-2xl text-lg">
                2. List Your Services
              </h1>
            </div>
            <div className="max-w-[70%] text-sm">
              Add your services with clear descriptions, pricing, and
              availability. Let clients know exactly what you offer and how you
              can meet their event needs.
            </div>
          </div>
        </div>

        <div className="min-h-[5rem] flex md:flex-row flex-col md:px-10 px-4 w-full bg-[#EAEAF4] pb-9">
          <div className="bg-white gap-3 border-1 md:border-b-1 border-b-0 border-r-0 border-t-0 shadow-b-xl border-[#EAEAF4] flex px-4 py-7 flex-col min-w-[48%] md:rounded-bl-xl">
            <div className="flex flex-col gap-4">
              <Image src="/Box 1.svg" alt="" width={50} height={100} />
              <h1 className="font-semibold md:text-2xl text-lg">
                3. Receive and Manage Bookings
              </h1>
            </div>
            <div className="max-w-[70%] text-sm">
              Stay updated with new booking requests and effortlessly manage
              your schedule through our intuitive dashboard. Keep track of all
              your appointments in one place.
            </div>
          </div>
          <div className="bg-white gap-3 md:pl-6 border-1 border-l-0 md:rounded-bl-none rounded-bl-xl border-t-0 border-[#EAEAF4] flex px-4 py-7 flex-col min-w-[48%] rounded-br-xl">
            <div className="flex flex-col gap-4">
              <Image src="/Lock check.svg" alt="" width={50} height={100} />
              <h1 className="font-semibold md:text-2xl text-lg">
                4. Secure Payments
              </h1>
            </div>
            <div className="max-w-[70%] text-sm">
              Receive payments securely through our platform. Enjoy peace of
              mind with detailed invoices and a comprehensive transaction
              history for all your bookings.
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:px-10 px-4 mt-9">
          <div className="md:text-5xl text-3xl font-semibold justify-start items-start py-5">
            Why become vendor at
            <span className="text-[#2E3192]"> Eventory</span>
          </div>
          <div className="flex justify-between mt-7 items-center flex-col md:flex-row w-full rounded-xl">
            <div className="flex shadow-xl flex-col items-center justify-between w-full md:w-[30%] min-h-[300px] bg-white rounded-xl px-4 py-4">
              <h1 className="md:text-xl text-lg font-semibold">
                Increased Visibility
              </h1>
              <Image
                width={80}
                height={80}
                src="/image 99.svg"
                alt="Increased Visibility"
              />
              <p className="md:text-md text-sm w-[80%] text-center mt-2">
                Expand your reach and attract more customers with our platform.
                We help boost your visibility, leading to a higher consumer rate
                and more business opportunities.
              </p>
            </div>
            <div className="flex flex-col shadow-xl items-center justify-between w-full md:w-[30%] min-h-[300px] bg-white rounded-xl px-4 py-4 mt-4 md:mt-0">
              <h1 className="text-xl font-semibold">More Bookings</h1>
              <Image
                width={80}
                height={80}
                src="/image 104.svg"
                alt="More Bookings"
              />
              <p className="md:text-md text-sm w-[80%] text-center mt-2">
                Leverage our platform to showcase your services and increase
                your bookings. Our user-friendly interface makes it easy for
                clients to find and book your services.
              </p>
            </div>
            <div className="flex flex-col shadow-xl items-center justify-between w-full md:w-[30%] min-h-[300px] bg-white rounded-xl px-4 py-4 mt-4 md:mt-0">
              <h1 className="text-xl text-center font-semibold">
                Streamlined Operations
              </h1>
              <Image
                width={80}
                height={80}
                src="/image 105.svg"
                alt="Streamlined Operations"
              />
              <p className="md:text-md text-sm w-[80%] text-center mt-2">
                Simplify your business management with our advanced tools. From
                handling bookings to tracking payments,everything you need to
                manage your services efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
