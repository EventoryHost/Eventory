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
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Policy
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
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
      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 sm:w-[90%] md:w-[70%] md:p-4 lg:p-6">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 sm:w-[100%] md:w-[80%] md:p-6">
          <span className="text-2xl font-semibold sm:text-3xl">Policy</span>
          <div className="flex flex-col gap-6 md:flex-row md:gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-lg">Terms and conditions</span>
              <p className="mb-3 text-xs text-gray-500">PNG, PDF, JPG</p>
              <button className="mb-5 flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload />
                Upload
              </button>
              <div className="flex flex-col gap-4">
                <label className="text-lg" htmlFor="terms">
                  Or provide via
                </label>
                <textarea
                  id="terms"
                  className="h-32 w-full resize-none rounded-xl border-2 bg-white p-5 outline-none"
                  placeholder="Enter your terms description"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-lg">Cancellation Policy</span>
              <p className="mb-3 text-xs text-gray-500">PNG, PDF, JPG</p>
              <button className="mb-5 flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload />
                Upload
              </button>
              <div className="flex flex-col gap-4">
                <label className="text-lg" htmlFor="cancellation">
                  Or provide via
                </label>
                <textarea
                  id="cancellation"
                  className="h-32 w-full resize-none rounded-xl border-2 bg-white p-5 outline-none"
                  placeholder="Enter your cancellation description"
                />
              </div>
            </div>
          </div>

          <div className="mt-9 flex w-full flex-row justify-end gap-4">
            <button
              className="w-auto rounded-xl border-2 border-[#2E3192] px-6 py-3 text-[#2E3192]"
              onClick={handleSubmit}
            >
              Skip
            </button>
            <button
              className="w-auto rounded-xl bg-[#2E3192] px-6 py-3 text-white"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
