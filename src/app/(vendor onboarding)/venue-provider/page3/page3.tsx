"use client";

import FileInput from "@/components/fileInput";
import Dropdown from "../../(components)/Dropdown";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { fetchVenueData, saveVenueDetails } from "@/redux/venue-providerSlice";
import jwt from "jsonwebtoken";

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
  "Less than a week",
  "1-2 weeks",
  "More than 2 weeks",
];

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector(
    (state: RootState) => state["venue-provider"],
  );

  useEffect(() => {
    const userId = getVendorId();
    if (userId) {
      dispatch(fetchVenueData(userId));
    }
  }, [dispatch]);

  // Update form state based on fetched data
  useEffect(() => {
    if (formData) {
      updateFormState({
        termsConditions: formData.termsConditions || [],
        cancellationPolicy: formData.cancellationPolicy || [],
        photos: formData.photos || [],
        videos: formData.videos || [],
        instagramURL: formData.instagramURL || "",
        websiteURL: formData.websiteURL || "",
        awards: formData.awards || "",
        clientTestimonials: formData.clientTestimonials || "",
        advanceBookingPeriod: formData.advanceBookingPeriod || "",
      });
    }
  }, [formData]);

  const handleSave = () => {
    const userId = getVendorId() || "";
    const venueDetails = {
      userId,
      termsConditions: formState.termsConditions || "",
      cancellationPolicy: formState.cancellationPolicy || "",
      photos: formState.photos || [],
      videos: formState.videos || [],
      instagramURL: formState.instagramURL || "",
      websiteURL: formState.websiteURL || "",
      awards: formState.awards || "",
      clientTestimonials: formState.clientTestimonials || "",
      advanceBookingPeriod: formState.advanceBookingPeriod || "",
    };

    dispatch(saveVenueDetails({ userId, data: venueDetails }) as any);
  };

  const [isFormValid, setIsFormValid] = useState(true);

  const onContinue = () => {
    console.log("the current formState", formState);

    handleSave();
    handleContinue();
  };

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
      };
      return decodedToken?.userId || null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 scrollbar-hide xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Additional Details </h1>

      <div className="flex w-full flex-col">
        <div className="grid grid-cols-2 gap-10">
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
            <span className="text-base font-medium">or Continue via</span>
            <input
              type="text"
              className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
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
                    ? formState.videos.map((file: File) => file.name).join(", ")
                    : (formState.videos as File)?.name
              }
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-10">
          <div>
            <h2 className="mb-2 text-base font-medium">Awards/Recognition</h2>
            <input
              type="text"
              className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
              placeholder="Provide your URL"
              value={formState.awards}
              onChange={(e) => updateFormState({ awards: e.target.value })}
            />
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium">Client Testimonials</h2>
            <input
              type="text"
              className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
              placeholder="Provide your URL"
              value={formState.clientTestimonials}
              onChange={(e) =>
                updateFormState({ clientTestimonials: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-10">
          <div>
            <h2 className="mb-2 text-base font-medium">Instagram URL</h2>
            <input
              type="text"
              className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
              placeholder="Provide your Instagram URL for the Venue"
              value={formState.instagramURL}
              onChange={(e) =>
                updateFormState({ instagramURL: e.target.value })
              }
            />
          </div>
          <div>
            <h2 className="mb-2 text-base font-medium">Website URL</h2>
            <input
              type="text"
              className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
              placeholder="Provide your website URL for the venue"
              value={formState.websiteURL}
              onChange={(e) => updateFormState({ websiteURL: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-10">
          <div>
            <h2 className="mb-2 text-base font-medium">
              Advance Booking Period<span className="text-red-600">*</span>
            </h2>
            <Dropdown
              options={advanceBookingPeriodOptions}
              onSelect={(value) =>
                updateFormState({ advanceBookingPeriod: value })
              }
              placeholder="Select Advance Booking Period"
              selectedOption={formState.advanceBookingPeriod}
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
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page3;
