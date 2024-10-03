"use client";

import { EditIcon } from "lucide-react";
import { FormState } from "../page";
import { set } from "date-fns";
import FileDisplay from "../../caterer/(components)/File";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  audioVisualEquipment: string[];
  accessibilityFeatures: string[];
  facilities: string[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  address: string;
  operatingHours: { openingTime?: string; closingTime?: string };
  catererServices: boolean;
  decorServices: boolean;
  venueTypes: string[];
  restrictionsPolicies: string[];
  specialFeatures: string[];
  photos: string | File | File[];
  videos: string | File | File[];
  awards: string;
  clientTestimonials: string;
  instagramURL: string;
  websiteURL: string;
  advanceBookingPeriod: string;
  termsConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  insurancePolicy: string | File | File[];
}

const Page6: React.FC<Page6Props> = ({
  formState,
  currentPage,
  handleContinue,
  setCurrentPage,
  address,
  operatingHours,
  catererServices,
  decorServices,
  venueTypes,
  restrictionsPolicies,
  specialFeatures,
  audioVisualEquipment,
  accessibilityFeatures,
  facilities,
  photos,
  videos,
  awards,
  clientTestimonials,
  instagramURL,
  websiteURL,
  advanceBookingPeriod,
  termsConditions,
  cancellationPolicy,
  insurancePolicy,
}) => {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-4 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-bold">Venue Providers</h1>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            1. Basic Venue Details
            <div className="align-center flex justify-center p-1">
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 4);
                }}
              >
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Venue Name</span>
              <span className="mt-4 text-sm font-bold">{formState.name}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Capacity</span>
              <span className="text-sm font-bold">{formState.capacity}</span>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Manager Name (POC)</span>
              <span className="mt-4 text-sm font-bold">
                {formState.managerName}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Operating Hours</span>
              <span className="text-sm font-bold">
                {formState.operatingHours.openingTime} -{" "}
                {formState.operatingHours.closingTime}
              </span>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Venue Address</span>
              <span className="mt-4 text-sm font-bold">
                {formState.address}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Venue Description</span>
              <span className="text-sm font-bold">
                {formState.venueDescription}
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            2. Venue Feature Details
            <div className="align-center flex justify-center p-1">
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 3);
                }}
              >
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                In-House Catering Service?
              </span>
              <span className="mt-4 text-sm font-bold">
                {formState.catererServices ? "Available" : "Not Available"}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                In-House Decorating Service?
              </span>
              <span className="mt-4 text-sm font-bold">
                {formState.catererServices ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Types of Venue</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {venueTypes.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
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
            </div>
          </div>
          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
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
            </div>
          </div>
          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                Restricitons and Policies at your venue
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {restrictionsPolicies.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                Special features at your venue
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialFeatures.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-full bg-[#F0EFFC] px-3 py-1 text-sm font-medium text-gray-600 outline-none md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                Facilities at your venue
              </span>
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
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            3. Additional Details
            <div className="align-center flex justify-center p-1">
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 2);
                }}
              >
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            {/* Photos Section */}
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Photos</span>
              <div className="mt-4 text-sm font-bold">
                {typeof formState.photos === "string" ? (
                  <div>{formState.photos}</div> // Handle string case
                ) : Array.isArray(formState.photos) ? (
                  <FileDisplay files={formState.photos} /> // Handle File[] case
                ) : (
                  <FileDisplay file={formState.photos} /> // Handle single File case
                )}
              </div>
            </div>

            {/* Videos Section */}
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Videos</span>
              <div className="mt-4 text-sm font-bold">
                {typeof formState.videos === "string" ? (
                  <div>{formState.videos}</div> // Handle string case
                ) : Array.isArray(formState.videos) ? (
                  <FileDisplay files={formState.videos} /> // Handle File[] case
                ) : (
                  <FileDisplay file={formState.videos} /> // Handle single File case
                )}
              </div>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Awards/Recognition</span>
              <span className="mt-4 text-sm font-bold">{formState.awards}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Client Testimonials</span>
              <span className="mt-4 text-sm font-bold">
                {formState.clientTestimonials}
              </span>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Instagram URL</span>
              <span className="mt-4 text-sm font-bold">
                {formState.instagramURL}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Website URL</span>
              <span className="mt-4 text-sm font-bold">
                {formState.websiteURL}
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            4. Policy
            <div className="align-center flex justify-center p-1">
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            {/* Terms and Conditions */}
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                Terms and Conditions
              </span>
              <div className="mt-4 text-sm font-bold">
                {typeof formState.termsConditions === "string" ? (
                  <div>{formState.termsConditions}</div> // Handle string case
                ) : Array.isArray(formState.termsConditions) ? (
                  <FileDisplay files={formState.termsConditions} /> // Handle File[] case
                ) : (
                  <FileDisplay file={formState.termsConditions} /> // Handle single File case
                )}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">Cancellation Policy</span>
              <div className="mt-4 text-sm font-bold">
                {typeof formState.cancellationPolicy === "string" ? (
                  <div>{formState.cancellationPolicy}</div> // Handle string case
                ) : Array.isArray(formState.cancellationPolicy) ? (
                  <FileDisplay files={formState.cancellationPolicy} /> // Handle File[] case
                ) : (
                  <FileDisplay file={formState.cancellationPolicy} /> // Handle single File case
                )}
              </div>
            </div>
          </div>

          <div className="mx-4 flex gap-16">
            {/* Insurance Coverage Policy */}
            <div className="flex w-1/2 flex-col">
              <span className="text-base font-normal">
                Insurance Coverage Policy
              </span>
              <div className="mt-4 text-sm font-bold">
                {typeof formState.insurancePolicy === "string" ? (
                  <div>{formState.insurancePolicy}</div> // Handle string case
                ) : Array.isArray(formState.insurancePolicy) ? (
                  <FileDisplay files={formState.insurancePolicy} /> // Handle File[] case
                ) : (
                  <FileDisplay file={formState.insurancePolicy} /> // Handle single File case
                )}
              </div>
            </div>
          </div>

          <div className="items-strech mt-9 flex flex-row gap-7 self-end">
            <button
              className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              Previous
            </button>
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleContinue}
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
