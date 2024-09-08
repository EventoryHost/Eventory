"use client";
import FileInput from "@/components/fileInput";
import Appetizers from "../../(components)/Appetizers";
import { Upload } from "lucide-react";
import { Key, SetStateAction, useEffect, useState } from "react";

const tentOptions = [
  "Traditional Indian Tents",
  "marquee tents",
  "pagoda tents",
  "pole tents",
  "frame tents",
  "event specific tents",
  "pop-up canopies",
  "garden canopies",
  "event specific canopies",
  "gazebo",
  "shade structures",
  "temporary structures",
  "others",
];

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

type FormState = {
  // Page1
  contactName: string;
  phoneNumber: string;
  workDescription: string;
  yearsOfExperience: string;
  numberOfWorkers: string;
  handleChange: (key: keyof FormState, value: any) => void;
  [key: string]: any;

  // Page2
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;
  furnitureAndDecorListUrl: string | File;
  tentAndCanopyListUrl: string | File;

  // Page3
  selectedAppetizers: string[];
  selectedDecor: string[];
  furnitureHourlyPricingEntries: PricingEntry[];
  tentHourlyPricingEntries: PricingEntry[];
  hourlyCheckbox: boolean;
  packageTypePage3: string;
  packageMinRate: string;
  packageMaxRate: string;
  dealCheckbox: boolean;
  dealType: string;
  dealMinRate: string;
  dealMaxRate: string;
  workerCheckbox: boolean;
  workerType: string;
  workerMinRate: string;
  workerMaxRate: string;

  advancedPaymentCheckboxPage3: boolean;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;

  // Page4
  hourlyCheckboxPage4: boolean;
  dealCheckboxPage4: boolean;
  workerCheckboxPage4: boolean;
  advancedPaymentCheckboxPage4: boolean;

  // Page5
  hourlyCheckboxPage5: boolean;
  dealCheckboxPage5: boolean;
  workerCheckboxPage5: boolean;
  advancedPaymentCheckboxPage5: boolean;
};

export interface page4Props {
  selectedTentOptions: string[];
  setSelectedTentOptions: React.Dispatch<SetStateAction<string[]>>;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  percentageValuePage4: number;
  percentageValuePage5: number;
  formState: FormState;
  handleChange: (key: keyof FormState, value: any) => void;
  tentHourlyPricingEntries: PricingEntry[];
  handleAddPricingEntry: (entry: PricingEntry) => void;
  handleAddTentHourlyPricingEntries: (entry: PricingEntry) => void;
  updateFormState: (value: any) => void;
}

interface TentHourlyPricingEntry {
  name: string;
  min: number;
  max: number;
}

function Page4({
  selectedTentOptions,
  setSelectedTentOptions,
  formState,
  handleChange,
  tentHourlyPricingEntries,
  handleAddTentHourlyPricingEntries,
  updateFormState,
}: page4Props) {
  // useEffect(() => {
  //   console.log('Tent hourly pricing entries updated:', formState.tentHourlyPricingEntries);
  // }, [formState.tentHourlyPricingEntries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const minRate = parseInt(
      (form.elements.namedItem("minRate") as HTMLInputElement).value,
    );
    const maxRate = parseInt(
      (form.elements.namedItem("maxRate") as HTMLInputElement).value,
    );
    handleAddTentHourlyPricingEntries({ name, min: minRate, max: maxRate });
  };

  return (
    <>
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Tent and Canopy Rentals</h1>
          <div className="flex min-w-[40%] flex-col">
            <label className="text-xl font-semibold" htmlFor="category">
              Upload list
            </label>
            <p className="text-gray-500">PNG, PDF, JPG</p>
            <FileInput
              label="tent and conopy list"
              onFileSelect={(file) => {
                updateFormState({ tentAndCanopyListUrl: file });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
          </div>
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Tent and Canopy</h1>
          <Appetizers
            field={"tentOptions"}
            appetizers={tentOptions}
            selectedAppetizers={selectedTentOptions}
            setSelectedAppetizers={setSelectedTentOptions}
          />
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Pricing Structure</h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Hourly Package Rates</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.5H18"
                      stroke="#2E3192"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <ul>
                <li>This is start</li>
                {formState.tentHourlyPricingEntries.map(
                  (entry: TentHourlyPricingEntry, index: number) => (
                    <li
                      key={index}
                    >{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
                  ),
                )}
              </ul>
            </form>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Deal Package Rates</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const minRate = parseInt(
                  (form.elements.namedItem("minRate") as HTMLInputElement)
                    .value,
                );
                const maxRate = parseInt(
                  (form.elements.namedItem("maxRate") as HTMLInputElement)
                    .value,
                );
                // handleAddPricingEntry('deal', { name, min: minRate, max: maxRate });
              }}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.5H18"
                      stroke="#2E3192"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>{" "}
              </div>
            </form>
            <ul>
              {/* {dealpackageRates.map((entry, index) => (
          <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
        ))} */}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Rates by Workers</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const minRate = parseInt(
                  (form.elements.namedItem("minRate") as HTMLInputElement)
                    .value,
                );
                const maxRate = parseInt(
                  (form.elements.namedItem("maxRate") as HTMLInputElement)
                    .value,
                );
                // handleAddPricingEntry('worker', { name, min: minRate, max: maxRate });
              }}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.5H18"
                      stroke="#2E3192"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>{" "}
              </div>
            </form>
            <ul>
              {/* {ratesByWorkers.map((entry, index) => (
          <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
        ))} */}
            </ul>

            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                checked={formState.advancedPaymentCheckboxPage4}
                onChange={(e) =>
                  handleChange("advancedPaymentCheckboxPage4", e.target.checked)
                }
              />
              <span className="semi-bold">Advanced Payment</span>
            </div>

            <div className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label className="mb-4">Set Percentage Value</label>
                <input
                  value={formState.percentageValuePage4 || 0}
                  onInput={(e) =>
                    handleChange(
                      "percentageValuePage4",
                      (e.target as HTMLInputElement).value,
                    )
                  }
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="w-full rounded-xl border-2 outline-none"
                  style={{
                    padding: 0,
                    backgroundColor: "white",
                    borderColor: "#2E3192",
                  }}
                />
                <span>{formState.percentageValuePage4}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page4;
