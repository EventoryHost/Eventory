"use client";

import { EditIcon } from "lucide-react";
import { FormState } from "../page";
import { set } from "date-fns";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleSubmit: (e: React.FormEvent) => void;
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
  handleSubmit,
  currentPage,
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
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start">
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-3">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Venue Providers</h1>

          <div className="mx-2 mr-4 flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
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

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Venue Name</span>
              <span className="mt-4 font-semibold">{formState.name}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Capacity</span>
              <span className="font-semibold">{formState.capacity}</span>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Manager Name (POC)</span>
              <span className="mt-4 font-semibold">
                {formState.managerName}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Operating Hours</span>
              <span className="font-semibold">
                {formState.operatingHours.openingTime} -{" "}
                {formState.operatingHours.closingTime}
              </span>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Venue Address</span>
              <span className="mt-4 font-semibold">{formState.address}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Venue Description</span>
              <span className="font-semibold">
                {formState.venueDescription}
              </span>
            </div>
          </div>

          <div className="mx-2 mr-4 flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
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

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">In-House Catering Service?</span>
              <span className="mt-4 font-semibold">
                {formState.catererServices ? "Available" : "Not Available"}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">In-House Decorating Service?</span>
              <span className="mt-4 font-semibold">
                {formState.catererServices ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Types of Venue</span>
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

          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
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
            </div>
          </div>
          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
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
            </div>
          </div>
          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">
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
          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Special features at your venue</span>
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
          <div className="mx-8 mt-6 flex gap-16">
            <div className="flex w-1/2 flex-col">
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
            </div>
          </div>

          <div className="mx-2 mr-4 flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
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

          <div className="mx-8 mt-2 flex gap-16">
            {/* Photos Section */}
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Photos</span>
              <div className="mt-4 font-semibold">
                {Array.isArray(formState.photos) &&
                formState.photos.length > 0 ? (
                  formState.photos.map((photo, index) => (
                    <span key={index} className="block">
                      {photo.name}
                    </span>
                  ))
                ) : (
                  <span>No photos uploaded</span>
                )}
              </div>
            </div>

            {/* Videos Section */}
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Videos</span>
              <div className="mt-4 font-semibold">
                {Array.isArray(formState.videos) &&
                formState.videos.length > 0 ? (
                  formState.videos.map((video, index) => (
                    <span key={index} className="block">
                      {video.name}
                    </span>
                  ))
                ) : (
                  <span>No videos uploaded</span>
                )}
              </div>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Awards/Recognition</span>
              <span className="mt-4 font-semibold">{formState.awards}</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Client Testimonials</span>
              <span className="mt-4 font-semibold">
                {formState.clientTestimonials}
              </span>
            </div>
          </div>

          <div className="mx-8 mt-2 flex gap-16">
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Instagram URL</span>
              <span className="mt-4 font-semibold">
                {formState.instagramURL}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Website URL</span>
              <span className="mt-4 font-semibold">{formState.websiteURL}</span>
            </div>
          </div>

          <div className="mx-2 mr-4 flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-2xl font-semibold">
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

          <div className="mx-8 mt-6 flex gap-16">
            {/* Terms and Conditions */}
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Terms and Conditions</span>
              <div className="mt-4 font-semibold">
                {Array.isArray(formState.termsConditions) ? (
                  formState.termsConditions.map((file, index) =>
                    file instanceof File ? (
                      <span key={index} className="block">
                        {file.name}
                      </span>
                    ) : (
                      <span key={index}>{file}</span>
                    ),
                  )
                ) : formState.termsConditions instanceof File ? (
                  <span>{formState.termsConditions.name}</span>
                ) : (
                  <span>{formState.termsConditions}</span>
                )}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Cancellation Policy</span>
              <div className="mt-4 font-semibold">
                {Array.isArray(formState.cancellationPolicy) ? (
                  formState.cancellationPolicy.map((file, index) =>
                    file instanceof File ? (
                      <span key={index} className="block">
                        {file.name}
                      </span>
                    ) : (
                      <span key={index}>{file}</span>
                    ),
                  )
                ) : formState.cancellationPolicy instanceof File ? (
                  <span>{formState.cancellationPolicy.name}</span>
                ) : (
                  <span>{formState.cancellationPolicy}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mx-8 mt-6 flex gap-16">
            {/* Insurance Coverage Policy */}
            <div className="flex w-1/2 flex-col">
              <span className="text-xl">Insurance Coverage Policy</span>
              <div className="mt-4 font-semibold">
                {Array.isArray(formState.insurancePolicy) ? (
                  formState.insurancePolicy.map((file, index) =>
                    file instanceof File ? (
                      <span key={index} className="block">
                        {file.name}
                      </span>
                    ) : (
                      <span key={index}>{file}</span>
                    ),
                  )
                ) : formState.insurancePolicy instanceof File ? (
                  <span>{formState.insurancePolicy.name}</span>
                ) : (
                  <span>{formState.insurancePolicy}</span>
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
              onClick={() => {
                setCurrentPage(currentPage + 1);
                handleSubmit;
              }}
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
