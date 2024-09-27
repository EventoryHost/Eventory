"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import { ArrowLeft } from "lucide-react";
import Dropdown from "../../(components)/Dropdown";

const _themesOffered = [
  "Art Deco",
  "Bohemian",
  "Classic Elegance",
  "Cultural Heritage",
  "Fairy Tale",
  "Grand Decor",
  "Modern Minimalist",
  "Others",
  "Quirky Style",
  "Romantic",
  "Traditional",
  "Vintage",
];

interface FormState {
  propthemesOffered: boolean;
  adobtThemes: boolean;
  colorschmes: boolean;
  customizationsThemes: boolean;
  customDesignProcess: string;
}

interface Page2Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesOffered: string[];
  setThemesOffered: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page2: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  themesOffered,
  setThemesOffered,
  handleContinue,
  setCurrentPage,
  currentPage,
}) => {
  const {
    propthemesOffered,
    adobtThemes,
    colorschmes,
    customizationsThemes,
    customDesignProcess,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3 md:p-6">
        <div className="flex items-center gap-4">
          <ArrowLeft
            className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
            aria-hidden="true"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <h1 className="text-2xl font-semibold">
            Theme Offered<span className="text-red-500">*</span>
          </h1>
        </div>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"_themesOffered"}
              appetizers={_themesOffered}
              selectedAppetizers={themesOffered}
              setSelectedAppetizers={setThemesOffered}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 md:p-6">
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-start justify-between md:flex-row">
            <div className="flex min-w-[50%] flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">
                  Do you offer prop selection for themes ?{" "}
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="true"
                      checked={propthemesOffered}
                      onChange={() =>
                        updateFormState({ propthemesOffered: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="false"
                      checked={!propthemesOffered}
                      onChange={() =>
                        updateFormState({ propthemesOffered: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">
                  Do you assist with creating color schemes ?
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="true"
                      checked={colorschmes}
                      onChange={() => updateFormState({ colorschmes: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="false"
                      checked={!colorschmes}
                      onChange={() => updateFormState({ colorschmes: false })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">
                  Do you offer customization of themes ?
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="true"
                      checked={customizationsThemes}
                      onChange={() =>
                        updateFormState({ customizationsThemes: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="false"
                      checked={!customizationsThemes}
                      onChange={() =>
                        updateFormState({ customizationsThemes: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-[50%] flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">
                  Do you adapt themes to different venue sizes ?
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="true"
                      checked={adobtThemes}
                      onChange={() => updateFormState({ adobtThemes: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value="false"
                      checked={!adobtThemes}
                      onChange={() => updateFormState({ adobtThemes: false })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Custom Design Process
                </label>
                <textarea
                  cols={30}
                  rows={3}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Description of their custom design process"
                  value={customDesignProcess}
                  onChange={(e) =>
                    updateFormState({ customDesignProcess: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="items-strech flex flex-row gap-7 self-end">
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

export default Page2;
