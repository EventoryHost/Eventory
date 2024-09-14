"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";

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
}

interface Page3Props {
  handleContinue: () => void;

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
  handleContinue
  
}) => {
  const { backDropoptions, decorationoptions, prop_accessory } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Theme Offered</h1>
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
            <div className="item-center flex min-w-full flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label htmlFor="category">
                  Description of backdrop options
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8rem] text-sm outline-none"
                  placeholder="Description of their custom design process"
                  value={backDropoptions}
                  onChange={(e) =>
                    updateFormState({ backDropoptions: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label htmlFor="category">
                  Description of stage decoration options
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8rem] text-sm outline-none"
                  placeholder="Description of their custom design process"
                  value={decorationoptions}
                  onChange={(e) =>
                    updateFormState({ decorationoptions: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label htmlFor="category">
                  Description of prop & accessory selection
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8rem] text-sm outline-none"
                  placeholder="Description of their custom design process"
                  value={backDropoptions}
                  onChange={(e) =>
                    updateFormState({ backDropoptions: e.target.value })
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

export default Page3;
