"use client";

import { ArrowLeft, Info, XCircle } from "lucide-react";
import { FormState } from "../page";
import FileInput from "@/components/fileInput";
import { useEffect } from "react";
import Dropdown from "../../(components)/Dropdown";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Page6 = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage,
}: Page6Props) => {
  const {
    tastingSessions,
    businessLicenses,
    foodSafety,
    portfolio,
    photos,
    videos,
  } = formState;

  const _minorder = [
    "Less than 50 persons",
    "50-100 persons",
    "100-300 persons",
    "300-400 persons",
    "More than 500 ",
  ];

  const _advbooking = ["Less than a week", "1-2 weeks", "More than 2 weeks"];

  const handlePhotoChange = (files: File | File[]) => {
    const filesArray = Array.isArray(files) ? files : [files];
    if (typeof formState.photos === "string") {
      updateFormState({ photos: "" });
    }
    updateFormState({
      photos: Array.isArray(formState.photos)
        ? [...formState.photos, ...filesArray]
        : filesArray,
    });
  };

  const handleVideoChange = (files: File | File[]) => {
    const filesArray = Array.isArray(files) ? files : [files]; // Ensure we always work with an array

    if (typeof formState.videos === "string") {
      updateFormState({ videos: [] });
    }

    updateFormState({
      videos: Array.isArray(formState.videos)
        ? [...formState.videos, ...filesArray]
        : filesArray,
    });
  };

  // const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   updateFormState({ photos: e.target.value });
  // };

  const handleInputClick = (photos: File[] | string) => {
    if (typeof formState.photos === "string") {
      updateFormState({ photos: [] });
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Additional Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-8">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[48%] flex-col gap-2">
                <label htmlFor="businessName" className="text-base font-medium">
                  Minimum Order Requirements
                  <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={_minorder}
                  onSelect={(option: string) => {
                    updateFormState({ minOrderReq: option });
                  }}
                  placeholder="Minimum guests required"
                />
              </div>

              <div className="flex min-w-[48%] flex-col gap-2">
                <label htmlFor="businessName" className="text-base font-medium">
                  Advance Booking Period<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={_advbooking}
                  onSelect={(option: string) => {
                    updateFormState({ AdvBooking: option });
                  }}
                  placeholder="Minimum booking notice (e.g. number of days) "
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-4 md:flex-row">
              <div className="flex min-w-[48%] flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-base font-medium">
                    Photo <span className="text-red-500">*</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.33398"
                        y="1.3335"
                        width="13.3333"
                        height="13.3333"
                        rx="6.66667"
                        stroke="#2B3F6C"
                      />
                      <path
                        d="M8.33398 11.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00065 7.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33398 5.33366L8.33398 4.66699"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-small font-light">PNG,JPG</span>

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
                          ? formState.photos
                              .map((file: File) => file.name)
                              .join(", ")
                          : (formState.photos as File)?.name
                    }
                    onChange={(e) =>
                      updateFormState({ photos: e.target.value })
                    }
                  />
                  {/* 
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-3 py-5 outline-none text-sm"
                    placeholder="Enter your portfolio links"
                    value={typeof formState.photos === 'string' ? formState.photos : ''}
                    onChange={(e) =>
                      updateFormState({ photos: e.target.value })
                    }
                    required
                  /> */}
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">
                    Tasting sessions<span className="text-red-500">*</span>{" "}
                  </p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-4">
                      <input
                        id="tastingSessionsYes"
                        type="radio"
                        name="tastingSessions"
                        value="true"
                        checked={tastingSessions === true} // Handle boolean explicitly
                        onChange={() =>
                          updateFormState({ tastingSessions: true })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsYes" className="text-sm">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        id="tastingSessionsNo"
                        type="radio"
                        name="tastingSessions"
                        value="false"
                        checked={tastingSessions === false} // Handle boolean explicitly
                        onChange={() =>
                          updateFormState({ tastingSessions: false })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsNo" className="text-sm">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">
                    Food Safety Certificates{" "}
                  </p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-4">
                      <input
                        id="foodSafetyYes"
                        type="radio"
                        name="foodSafety"
                        value="true"
                        checked={!!foodSafety}
                        onChange={() => updateFormState({ foodSafety: true })}
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="foodSafetyYes" className="text-sm">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        id="foodSafetyNo"
                        type="radio"
                        name="foodSafety"
                        value="false"
                        checked={!foodSafety}
                        onChange={() => updateFormState({ foodSafety: false })}
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="foodSafetyNo" className="text-sm">
                        No
                      </label>
                    </div>
                  </div>

                  {formState.foodSafety && (
                    <>
                      <span className="text-small font-light">PNG,JPG,PDF</span>

                      <FileInput
                        label="foodSafety"
                        onFileSelect={(file) => {
                          if (!Array.isArray(file)) {
                            updateFormState({ foodSafety: file });
                          }
                        }}
                        acceptedFileTypes="image/png, .pdf, image/jpg"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="flex min-w-[48%] flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-base font-medium">
                    Videos <span className="text-red-500">*</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.33398"
                        y="1.3335"
                        width="13.3333"
                        height="13.3333"
                        rx="6.66667"
                        stroke="#2B3F6C"
                      />
                      <path
                        d="M8.33398 11.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00065 7.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33398 5.33366L8.33398 4.66699"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-small font-light">MP4, MKV</span>
                  <FileInput
                    label="videos"
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
                    multiple
                  />
                  <span className="text-base font-medium">or Continue via</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
                    placeholder="Enter your portfolio links"
                    onChange={(e) => {
                      updateFormState({ videos: e.target.value });
                    }}
                    value={
                      typeof formState.videos === "string"
                        ? formState.videos
                        : Array.isArray(formState.videos)
                          ? formState.videos
                              .map((file: File) => file.name)
                              .join(", ")
                          : (formState.videos as File)?.name
                    }
                  />

                  {/* <FileInput
                    label="videos"
                    onFileSelect={(file) => {
                      updateFormState({ videos: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  /> */}
                  {/* <span className="text-base font-medium">or Continue via</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-3 py-5 outline-none text-sm"
                    placeholder="Enter your portfolio links"
                    onChange={(e) =>
                      updateFormState({ videos: e.target.value })
                    }
                    required
                  /> */}
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">Business Licenses</p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-4">
                      <input
                        id="businessLicenseYes"
                        type="radio"
                        name="businessLicense"
                        value="true"
                        checked={businessLicenses === true} // Explicitly check for true
                        onChange={() =>
                          updateFormState({ businessLicenses: true })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="businessLicenseYes" className="text-sm">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        id="businessLicenseNo"
                        type="radio"
                        name="businessLicense"
                        value="false"
                        checked={businessLicenses === false} // Explicitly check for false
                        onChange={() =>
                          updateFormState({ businessLicenses: false })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="businessLicenseNo" className="text-sm">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-strech flex flex-row gap-7 self-end">
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
