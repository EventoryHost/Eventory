"use client";

import React, { useEffect, useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@mui/material";

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
  const { backDropoptions, decorationoptions, prop_accessory } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [propChecked, setPropChecked] = useState(false);
  const [backdropChecked, setbackdropChecked] = useState(false);
  const [decorChecked, setdecorChecked] = useState(false);

  return (
    <div className="scroll-touch items-strech flex  w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9]  scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3  md:p-6">
        <div className="flex gap-4 items-center">
          <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={() => setCurrentPage(currentPage - 1)} />
          <h1 className="text-2xl font-semibold">Theme Elements</h1>
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
              <label htmlFor="category" className="text-base font-medium">
                Description of backdrop options
              </label>
              <textarea
                cols={30}
                rows={3}
                className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                placeholder="Description of their custom design process"
                value={backDropoptions}
                disabled={backdropChecked}
                onChange={(e) =>
                  updateFormState({ backDropoptions: e.target.value })
                }
              />
              <label className=" text-lg font-semibold">
                <Checkbox
                  checked={backdropChecked}
                  onChange={(e) => {
                    setbackdropChecked(!backdropChecked)
                    updateFormState({ backDropoptions: "customizable" })

                  }}

                  sx={{
                    "&.Mui-checked": {
                      color: "#2E3192",
                    },
                  }}
                />
                Customizable
              </label>
            </div>
            <div className="flex min-w-[45%] flex-col gap-2">
              <label htmlFor="category" className="text-base font-medium">
                Description of stage decoration options
              </label>
              <textarea
                cols={30}
                rows={3}
                className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                placeholder="Description of their custom design process"
                value={decorationoptions}
                onChange={(e) =>
                  updateFormState({ decorationoptions: e.target.value })
                }
              />
              <label className=" text-lg font-semibold">
                <Checkbox
                  checked={decorChecked}
                  onChange={(e) => {
                    setdecorChecked(!decorChecked)
                    updateFormState({ decorationoptions: "customizable" })

                  }}

                  sx={{
                    "&.Mui-checked": {
                      color: "#2E3192",
                    },
                  }}
                />
                Customizable
              </label>
            </div>
          </div>
          <div className="flex min-w-full flex-row items-start justify-between gap-4">
            <div className="flex min-w-[45%] flex-col gap-2">
              <label htmlFor="category" className="text-base font-medium">
                Description of prop & accessory selection
              </label>
              <textarea
                cols={30}
                rows={3}
                disabled={propChecked}
                className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                placeholder="Description of their custom design process"
                value={prop_accessory}
                onChange={(e) =>
                  updateFormState({ prop_accessory: e.target.value })
                }
              />
              <label className=" text-lg font-semibold">
                <Checkbox
                  checked={propChecked}
                  onChange={(e) => {
                    setPropChecked(!propChecked)
                    updateFormState({ prop_accessory: "customizable" })

                  }}

                  sx={{
                    "&.Mui-checked": {
                      color: "#2E3192",
                    },
                  }}
                />
                Customizable
              </label>
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
