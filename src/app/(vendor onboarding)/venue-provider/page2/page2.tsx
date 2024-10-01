"use client";

import { Combobox } from "@/components/ui/combobox";
import Appetizers from "../../(components)/Appetizers";
import { useEffect } from "react";
import { set } from "date-fns";

const _decorTypes = [
  { value: "indoor", label: "Inhouse Decor" },
  { value: "external_allowed", label: "External Decor Allowed" },
  { value: "external_not  ", label: "External Decor Not Allowed" },
];

const venuetypes = [
  "Marriage Hall",
  "Banquet Hall",
  "Hotel with Event Space",
  "Farm House",
  "Garden",
  "Community Center",
  "Party Halls",
  "Lawns",
  "Roof Top",
  "Resorts",
  "Seminar Halls",
  "Others",
];

const accessibilityFeatures = [
  "Wheelchair Access",
  "Restrooms",
  "Parkings",
  "Clear Pathways",
  "Interpreters",
  "Braille Screens",
  "Screen Readers",
  "Audio Descriptions",
  "Hearing Loops",
  "Sensory Rooms",
  "Visual Sign Support",
  "Emergency Procedures",
  "Others",
];

const restrictions = [
  "Noise",
  "Guest Capacity",
  "Off Limits Areas",
  "Non-flammable Areas",
  "Alcohol",
  "Equipment Damage",
  "Bag Checks",
  "Waste Management",
  "Event Permit",
  "Fire Safety",
  "Others",
];

const specialFeaturez = [
  "Historic Significance",
  "Architectural Significance",
  "Industrial Spaces",
  "Waterfront Views",
  "Mountain or Forest Views",
  "Botanical Gardens",
  "Rooftop Views",
  "Children Play Area",
  "Interactive Exhibits",
  "Renewable Energy",
  "Culture Exhibits",
  "Others",
];

const _audioEquipment = [
  "Microphones",
  "Speakers",
  "Audio Mixers",
  "Amplifiers",
  "Projection Screens",
  "Lcd Projectors",
  "Led Screens",
  "PTZ (Pan-Tilt-Zoom) Cameras",
  "Monitors",
  "Camcorders",
  "Dlp Projectors",
  "Others",
];

const _accessibilityFeatures = [
  "Wheelchair Access",
  "Restrooms",
  "Parkings",
  "Braille Screens",
  "Interpreters",

  "Audio Descriptions",
  "Clear Pathways",
  "Emergency Procedures",
  "Hearing Loops",
  "Others",
  "Screen Readers",
  "Sensory Rooms",
  "Visual Sign Support",
];

const _facilities = [
  "Av Equipments",
  "Banquet Hall",
  "Bridal Room",
  "Charging Stations",
  "Fill Hvac Control",
  "First Aid Equipments",
  "Garden Area",
  "High Speed Internet",
  "Others",
  "Storage Area",
];

interface FormState {
  venueDescription: string;
  catererServices: boolean;
  decorServices: boolean;
  // audioVisualEquipment: string[];
  // accessibilityFeatures: string[];
  //facilities: string[];
}

interface Page2Props {
  audioVisualEquipment: string[];
  setAudioVisualEquipment: React.Dispatch<React.SetStateAction<string[]>>;
  accessibilityFeatures: string[];
  setAccessibilityFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  facilities: string[];
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  catererServices: boolean;
  decorServices: boolean;
  venueTypes: string[];
  setVenueTypes: React.Dispatch<React.SetStateAction<string[]>>;
  restrictionsPolicies: string[];
  setRestrictionsPolicies: React.Dispatch<React.SetStateAction<string[]>>;
  specialFeatures: string[];
  setSpecialFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page2: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  audioVisualEquipment,
  setAudioVisualEquipment,
  accessibilityFeatures,
  setAccessibilityFeatures,
  facilities,
  setFacilities,
  handleContinue,
  currentPage,
  setCurrentPage,
  catererServices,
  decorServices,
  venueTypes,
  setVenueTypes,
  restrictionsPolicies,
  setRestrictionsPolicies,
  specialFeatures,
  setSpecialFeatures,
}) => {
  return (
    <>
      <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll scrollbar-hide rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Venue Feature details</h1>
          </div>
          <div className="flex gap-10">
            <div>
              <h3 className="text-lg font-medium">
                In-house Catering service?
                <span className="text-red-600">*</span>
              </h3>
              <div className="flex gap-2">
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name="catering"
                    id="catering-yes"
                    onChange={() => updateFormState({ catererServices: true })}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="catering-yes"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name="catering"
                    id="catering-no"
                    onChange={() => updateFormState({ catererServices: false })}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="catering-no"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                In-house Decorating Service?
                <span className="text-red-600">*</span>
              </h3>
              <div className="flex gap-2">
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name="decorating"
                    id="decorating-yes"
                    onChange={() => updateFormState({ decorServices: true })}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="decorating-yes"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    name="decorating"
                    id="decorating-no"
                    onChange={() => updateFormState({ decorServices: false })}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="decorating-no"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Types of Venue</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"venuetypes"}
                appetizers={venuetypes}
                selectedAppetizers={venueTypes}
                setSelectedAppetizers={setVenueTypes}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Audio and visual Equipment you provide{" "}
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_audioEquipment"}
                appetizers={_audioEquipment}
                selectedAppetizers={audioVisualEquipment}
                setSelectedAppetizers={setAudioVisualEquipment}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Accessibility Features at your Venue{" "}
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_accessibilityFeatures"}
                appetizers={_accessibilityFeatures}
                selectedAppetizers={accessibilityFeatures}
                setSelectedAppetizers={setAccessibilityFeatures}
              />
            </div>
          </div>
        </div>
        {/* Fix */}
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Restrictions and policies at your Venue
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"restrictions"}
                appetizers={restrictions}
                selectedAppetizers={restrictionsPolicies}
                setSelectedAppetizers={setRestrictionsPolicies}
              />
            </div>
          </div>
        </div>
        {/* Fix */}
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Special features at your Venue
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"specialFeatures"}
                appetizers={specialFeaturez}
                selectedAppetizers={specialFeatures}
                setSelectedAppetizers={setSpecialFeatures}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Facilities at your Venue</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_facilities"}
                appetizers={_facilities}
                selectedAppetizers={facilities}
                setSelectedAppetizers={setFacilities}
              />
            </div>
          </div>
        </div>
        <div className="items-strech mt-9 flex flex-row gap-7 self-end">
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
