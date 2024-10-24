"use client";
import StepBar from "@/app/(components)/stepBar";
import React, { useState } from "react";
import { Upload } from "lucide-react";

interface FormState {
  termsProvideVia: string;
  policyProvideVia: string;
}

type HandleChange = (field: keyof FormState, value: any) => void;

type Page3Props = {
  formState: FormState;
  handleChange: HandleChange;
  navigateToPage: (pageIndex: number) => void;
};

const Page4 = ({ formState, handleChange }: Page3Props) => {
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
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/vendor_onboarding/tajmahal.png"
            }
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
                  onChange={(e) =>
                    handleChange("termsProvideVia", e.target.value)
                  }
                  placeholder="Enter your terms"
                  value={formState.termsProvideVia}
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
                  onChange={(e) =>
                    handleChange("policyProvideVia", e.target.value)
                  }
                  placeholder="Enter your policy"
                  value={formState.policyProvideVia}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
