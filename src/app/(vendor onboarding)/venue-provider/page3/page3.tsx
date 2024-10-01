"use client";

import FileInput from "@/components/fileInput";
import { Combobox } from "../(components)/comboBoxNew";
import { useEffect } from "react";

interface FormState {
  termsConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  photos: string | File | File[];
  videos: string | File | File[];
  instagramURL: string;
  websiteURL: string;
  awards: string;
  clientTestimonials: string;
  advanceBookingPeriod: string;
}

interface Page3Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  awards: string;
  clientTestimonials: string;
  instagramURL: string;
  websiteURL: string;
  advanceBookingPeriod: string;
  photos: string | File | File[];
  videos: string | File | File[];
}

const advanceBookingPeriodOptions = [
  { value: "Less than a week", label: "Less than a week" },
  { value: "1-2 weeks", label: "1-2 weeks" },
  { value: "More than 2 weeks", label: "More than 2 weeks" },
];

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll scrollbar-hide rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Additional Details </h1>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Photos<span className="text-red-600">*</span>
            </h2>
            <p className="mb-4 text-sm text-gray-600">PNG, JPG</p>
            <FileInput
              label="Photos"
              multiple={true}
              onFileSelect={(files) => {
                // Determine existing photos from the previous state
                const existingPhotos = Array.isArray(formState.photos)
                  ? formState.photos
                  : formState.photos instanceof File
                    ? [formState.photos]
                    : [];

                // Create the new photos array by combining existing and newly selected files
                const newPhotos = [
                  ...existingPhotos,
                  ...(Array.isArray(files) ? files : [files]),
                ];

                // Update the form state with the new photos array
                updateFormState({ photos: newPhotos });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="mt-4">or continue via</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your portfolio link"
              value={
                typeof formState.photos === "string"
                  ? formState.photos
                  : Array.isArray(formState.photos)
                    ? formState.photos.map((file: File) => file.name).join(", ")
                    : (formState.photos as File)?.name
              }
              onChange={(e) => updateFormState({ photos: e.target.value })}
            />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Videos<span className="text-red-600">*</span>
            </h2>
            <p className="mb-4 text-sm text-gray-600">MP4, MKV</p>
            <FileInput
              label="tnc"
              multiple={true}
              onFileSelect={(files) => {
                const existingVideos = Array.isArray(formState.videos)
                  ? formState.videos
                  : formState.videos instanceof File
                    ? [formState.videos]
                    : [];

                const newVideos = [
                  ...existingVideos,
                  ...(Array.isArray(files) ? files : [files]),
                ];

                updateFormState({ videos: newVideos });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="mt-4">or continue via</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your portfolio link"
              value={
                typeof formState.videos === "string"
                  ? formState.videos
                  : Array.isArray(formState.videos)
                    ? formState.videos.map((file: File) => file.name).join(", ")
                    : (formState.videos as File)?.name
              }
              onChange={(e) => updateFormState({ videos: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Awards/Recognition</h2>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Provide your URL"
              value={formState.awards}
              onChange={(e) => updateFormState({ awards: e.target.value })}
            />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Client Testimonials</h2>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Provide your URL"
              value={formState.clientTestimonials}
              onChange={(e) =>
                updateFormState({ clientTestimonials: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Instagram URL</h2>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Provide your Instagram URL for the Venue"
              value={formState.instagramURL}
              onChange={(e) =>
                updateFormState({ instagramURL: e.target.value })
              }
            />
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Website URL</h2>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Provide your website URL for the venue"
              value={formState.websiteURL}
              onChange={(e) => updateFormState({ websiteURL: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Advance Booking Period<span className="text-red-600">*</span>
            </h2>
            <Combobox
              options={advanceBookingPeriodOptions}
              placeholder="Select Advance Booking Period"
              setFunction={(value) =>
                updateFormState({ advanceBookingPeriod: value })
              }
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
  );
};

export default Page3;
