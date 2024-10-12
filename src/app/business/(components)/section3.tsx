import React from "react";
import Image from "next/image";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <div className="min-w-screen mt-9 flex flex-col">
      <div className="items-start justify-start bg-white px-4 py-5 text-3xl font-semibold md:px-10 md:text-5xl">
        How to start at<span className="text-[#2E3192]"> Eventory</span>
      </div>
      <div className="mt-7 flex min-h-[20rem] flex-col items-center justify-start bg-[#EAEAF4] pb-9">
        <div className="flex min-h-[5rem] w-full flex-col bg-white px-4 shadow-xl md:flex-row md:px-10">
          <div className="flex min-w-[48%] flex-col gap-3 rounded-t-xl rounded-tl-xl rounded-tr-xl border-1 border-b-0 border-[#EAEAF4] bg-white px-4 py-7 md:rounded-tr-none md:border-r-0">
            <div className="flex flex-col gap-4">
              <Image
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/profile.svg"
                alt=""
                width={60}
                height={100}
              />
              <h1 className="text-lg font-semibold md:text-2xl">
                1. Create Profile
              </h1>
            </div>
            <div className="md:text-md max-w-[70%] text-sm">
              Register on our platform and build a detailed profile to showcase
              your services. Highlight your strengths and attract potential
              clients with a compelling profile.
            </div>
          </div>
          <div className="rounded-t-0 flex min-w-[48%] flex-col items-start justify-start gap-3 border-1 border-b-0 border-l-1 border-t-0 border-[#EAEAF4] bg-white px-4 py-7 md:rounded-tr-xl md:border-l-0 md:border-t-1">
            <div className="flex flex-col gap-4">
              <Image
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/eva_list-outline.svg"
                alt=""
                width={60}
                height={100}
              />
              <h1 className="text-lg font-semibold md:text-2xl">
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

        <div className="flex min-h-[5rem] w-full flex-col bg-[#EAEAF4] px-4 pb-9 md:flex-row md:px-10">
          <div className="shadow-b-xl flex min-w-[48%] flex-col gap-3 border-1 border-b-0 border-r-0 border-t-0 border-[#EAEAF4] bg-white px-4 py-7 md:rounded-bl-xl md:border-b-1">
            <div className="flex flex-col gap-4">
              <Image
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/Box+1.svg"
                alt=""
                width={50}
                height={100}
              />
              <h1 className="text-lg font-semibold md:text-2xl">
                3. Receive and Manage Bookings
              </h1>
            </div>
            <div className="max-w-[70%] text-sm">
              Stay updated with new booking requests and effortlessly manage
              your schedule through our intuitive dashboard. Keep track of all
              your appointments in one place.
            </div>
          </div>
          <div className="flex min-w-[48%] flex-col gap-3 rounded-bl-xl rounded-br-xl border-1 border-l-0 border-t-0 border-[#EAEAF4] bg-white px-4 py-7 md:rounded-bl-none md:pl-6">
            <div className="flex flex-col gap-4">
              <Image
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/Lock+check.svg"
                alt=""
                width={50}
                height={100}
              />
              <h1 className="text-lg font-semibold md:text-2xl">
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
        <div className="mt-9 flex w-full flex-col px-4 md:px-10">
          <div className="items-start justify-start py-5 text-3xl font-semibold md:text-5xl">
            Why become vendor at
            <span className="text-[#2E3192]"> Eventory</span>
          </div>
          <div className="mt-7 flex w-full flex-col items-center justify-between rounded-xl md:flex-row">
            <div className="flex min-h-[300px] w-full flex-col items-center justify-between rounded-xl bg-white px-4 py-4 shadow-xl md:w-[30%]">
              <h1 className="text-lg font-semibold md:text-xl">
                Increased Visibility
              </h1>
              <Image
                width={80}
                height={80}
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/image+99.svg"
                alt="Increased Visibility"
              />
              <p className="md:text-md mt-2 w-[80%] text-center text-sm">
                Expand your reach and attract more customers with our platform.
                We help boost your visibility, leading to a higher consumer rate
                and more business opportunities.
              </p>
            </div>
            <div className="mt-4 flex min-h-[300px] w-full flex-col items-center justify-between rounded-xl bg-white px-4 py-4 shadow-xl md:mt-0 md:w-[30%]">
              <h1 className="text-xl font-semibold">More Bookings</h1>
              <Image
                width={80}
                height={80}
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/image+104.svg"
                alt="More Bookings"
              />
              <p className="md:text-md mt-2 w-[80%] text-center text-sm">
                Leverage our platform to showcase your services and increase
                your bookings. Our user-friendly interface makes it easy for
                clients to find and book your services.
              </p>
            </div>
            <div className="mt-4 flex min-h-[300px] w-full flex-col items-center justify-between rounded-xl bg-white px-4 py-4 shadow-xl md:mt-0 md:w-[30%]">
              <h1 className="text-center text-xl font-semibold">
                Streamlined Operations
              </h1>
              <Image
                width={80}
                height={80}
                src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/business-page/how_to/image+105.svg"
                alt="Streamlined Operations"
              />
              <p className="md:text-md mt-2 w-[80%] text-center text-sm">
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
