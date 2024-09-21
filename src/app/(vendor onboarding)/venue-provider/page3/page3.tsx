"use client";

import FileInput from "@/components/fileInput";
import { Combobox } from "../(components)/comboBoxNew";
import { useEffect } from "react";
import { Award } from "lucide-react";

interface FormState {
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  photos: string | File ;
  videos: string | File;
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
  photos: string | File;
  videos: string | File;

}

const advanceBookingPeriodOptions = [
  { value: "Less than a week", label: "Less than a week" },
  { value: "1-2 weeks", label: "1-2 weeks" },
  { value: "More than 2 weeks", label: "More than 2 weeks" },
]

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage,

}) => {
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Additional Details </h1>

      <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Photos<span className="text-red-600">*</span></h2>
          <p className="text-gray-600 text-sm mb-4">PNG, JPG</p>
          <FileInput
            label="Photos"
            onFileSelect={(file) => {
              updateFormState({ photos : file });
            }}
            acceptedFileTypes="image/png, .pdf, image/jpg"
          />
          <p className="mt-4">or continue via</p>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your portfolio link"
            value={typeof formState.photos === 'string' ? formState.photos : formState.photos?.name}
            onChange={(e) => updateFormState({ photos: e.target.value })}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Videos<span className="text-red-600">*</span></h2>
          <p className="text-gray-600 text-sm mb-4">MP4, MKV</p>
          <FileInput
            label="tnc"
            onFileSelect={(file) => {
              updateFormState({ videos: file });
            }}
            acceptedFileTypes="image/png, .pdf, image/jpg"
          />
          <p className="mt-4">or continue via</p>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your portfolio link"
            value={typeof formState.videos === 'string' ? formState.videos : formState.videos?.name}
            onChange={(e) => updateFormState({ videos: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Awards/Recognition</h2>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Provide your URL"
            value={formState.awards}
            onChange={(e) => updateFormState({ awards: e.target.value })}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Client Testimonials</h2>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Provide your URL"
            value={formState.clientTestimonials}
            onChange={(e) => updateFormState({ clientTestimonials: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Instagram URL</h2>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Provide your Instagram URL for the Venue"
            value={formState.instagramURL}
            onChange={(e) => updateFormState({ instagramURL: e.target.value })}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Website URL</h2>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Provide your website URL for the venue"
            value={formState.websiteURL}
            onChange={(e) => updateFormState({ websiteURL: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
        <h2 className="text-xl font-semibold mb-2">Advance Booking Period<span className="text-red-600">*</span></h2>
        <Combobox
          options={advanceBookingPeriodOptions}
          placeholder="Select Advance Booking Period"
          setFunction={(value) => updateFormState({ advanceBookingPeriod: value })}
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
