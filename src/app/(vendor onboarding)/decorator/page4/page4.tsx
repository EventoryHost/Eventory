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
  writtenthemeproposalafterconsultaion: boolean | null;
  revisionforinitialthemeproposal: boolean | null;
}

interface Page6Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}
const advbookingperiodlist = [
  "Less then a week",
  "1-2 weeks",
  "More then 2 weeks",
];
const Page6: React.FC<Page6Props> = ({
  formState,
  updateFormState,
  handleContinue,
  setCurrentPage,
}) => {
  const {
    photos,
    videos,
    websiteurl,
    intstagramurl,
    clientTestimonials,
    Recongnition_awards,
    advbookingperiod,
    writtenthemeproposalafterconsultaion,
    revisionforinitialthemeproposal,
  } = formState;

  const handledropdownadvbookingperiod = (value: string) => {
    updateFormState({ advbookingperiod: value });
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
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
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Photos<span className="text-red-600">*</span>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="Photos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ photos: newFiles });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Videos<span className="text-red-600">*</span>
                </label>
                <p className="text-gray-500">MP4 MKV</p>
                <FileInput
                  label="Videos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ videos: newFiles });
                  }}
                  acceptedFileTypes="video/mp4, video/x-msvideo, .mp4, .avi"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => updateFormState({ photos: e.target.value })}
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) => updateFormState({ videos: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex min-w-full flex-col items-center gap-5 bg-white">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Client Testimonials{" "}
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) =>
                    updateFormState({ clientTestimonials: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Awards/Recognition
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) =>
                    updateFormState({ Recongnition_awards: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Instagram URL
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) =>
                    updateFormState({ intstagramurl: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Website URL
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Provide Your URL"
                  onChange={(e) =>
                    updateFormState({ websiteurl: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-start gap-2">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Advanced Booking Period<span className="text-red-600">*</span>
                </label>
                <Dropdown
                  options={advbookingperiodlist}
                  onSelect={(value: string) =>
                    handledropdownadvbookingperiod(value)
                  }
                  placeholder="Select Your Advance Booking Period"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-center justify-between gap-4">
              <div className="flex max-w-[45%] flex-col gap-6">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you offer revisions to the initail theme Proposal?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={revisionforinitialthemeproposal === true}
                    onChange={() =>
                      updateFormState({ revisionforinitialthemeproposal: true })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>

                  <input
                    type="radio"
                    checked={revisionforinitialthemeproposal === false}
                    onChange={() =>
                      updateFormState({
                        revisionforinitialthemeproposal: false,
                      })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex max-w-[45%] flex-col gap-6">
                <label className="text-base font-medium" htmlFor="businessName">
                  Do you Provide a written theme proposal after consultaion?
                </label>
                <div className="flex flex-row items-center justify-start gap-4">
                  <input
                    type="radio"
                    checked={writtenthemeproposalafterconsultaion === true}
                    onChange={() =>
                      updateFormState({
                        writtenthemeproposalafterconsultaion: true,
                      })
                    }
                    className="h-4 w-4 accent-[#2E3192]"
                  />
                  <p>Yes</p>

                  <input
                    type="radio"
                    className="h-4 w-4 accent-[#2E3192]"
                    checked={writtenthemeproposalafterconsultaion === false}
                    onChange={() =>
                      updateFormState({
                        writtenthemeproposalafterconsultaion: false,
                      })
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
