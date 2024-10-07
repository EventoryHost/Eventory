"use client";

import FileInput from "@/components/fileInput";
import Dropdown from "../../(components)/Dropdown";
import { ArrowLeft } from "lucide-react";

interface FormState {
  photos: string | File | File[];
  videos: string | File | File[];
  websiteurl: string;
  intstagramurl: string;
  clientTestimonials: string;
  Recongnition_awards: string;
  advbookingperiod: string;
  writtenthemeproposalafterconsultaion: boolean;
  revisionforinitialthemeproposal: boolean;
}

interface PageProps {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  photos: string | File | File[];
  videos: string | File | File[];
  setPhotos: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  setVideos: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  websiteurl: string;
  setwebsiteurl: (websiteurl: string) => void;
  intstagramurl: string;
  setintstagramurl: (intstagramurl: string) => void;
  Recongnition_awards: string;
  setRecongnition_awards: (Recongnition_awards: string) => void;
  advbookingperiod: string;
  setadvbookingperiod: (advbookingperiod: string) => void;
  clientTestimonials: string;
  setclientTestimonials: (clientTestimonials: string) => void;
  writtenthemeproposalafterconsultaion: boolean;
  setwrittenthemeproposalafterconsultaion: (
    writtenthemeproposalafterconsultaion: boolean,
  ) => void;
  freerevisionforinitialthemeproposal: boolean;
  setrevisionforinitialthemeproposal: (
    freerevisionforinitialthemeproposal: boolean,
  ) => void;
}
const advbookingperiodlist = [
  "Less then a week",
  "1-2 weeks",
  "More then 2 weeks",
];
const Page6: React.FC<PageProps> = ({
  handleContinue,
  setCurrentPage,
  photos,
  videos,
  setPhotos,
  setVideos,
  websiteurl,
  setwebsiteurl,
  intstagramurl,
  setintstagramurl,
  Recongnition_awards,
  setRecongnition_awards,
  advbookingperiod,
  setadvbookingperiod,
  clientTestimonials,
  setclientTestimonials,
  writtenthemeproposalafterconsultaion,
  setwrittenthemeproposalafterconsultaion,
  freerevisionforinitialthemeproposal,
  setrevisionforinitialthemeproposal,
}) => {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex items-center justify-start gap-5">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            />
            <h1 className="text-3xl font-semibold">Additional Details</h1>
          </div>

          <div className="flex min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Photos<span className="text-red-600">*</span>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="Photos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    setPhotos(newFiles);
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Videos<span className="text-red-600">*</span>
                </label>
                <p className="text-gray-500">MP4 MKV</p>
                <FileInput
                  label="Videos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    setVideos(newFiles);
                  }}
                  acceptedFileTypes="video/mp4, video/x-msvideo, .mp4, .avi"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="Photos"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setPhotos(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="Videos"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setVideos(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex min-w-full flex-col items-center gap-5 bg-white">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Client Testimonials{" "}
                </label>
                <input
                  id="Client"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setclientTestimonials(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Awards/Recognition
                </label>
                <input
                  id="Awards"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setRecongnition_awards(e.target.value)}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Instagram URL
                </label>
                <input
                  id="Instagram"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setintstagramurl(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Website URL
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => setwebsiteurl(e.target.value)}
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-start gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Advanced Booking Period<span className="text-red-600">*</span>
                </label>
                <Dropdown
                  options={advbookingperiodlist}
                  onSelect={(value: string) => setadvbookingperiod(value)}
                  placeholder="Select Your Advance Booking Period"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-6">
              <div className="flex min-w-[50%] flex-col gap-6 lg:max-w-[60%]">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you offer revisions to the initail theme Proposal?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={freerevisionforinitialthemeproposal === true}
                    onChange={() => setrevisionforinitialthemeproposal(true)}
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>

                  <input
                    type="radio"
                    checked={freerevisionforinitialthemeproposal === false}
                    onChange={() => setrevisionforinitialthemeproposal(false)}
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-6 lg:max-w-[60%]">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you Provide a written theme proposal after consultaion?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={writtenthemeproposalafterconsultaion === true}
                    onChange={() =>
                      setwrittenthemeproposalafterconsultaion(true)
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>

                  <input
                    type="radio"
                    className="h-4 w-4 accent-[#2E3192]"
                    checked={writtenthemeproposalafterconsultaion === false}
                    onChange={() =>
                      setwrittenthemeproposalafterconsultaion(false)
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              >
                Back
              </button>
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
    </div>
  );
};

export default Page6;
