"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import FileInput from "@/components/fileInput";

interface FormState {
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
}

interface Page2Props {
  handleContinue: () => void;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Page: React.FC<Page2Props> = ({ formState, updateFormState, handleContinue , currentPage, setCurrentPage }) => {
  const { termsAndConditions, cancellationPolicy } = formState;

  function handleTermsAndConditions(file: File): void {
    updateFormState({ termsAndConditions: file });
  }
  function handleCancellationPolicy(file: File): void {
    updateFormState({ cancellationPolicy: file });
  }

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">

      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
          <h1 className="text-3xl font-semibold">Pricing and Policies</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                {/* <label htmlFor="category">Venue Type</label> */}
                <div className="flex min-w-full flex-col items-start justify-between gap-2">
                  <p className="text-xl font-semibold">Terms and Conditions</p>
                  <p className="text-gray-500">PNG, PDF, JPG</p>
                  <FileInput
                    label="Terms and Conditions"
                    onFileSelect={handleTermsAndConditions}
                    acceptedFileTypes=".pdf,.doc,.docx" // Specify accepted file types
                  />
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                {/* <label htmlFor="category">Seating Capacity</label> */}
                <div className="flex min-w-full flex-col items-start justify-between gap-2">
                  <p className="text-xl font-semibold">Cancellation Policy</p>
                  <p className="text-gray-500">PNG, PDF, JPG</p>

                  <FileInput
                    label="Cancellation Policy"
                    onFileSelect={handleCancellationPolicy}
                    acceptedFileTypes=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8vw] text-sm outline-none"
                  placeholder="Enter Your Terms And Conditions"
                  value={
                    typeof termsAndConditions === "string"
                      ? termsAndConditions
                      : termsAndConditions.name
                  }
                  onChange={(e) =>
                    updateFormState({ termsAndConditions: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8vw] text-sm outline-none"
                  placeholder="Enter Your Cancellation Policy"
                  value={
                    typeof cancellationPolicy === "string"
                      ? cancellationPolicy
                      : cancellationPolicy.name
                  }
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={()=>setCurrentPage(currentPage + 1)}
              >
                Continue
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
