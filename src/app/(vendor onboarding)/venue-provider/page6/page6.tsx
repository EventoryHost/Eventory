"use client";

import { EditIcon, Upload } from "lucide-react";

import { FormState } from "../page";

type Package = {
  type: string;
  priceRange: [number, number];
};

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  audioVisualEquipment: string[];
  accessibilityFeatures: string[];
  facilities: string[];
  hourlyPackages: Package[];
  dailyPackages: Package[];
  seasonalPackages: Package[];
  _venue_restrictions: string[];
  _venue_special_features: string[];
}

const Page6: React.FC<Page6Props> = ({
  formState,
  handleSubmit,
  audioVisualEquipment,
  accessibilityFeatures,
  facilities,
  hourlyPackages,
  dailyPackages,
  seasonalPackages,
  _venue_restrictions,
  _venue_special_features,
}) => {
  return (
    <div className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            {formState.venueName}/Venue Providers
          </h1>

          <div className="ml-8 mr-4 flex items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
            1. Basic Venue Details
            <div className="align-center flex justify-center p-1">
              <button>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Venue Type</span>
              <span className="mt-4 font-semibold">{formState.venueType}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Capacity</span>
              <span className="font-semibold">
                Seating : {formState.seatingCapacity} Standing :{" "}
                {formState.standingCapacity}
              </span>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Venue Description</span>
              <span className="mt-4 font-semibold">
                {formState.venueDescription}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Operating Hours</span>
              <span className="font-semibold">
                {formState.startOperatingHours} am -{" "}
                {formState.endOperatingHours} pm
              </span>
            </div>
          </div>

          <div className="ml-8 mr-4 flex items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
            2. Venue Feature Details
            <div className="align-center flex justify-center p-1">
              <button>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Decor Services</span>
              <span className="mt-4 font-semibold">{formState.decorType}</span>
            </div>
          </div>
          {/* 1 */}
          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex flex-col">
              <span className="text-xl">
                Audio and Visual Equipments you provide
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {audioVisualEquipment.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {audioVisualEquipment.length === 0 && (
                <div>No equipment provided</div>
              )}
            </div>
          </div>
          {/* 2 */}
          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex flex-col">
              <span className="text-xl">
                Accessibility Features at your venue
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {accessibilityFeatures.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {accessibilityFeatures.length === 0 && (
                <div>No equipment provided</div>
              )}
            </div>
          </div>
          {/* 3 */}
          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex flex-col">
              <span className="text-xl">Facilities at your venue</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {facilities.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {facilities.length === 0 && <div>No equipment provided</div>}
            </div>
          </div>

          <div className="ml-8 mr-4 flex items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
            3. Policies
            <div className="align-center flex justify-center p-1">
              <button>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Terms and Conditions</span>
              <span className="mt-4 font-semibold">
                {typeof formState.termsAndConditions === "string"
                  ? formState.termsAndConditions
                  : formState.termsAndConditions.name}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Cancellation Policy</span>
              <span className="mt-4 font-semibold">
                {typeof formState.cancellationPolicy === "string"
                  ? formState.cancellationPolicy
                  : formState.cancellationPolicy.name}
              </span>
            </div>
          </div>

          <div className="ml-8 mr-4 flex items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
            4. Pricing
            <div className="align-center flex justify-center p-1">
              <button>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-2xl font-semibold">Rental Rates</span>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Hourly Package Rates</span>
              {hourlyPackages.map((item, index) => (
                <div key={index}>
                  <span className="mt-4 font-semibold">{item.type}</span>
                  <span className="mt-4 font-semibold">
                    {item.priceRange[0]} - {item.priceRange[1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Daily Package Rates</span>
              {dailyPackages.map((item, index) => (
                <div key={index}>
                  <span className="mt-4 font-semibold">{item.type}</span>
                  <span className="mt-4 font-semibold">
                    {item.priceRange[0]} - {item.priceRange[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Seasonal Package Rates</span>
              {seasonalPackages.map((item, index) => (
                <div key={index}>
                  <span className="mt-4 font-semibold">{item.type}</span>
                  <span className="mt-4 font-semibold">
                    {item.priceRange[0]} - {item.priceRange[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-8 mr-4 flex items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
            5. Extra Details
            <div className="align-center flex justify-center p-1">
              <button>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">HD Photos/Videos of your Venue </span>
              <span className="mt-4 font-semibold">Upload</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Virtual Tour of Your Venue </span>
              <span className="mt-4 font-semibold">Upload</span>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Instagram URL</span>
              <span className="mt-4 font-semibold">{formState.instaURL}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Website URL</span>
              <span className="mt-4 font-semibold">{formState.websiteURL}</span>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex flex-col">
              <span className="text-xl">
                Restrictions and Policies at your venue
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {_venue_restrictions.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {_venue_restrictions.length === 0 && (
                <div>No equipment provided</div>
              )}
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex flex-col">
              <span className="text-xl">Special Features at your venue</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {_venue_special_features.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {_venue_special_features.length === 0 && (
                <div>No equipment provided</div>
              )}
            </div>
          </div>
          <div className="items-strech mt-9 flex flex-row gap-7 self-end">
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;