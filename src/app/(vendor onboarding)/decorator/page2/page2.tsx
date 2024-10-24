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
  propthemesOffered: boolean | null;
  adobtThemes: boolean | null;
  colorschmes: boolean | null;
  customizationsThemes: boolean | null;
  customDesignProcess: string;
}

interface Page2Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesOffered: string[];
  setThemesOffered: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page2: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  themesOffered,
  setCurrentPage,
  setThemesOffered,
  handleContinue,
}) => {
  const {
    propthemesOffered,
    adobtThemes,
    colorschmes,
    customizationsThemes,
    customDesignProcess,
  } = formState;

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex items-center justify-start gap-5">
            <div className="flex items-center justify-start gap-5">
              <ArrowLeft
                className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
                aria-hidden="true"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              />

              <h1 className="text-3xl font-semibold">
                Theme Offered<span className="text-red-600">*</span>
              </h1>
            </div>
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
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-6">
              <div className="flex min-w-[40%] flex-col gap-6 lg:max-w-[50%]">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you offer prop selection for themes ?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={propthemesOffered === true}
                    onChange={() =>
                      updateFormState({ propthemesOffered: true })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>

                  <input
                    type="radio"
                    checked={propthemesOffered === false}
                    onChange={() =>
                      updateFormState({ propthemesOffered: false })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-6 lg:max-w-[60%]">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you adapt themes to different venue sizes ?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={adobtThemes === true}
                    onChange={() => updateFormState({ adobtThemes: true })}
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>
                  <input
                    type="radio"
                    checked={adobtThemes === false}
                    onChange={() => updateFormState({ adobtThemes: false })}
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-6">
              <div className="flex flex-col gap-4 lg:max-w-[60%]">
                <div className="flex min-w-[40%] flex-col gap-6">
                  <label
                    className="text-base font-medium"
                    htmlFor="businessName"
                  >
                    Do you assist with creating color schemes ?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-4">
                    <input
                      type="radio"
                      checked={colorschmes === true}
                      onChange={() => updateFormState({ colorschmes: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <p>Yes</p>

                    <input
                      type="radio"
                      className="h-4 w-4 accent-[#2E3192]"
                      checked={colorschmes === false}
                      onChange={() => updateFormState({ colorschmes: false })}
                    />
                    <p>No</p>
                  </div>
                </div>
                <div className="flex min-w-[40%] flex-col gap-6">
                  <label
                    className="text-base font-medium"
                    htmlFor="businessName"
                  >
                    Do you offer customization of themes ?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-4">
                    <input
                      type="radio"
                      value="true"
                      checked={customizationsThemes === true}
                      onChange={() =>
                        updateFormState({ customizationsThemes: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <p>Yes</p>

                    <input
                      type="radio"
                      value="false"
                      checked={customizationsThemes === false}
                      onChange={() =>
                        updateFormState({ customizationsThemes: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <p>No</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-5">
                <label className="text-base font-medium" htmlFor="category">
                  Custom Design Process
                </label>
                <textarea
                  id="businessName"
                  rows={5}
                  className="w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Description of their custom design process"
                  value={customDesignProcess}
                  onChange={(e) =>
                    updateFormState({ customDesignProcess: e.target.value })
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

export default Page2;
