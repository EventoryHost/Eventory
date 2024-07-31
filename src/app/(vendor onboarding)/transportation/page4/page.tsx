"use client";
import StepBar from "@/app/(components)/stepBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Upload } from "lucide-react";

const page = () => {
  const [value, setValue] = useState(50);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(Number(event.target.value));
  };
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/transportation/preview");
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={4} />
        </div>
        <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Fill out your Policy
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Please provide the details of the business offered by your company.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <span className="text-3xl font-semibold">Policy</span>

          <div className="flex gap-20">
            <div>
              <span className="text-lg">Terms and conditions</span>
              <p className="mb-3 text-xs text-gray-500">PNG, PDF, JPG</p>
              <button className="mb-5 flex max-w-52 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                {" "}
                <Upload />
                Upload
              </button>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-lg" htmlFor="category">
                  Or provide via
                </label>
                <textarea
                  id="url"
                  className="h-32 w-96 resize-none overflow-hidden rounded-xl border-2 bg-white p-5 pb-28 pt-6 outline-none scrollbar-hide"
                  placeholder="Enter your Venue Description"
                />
              </div>

              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }
              `}</style>
            </div>
            <div>
              <span className="text-lg">Cancellation Policy</span>
              <p className="mb-3 text-xs text-gray-500">PNG, PDF, JPG</p>
              <button className="mb-5 flex max-w-52 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                {" "}
                <Upload />
                Upload
              </button>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-lg" htmlFor="category">
                  Or provide via
                </label>
                <textarea
                  id="url"
                  className="h-32 w-96 resize-none overflow-hidden rounded-xl border-2 bg-white p-5 pb-28 pt-6 outline-none scrollbar-hide"
                  placeholder="Enter your Venue Description"
                />
              </div>

              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }
              `}</style>

              <div className="items-strech mt-9 flex flex-row gap-7 self-end">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Skip
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
