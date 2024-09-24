"use client";

import React, { useEffect, useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@mui/material";
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
  themePhoto: string | File | File[]
  themeVideo: string | File | File[]
}

interface Page3Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  themesElements,
  setThemesElements,
  handleContinue,
  currentPage,
  setCurrentPage
}) => {
  const { themePhoto, themeVideo } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };



  return (
    <div className="scroll-touch items-strech flex  w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9]  scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3  md:p-6">
        <div className="flex gap-4 items-center">
          <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={() => setCurrentPage(currentPage - 1)} />
          <h1 className="text-2xl font-semibold">Theme Elements<span className="text-red-500 ">*</span></h1>
        </div>
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
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="item-center flex min-w-full flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex min-w-[45%] flex-col gap-2">

              <div className="text-base font-medium flex items-center gap-1">Theme Photos* <span className="text-red-500 ">*</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.33398" y="1.3335" width="13.3333" height="13.3333" rx="6.66667" stroke="#2B3F6C" />
                  <path d="M8.33398 11.3335L8.33398 7.3335" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.00065 7.3335L8.33398 7.3335" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33398 5.33366L8.33398 4.66699" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <span className="text-small font-light">PNG,JPG,PDF</span>

              <FileInput
                label="themePhoto"
                multiple={true}


                onFileSelect={(file) => {
                  updateFormState({ themePhoto: file });
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
              <span className="text-base font-medium">or Continue via</span>
              <input
                type="text"
                className="w-full rounded-xl border-2 bg-white p-3 py-5 outline-none text-sm"
                placeholder="Enter your portfolio links"
                value={typeof formState.themePhoto === 'string' ? formState.themePhoto : ''}
                onChange={(e) =>
                  updateFormState({ themePhoto: e.target.value })
                }
                required
              />

            </div>
            <div className="flex min-w-[45%] flex-col gap-2">

              <div className="text-base font-medium flex items-center gap-1">Theme Videos <span className="text-red-500 ">*</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.33398" y="1.3335" width="13.3333" height="13.3333" rx="6.66667" stroke="#2B3F6C" />
                  <path d="M8.33398 11.3335L8.33398 7.3335" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.00065 7.3335L8.33398 7.3335" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33398 5.33366L8.33398 4.66699" stroke="#2B3F6C" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <span className="text-small font-light">MP4, MKV</span>

              <FileInput
                label="themeVideo"
                multiple={true}
                onFileSelect={(file) => {
                  updateFormState({ themeVideo: file });
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
              <span className="text-base font-medium">or Continue via</span>
              <input
                type="text"
                className="w-full rounded-xl border-2 bg-white p-3 py-5 outline-none text-sm"
                placeholder="Enter your portfolio links"
                value={typeof formState.themeVideo === 'string' ? formState.themeVideo : ''}
                onChange={(e) =>
                  updateFormState({ themeVideo: e.target.value })
                }
                required
              />

            </div>

          </div>

          <div className="items-strech  flex flex-row gap-7 self-end">

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
  );
};

export default Page3;
