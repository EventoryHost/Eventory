import StepBar from "@/app/(components)/stepBar";
import FileInput from "@/components/fileInput";
import { ArrowLeft, Upload } from "lucide-react";
import { SetStateAction, useEffect } from "react";
import { FormState } from "../page";
import Appetizers from "../../(components)/Appetizers";
import { Console } from "console";


interface formState {
  itemCatalogue: boolean | File;
  customization: boolean;
  maintenance: string;
  services: string;

  handleChange: (key: string, value: any) => void;
}

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

type page2Props = {
  formState: formState;
  handleChange: (key: string, value: any) => void;
  handleNestedChange: (key: string, nestedKey: string, value: any) => void;
  navigateToPage: (page: number) => void;
  updateFormState: (newState: Partial<FormState>) => void;
  currentPage: number;
  setCurrentPage: (value: any) => void;
  handleSubmit: () => void;
  serviceProvided: string[];
  setServiceProvided: (value: SetStateAction<string[]>) => void;
};

const Page2: React.FC<page2Props> = ({
  formState,
  handleChange,
  updateFormState,
  handleNestedChange,
  currentPage,
  setCurrentPage,
  serviceProvided,
  setServiceProvided,
}) => {
  const _serviceProvided = [
    "Furniture and Decor",
    "Tent and Canopy",
    "Audio visuals",
    "Others",
  ];

  useEffect(() => {
    console.log(formState.customization);
  }, [formState.customization]);
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Services Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-8">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[48%] flex-col gap-2">
                <p className="flex items-center gap-1 text-base font-medium">
                  Items Catalogue
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.33398"
                      y="1.3335"
                      width="13.3333"
                      height="13.3333"
                      rx="6.66667"
                      stroke="#2B3F6C"
                    />
                    <path
                      d="M8.33398 11.3335L8.33398 7.3335"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00065 7.3335L8.33398 7.3335"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 5.33366L8.33398 4.66699"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      id="itemCatalogueYes"
                      type="radio"
                      name="itemCatalogue"
                      value="true"
                      checked={!!formState.itemCatalogue}
                      onChange={() => updateFormState({ itemCatalogue: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="itemCatalogueYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      id="itemCatalogueNo"
                      type="radio"
                      name="itemCatalogue"
                      value="false"
                      checked={!formState.itemCatalogue}
                      onChange={() => updateFormState({ itemCatalogue: false })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="itemCatalogueNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>

                {formState.itemCatalogue && (
                  <>
                    <span className="text-small font-light">PNG,JPG,PDF</span>

                    <FileInput
                      label="itemCatalogue"
                      onFileSelect={(file) => {
                        if (!Array.isArray(file)) {
                          updateFormState({ itemCatalogue: file });
                        }
                      }}
                      acceptedFileTypes="image/png, .pdf, image/jpg"
                    />
                  </>
                )}
              </div>
              <div className="flex min-w-[48%] flex-col gap-2">
                <p className="text-base font-medium">
                  Do you offer customization(branding, color, theme of Items)?
                  <span className="text-red-500">*</span>{" "}
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-4">
                    <input
                      id="customizationYes"
                      type="radio"
                      name="customization"
                      value="true"
                      checked={!!formState.customization}
                      onChange={() => updateFormState({ customization: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="customizationYes" className="text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      id="customizationNo"
                      type="radio"
                      name="customization"
                      value="false"
                      checked={!formState.customization}
                      onChange={() => updateFormState({ customization: false })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="customizationNo" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[48%] flex-col gap-2">
                <p className="text-base font-medium">
                  How you handle maintenance and repairs?
                </p>
                <textarea
                  rows={5}
                  placeholder="Process you follow to maintain your rental items"
                  onChange={(e) =>
                    updateFormState({ maintenance: e.target.value })
                  }
                  className="mt-4 rounded-xl border-2 border-gray-300 p-3"
                ></textarea>
              </div>
              <div className="flex min-w-[48%] flex-col gap-2">
                <p className="text-base font-medium">
                  What areas do you provide service for?
                </p>
                <textarea
                  rows={5}
                  placeholder="Like nearby, outstation,etc."
                  onChange={(e) =>
                    updateFormState({ services: e.target.value })
                  }
                  className="mt-4 rounded-xl border-2 border-gray-300 p-3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
        <label htmlFor="category" className="text-xl font-medium">
          Services you provide?<span className="text-red-500">*</span>
        </label>

        <div className="flex min-h-full min-w-full flex-col items-center">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"additionalServices"}
              appetizers={_serviceProvided}
              selectedAppetizers={serviceProvided}
              setSelectedAppetizers={setServiceProvided}
            />
          </div>
          <div className="items-strech flex flex-row gap-7 self-end">
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={() => {
                console.log(
                  formState.customization,
                  formState.itemCatalogue,
                  formState.maintenance,
                  formState.services,
                  serviceProvided,
                );
                setCurrentPage(currentPage + 1);
              }}
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
