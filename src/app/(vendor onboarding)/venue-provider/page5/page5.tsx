"use client";

import React from "react";
import { Upload } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";

const _venue_restrictions = [
  "Alcohol",
  "Bag Checking",
  "Equipment Damage",
  "Event Permits",
  "Guest Capacity",
  "Noise",
  "Non-Flammable Areas",
  "Off-Limits Areas",
  "Others",
  "Waste Management",
];

const _venue_features = [
  "Architectural Features",
  "Botanical Gardens",
  "Children's Play Area",
  "Cultural Exhibits",
  "Historic Significance",
  "Industrial Spaces",
  "Interactive Technology",
  "Mountain or Forest View",
  "Others",
  "Renewable Energy",
  "Rooftop Venues",
  "Waterfront Views",
];

interface FormState {
  instaURL: string;
  websiteURL: string;
}

interface Page5Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  venue_restrictions: string[];
  setVenue_restrictions: React.Dispatch<React.SetStateAction<string[]>>;
  venue_special_features: string[];
  setVenue_special_features: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page5: React.FC<Page5Props> = ({
  formState,
  updateFormState,
  handleContinue,
  venue_restrictions,
  setVenue_restrictions,
  venue_special_features,
  setVenue_special_features,
}) => {
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start">
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">Extra Details</h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex min-w-[40%] flex-col gap-4">
              <div className="flex min-w-full flex-col items-start justify-between gap-2">
                <p className="text-xl font-semibold">
                  HD photos / Videos of your Venue
                </p>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-[40%] flex-col gap-4">
              <div className="flex min-w-full flex-col items-start justify-between gap-2">
                <p className="text-xl font-semibold">
                  Virtual tour of your venue (Optional)
                </p>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex min-w-[40%] flex-col gap-4">
              <label htmlFor="category">Instagram URL (optional)</label>
              <input
                id="instaURL"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your instagram URL"
                value={formState.instaURL}
                onChange={(e) => updateFormState({ instaURL: e.target.value })}
              />
            </div>
            <div className="flex min-w-[40%] flex-col gap-4">
              <label htmlFor="category">Website URL (optional)</label>
              <input
                id="websiteURL"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your website URL"
                value={formState.websiteURL}
                onChange={(e) =>
                  updateFormState({ websiteURL: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">
          Restrictions and policies at your Venue{" "}
        </h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"_venue_restrictions"}
              appetizers={_venue_restrictions}
              selectedAppetizers={venue_restrictions}
              setSelectedAppetizers={setVenue_restrictions}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">
          Special Features at your Venue
        </h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              field={"_venue_features"}
              appetizers={_venue_features}
              selectedAppetizers={venue_special_features}
              setSelectedAppetizers={setVenue_special_features}
            />
          </div>
        </div>
      </div>
      <div className="items-strech mt-9 flex flex-row gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
  );
};

export default Page5;
