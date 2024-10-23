import React from "react";
import Image from "next/image";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <div className="min-w-screen my-9 flex flex-col">
      <div className="items-start justify-start self-center bg-white px-4 py-5 text-3xl font-semibold md:px-10 md:text-5xl">
        How to start at <span className="text-[#2E3192]">Eventory</span>
      </div>

      <div className="w-[100%]">
        {/* Container with border and shadow */}
        <div className="mx-9 mt-7 flex flex-col gap-6 rounded-xl border border-[#EAEAF4] bg-white px-4 py-7 shadow-xl shadow-[#bca9ef] md:px-10">
          <div className="flex min-h-[20rem] flex-wrap justify-center gap-6 pb-9">
            {/* Create Profile */}
            <div className="flex min-w-[48%] flex-col gap-3 px-4 md:w-[23%]">
              <div className="flex flex-col gap-4">
                <Image
                  src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/profile.svg"
                  alt="Create Profile"
                  width={60}
                  height={100}
                />
                <h1 className="text-lg font-semibold md:text-2xl">
                  1. Create Profile
                </h1>
              </div>
              <div className="md:text-md text-sm md:max-w-[70%]">
                Register on our platform and build a detailed profile to
                showcase your services. Highlight your strengths and attract
                potential clients with a compelling profile.
              </div>
            </div>

            {/* List Your Services */}
            <div className="flex min-w-[48%] flex-col gap-3 px-4 md:w-[23%]">
              <div className="flex flex-col gap-4">
                <Image
                  src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/eva_list-outline.svg"
                  alt="List Your Services"
                  width={60}
                  height={100}
                />
                <h1 className="text-lg font-semibold md:text-2xl">
                  2. List Your Services
                </h1>
              </div>
              <div className="md:text-md text-sm md:max-w-[70%]">
                Add your services with clear descriptions, pricing, and
                availability. Let clients know exactly what you offer and how
                you can meet their event needs.
              </div>
            </div>

            {/* Receive and Manage Bookings */}
            <div className="flex min-w-[48%] flex-col gap-3 px-4 md:w-[23%]">
              <div className="flex flex-col gap-4">
                <Image
                  src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/Box_1.svg"
                  alt="Manage Bookings"
                  width={50}
                  height={100}
                />
                <h1 className="text-lg font-semibold md:text-2xl">
                  3. Receive and Manage Bookings
                </h1>
              </div>
              <div className="md:text-md text-sm md:max-w-[70%]">
                Stay updated with new booking requests and effortlessly manage
                your schedule through our intuitive dashboard. Keep track of all
                your appointments in one place.
              </div>
            </div>

            {/* Secure Payments */}
            <div className="flex min-w-[48%] flex-col gap-3 px-4 md:w-[23%]">
              <div className="flex flex-col gap-4">
                <Image
                  src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/business/Lock_check.svg"
                  alt="Secure Payments"
                  width={50}
                  height={100}
                />
                <h1 className="text-lg font-semibold md:text-2xl">
                  4. Secure Payments
                </h1>
              </div>
              <div className="md:text-md text-sm md:max-w-[70%]">
                Receive payments securely through our platform. Enjoy peace of
                mind with detailed invoices and a comprehensive transaction
                history for all your bookings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
