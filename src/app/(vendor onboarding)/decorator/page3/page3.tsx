"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import FileInput from "@/components/fileInput";

const _themesElement = [
  "Backdrop",
  "StageDecor",
  "Table Setting",
  "Prop Selection",
  "Lighting Effects",
  "Others",
];

interface FormState {
  backDropoptions: string;
  decorationoptions: string;
  prop_accessory: string;
  themephotos: string | File;
  themevideos: string | File;
}

interface Page3Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  setCurrentPage,
  themesElements,
  setThemesElements,
  handleContinue,
}) => {
  const { themephotos, themevideos } = formState;


  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex justify-start items-start"><h1 className="text-3xl font-semibold">Theme Elements</h1><span className="text-red-600">*</span></div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_themesElement"}
                appetizers={_themesElement}
                selectedAppetizers={themesElements}
                setSelectedAppetizers={setThemesElements}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-2">
                <label className="flex justify-start gap-2 items-center" htmlFor="category"><p>Theme Photos<span className="text-red-600">*</span></p>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.33398" y="1.33398" width="13.3333" height="13.3333" rx="6.66667" stroke="#2B3F6C" />
                    <path d="M8.33398 11.334L8.33398 7.33398" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.00065 7.33398L8.33398 7.33398" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33398 5.33464L8.33398 4.66797" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label=""
                  onFileSelect={(file: File) => {
                    updateFormState({ themephotos: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-2">
                <label className="flex gap-2 justify-start items-center" htmlFor="category"><p>Theme Videos<span className="text-red-600">*</span></p>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.33398" y="1.33398" width="13.3333" height="13.3333" rx="6.66667" stroke="#2B3F6C" />
                    <path d="M8.33398 11.334L8.33398 7.33398" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.00065 7.33398L8.33398 7.33398" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33398 5.33464L8.33398 4.66797" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </label>
                <p className="text-gray-500">MP4 MKV</p>
                <FileInput
                  label=""
                  onFileSelect={(file: File) => {
                    updateFormState({ themevideos: file });
                  }}
                  acceptedFileTypes="video/mp4, video/x-msvideo, .mp4, .avi"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or Continue Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ themephotos: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or Continue Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ themevideos: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-9 flex bg-white flex-row items-stretch gap-7 self-end">
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

export default Page3;
