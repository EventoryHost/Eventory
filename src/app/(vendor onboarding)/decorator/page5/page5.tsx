"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import FileInput from "@/components/fileInput";
import { ArrowLeft } from "lucide-react";

const _themesElement = [
  "Backdrop",
  "StageDecor",
  "Table Setting",
  "Prop Selection",
  "Lighting Effects",
  "Others",
];

interface FormState {
  cancellationPolicy: string | File | File[];
  termsAndConditions: string | File | File[];
}

interface Page3Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page5: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  setCurrentPage,
  themesElements,
  setThemesElements,
  handleContinue,
}) => {
  const { cancellationPolicy, termsAndConditions } = formState;

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex items-center justify-start gap-5">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            />
            <h1 className="text-3xl font-semibold">Policies</h1>
          </div>

          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-2">
                <label
                  className="flex items-center justify-start gap-2 text-base font-medium"
                  htmlFor="category"
                >
                  <p>Terms and Conditions</p>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="termsAndConditions"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ termsAndConditions: newFiles });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-2">
                <label
                  className="flex items-center justify-start gap-2 text-base font-medium"
                  htmlFor="category"
                >
                  <p>Cancellation Policy</p>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="cancellationPolicy"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ cancellationPolicy: newFiles });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Provide Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ termsAndConditions: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              >
                Back
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
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

export default Page5;
