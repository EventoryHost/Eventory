"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";

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
  handleContinue
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
    <div className="flex scrollbar-hide  h-full flex-col items-start justify-start gap-5 overflow-y-scroll xs:w-[95%] xs:min-w-[90%]">
      
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Theme Offered</h1>
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
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[50%] flex-col gap-4 lg:max-w-[60%]">
                <label htmlFor="businessName">
                  Do you offer prop selection for themes ?
                </label>
                <div className="flex flex-row items-center justify-start gap-2">
                  <p>Yes</p>
                  <input
                    type="radio"
                    checked={propthemesOffered === true}
                    onChange={() =>
                      updateFormState({ propthemesOffered: true })
                    }
                  />
                  <p>No</p>
                  <input
                    type="radio"
                    checked={propthemesOffered === false}
                    onChange={() =>
                      updateFormState({ propthemesOffered: false })
                    }
                  />
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-4 lg:max-w-[60%]">
                <label htmlFor="businessName">
                  Do you adapt themes to different venue sizes ?
                </label>
                <div className="flex flex-row items-center justify-start gap-2">
                  <p>Yes</p>
                  <input
                    type="radio"
                    checked={adobtThemes === true}
                    onChange={() => updateFormState({ adobtThemes: true })}
                  />
                  <p>No</p>
                  <input
                    type="radio"
                    checked={adobtThemes === false}
                    onChange={() => updateFormState({ adobtThemes: false })}
                  />
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex flex-col gap-4 lg:max-w-[60%]">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Do you adapt themes to different venue sizes ?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <p>Yes</p>
                    <input
                      type="radio"
                      checked={adobtThemes === true}
                      onChange={() => updateFormState({ adobtThemes: true })}
                    />
                    <p>No</p>
                    <input
                      type="radio"
                      checked={adobtThemes === false}
                      onChange={() => updateFormState({ adobtThemes: false })}
                    />
                  </div>
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Do you offer customization of themes ?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <p>Yes</p>
                    <input
                      type="radio"
                      checked={customizationsThemes === true}
                      onChange={() =>
                        updateFormState({ customizationsThemes: true })
                      }
                    />
                    <p>No</p>
                    <input
                      type="radio"
                      checked={customizationsThemes === false}
                      onChange={() =>
                        updateFormState({ customizationsThemes: false })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-4">
                <label htmlFor="category">Custom Design Process</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Description of their custom design process"
                  value={customDesignProcess}
                  onChange={(e) =>
                    updateFormState({ customDesignProcess: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Skip
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
