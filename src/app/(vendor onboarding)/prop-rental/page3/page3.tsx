"use client";

import StepBar from "@/app/(components)/stepBar";
import Appetizers from "../../(components)/Appetizers";
import { SetStateAction, useState } from "react";
import FileInput from "@/components/fileInput";
import { ArrowLeft } from "lucide-react";
import { FormState } from "../page";

const _typesOfEvents = [
  "Anniversary Celebration ",
  "Birthday Party ",
  "Corporate Event ",
  "Cultural Events",
  "Wedding Events",
  "Seasonal Parties",
  "Others",
];
const furnitureOptions = [
  "Chair",
  "Sofa and Couches",
  "Dining Tables",
  "Cocktail and Bar Tables",
  "Coffee Tables",
  "Side Tables",
  "Console Tables",
  "Others",
];

const DecorOptions = [
  "Stage and Platforms",
  "Backdrop frames and Panels",
  "Display Units",
  "Partition walls and Dividers",
  "Lighting fixtures",
  "Lamps",
  "Artificial items",
  "Carpet and Rugs",
  "Others",
];
const _tentAndCanopy = [
  "Tent and Canopy",
  "Marquee Tents",
  "Pagoda Tents",
  "Pole Tents",
  "Frame Tents",
  "Event Specific Tent",
  "Pop-Up Canopies",
  "Garden Canopies",
  "Event Canopies",
  "Gazebos",
  "Shade Structures",
  "Temporary Structures",
  "Others",
];
const _audioEquipments = [
  "Speakers",
  "Microphones",
  "Mixing Consoles",
  "Amplifiers",
  "Signal Processors",
  "Cables and Accessories",
  "Playback Equipment",
  "DJ Equipment",
  "Audio Interfaces",
  "In-Ear Monitoring Systems",
  "Portable PA Systems",
  "Recording Equipment",
  "Conference and Meeting Equipment",
  "Lighting and Effects",
  "Others",
];
const _visualEquipments = [
  "Projectors",
  "Screens",
  "LED Displays",
  "TV Screens",
  "Video Wall",
  "Video Cameras",
  "Playback and Recording Equipment",
  "Camera Accessories",
  "Video Switchers and Mixers",
  "Visual Effects",
  "Signal Distribution",
  "Interactive Displays",
  "Presentation Aids",
  "Virtual Reality (VR) Equipment",
  "Augmented Reality (AR) Equipment",
  "Others",
];
const _lightEquipments = [
  "Traditional Indian Tents",
  "Marquee Tents",
  "Pagoda Tents",
  "Pole Tents",
  "Frame Tents",
  "Event Specific Tent",
  "Pop-Up Canopies",
  "Garden Canopies",
  "Event Canopies",
  "Gazebos",
  "Shade Structures",
  "Temporary Structures",
  "Others",
];

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

interface formState {
  furnitureAndDecorListUrl: string | File;
  tentAndCanopyListUrl: string | File;
  audioVisualListUrl: string | File;
  photos: string | File | File[];
  videos: string | File | File[];
  awardsAndRecognize: string;
  instaUrl: string;
  websiteUrl: string;
  clientTestimonial: string;
  termsAndConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  handleChange: (key: string, value: any) => void;
}

type page3Props = {
  selectedFurnitureEvents: string[];
  setselectedFurnitureEvents: (value: SetStateAction<string[]>) => void;
  selectedTentEvents: string[];
  setselectedTentEvents: (value: SetStateAction<string[]>) => void;
  selectedAudioEvents: string[];
  setselectedAudioEvents: (value: SetStateAction<string[]>) => void;

  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedFurniture: string[];
  setSelectedFurniture: (value: SetStateAction<string[]>) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  formState: FormState;
  selectedTentOptions: string[];
  setSelectedTentOptions: React.Dispatch<SetStateAction<string[]>>;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  handleChange: (key: string, value: any) => void;

  updateFormState: (newState: Partial<FormState>) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Page3({
  selectedCategory,
  selectedFurnitureEvents,
  selectedTentEvents,
  selectedAudioEvents,
  setselectedFurnitureEvents,
  setselectedAudioEvents,
  setselectedTentEvents,
  setSelectedCategory,

  selectedFurniture,
  setSelectedFurniture,
  selectedDecor,
  setSelectedDecor,
  selectedTentOptions,
  setSelectedTentOptions,
  selectedLightOptions,
  setSelectedLightOptions,
  selectedAudioOptions,
  setSelectedAudioOptions,
  selectedvisualOptions,
  setSelectedVisualOptions,
  handleChange,
  formState,

  updateFormState,
  currentPage,
  setCurrentPage,
}: page3Props) {
  const [formPage, setFormPage] = useState(1);
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Menu Details</h1>
          </div>
          <div className="flex space-x-4 overflow-hidden rounded-full border border-[#2E3192] p-4">
            <button
              onClick={() => {
                setSelectedCategory("Furniture & Decor");
                handleCategorySelection("Furniture & Decor");
              }}
              className={`rounded-full px-4 py-2 text-[#2E3192] ${
                selectedCategory === "Furniture & Decor"
                  ? "bg-[#2E3192] text-white"
                  : ""
              }`}
            >
              Furniture & Decor
            </button>
            <button
              onClick={() => {
                setSelectedCategory("Tent and Canopy");
                handleCategorySelection("Tent and Canopy");
              }}
              className={`rounded-full px-4 py-2 text-[#2E3192] ${
                selectedCategory === "Tent and Canopy"
                  ? "bg-[#2E3192] text-white"
                  : ""
              }`}
            >
              Tent and Canopy
            </button>
            <button
              onClick={() => {
                setSelectedCategory("Audio-Visual");
                handleCategorySelection("Audio-Visual");
              }}
              className={`rounded-full px-4 py-2 text-[#2E3192] ${
                selectedCategory === "Audio-Visual"
                  ? "bg-[#2E3192] text-white"
                  : ""
              }`}
            >
              Audio-Visual
            </button>
          </div>
        </div>

        {selectedCategory === "Furniture & Decor" && (
          <div className="flex min-w-full flex-col items-start justify-around gap-10">
            <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-h-full min-w-full flex-col gap-5">
                <h1 className="text-2xl font-semibold">
                  Furniture & Decor Rentals
                </h1>
                <div className="flex min-w-[40%] flex-col">
                  <label className="text-base font-medium" htmlFor="category">
                    Upload list
                  </label>
                  <p className="text-xs font-light text-gray-500">
                    PNG, PDF, JPG
                  </p>
                  <FileInput
                    label="furniture and decor list"
                    onFileSelect={(file) => {
                      if (!Array.isArray(file)) {
                        updateFormState({ furnitureAndDecorListUrl: file });
                      }
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Types of Event</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"furniture_types_of_events"}
                  appetizers={_typesOfEvents}
                  selectedAppetizers={selectedFurnitureEvents}
                  setSelectedAppetizers={setselectedFurnitureEvents}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Furniture</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"furniture_options"}
                  appetizers={furnitureOptions}
                  selectedAppetizers={selectedFurniture}
                  setSelectedAppetizers={setSelectedFurniture}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Decor</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"decor_options"}
                  appetizers={DecorOptions}
                  selectedAppetizers={selectedDecor}
                  setSelectedAppetizers={setSelectedDecor}
                />
              </div>
            </div>
          </div>
        )}

        {selectedCategory === "Tent and Canopy" && (
          <>
            <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-h-full min-w-full flex-col gap-5">
                <h1 className="text-2xl font-semibold">
                  Tent and Canopy Rentals
                </h1>
                <div className="flex min-w-[40%] flex-col">
                  <label className="text-base font-medium" htmlFor="category">
                    Upload list
                  </label>
                  <p className="text-xs font-light text-gray-500">
                    PNG, PDF, JPG
                  </p>
                  <FileInput
                    label="furniture and decor list"
                    onFileSelect={(file) => {
                      if (!Array.isArray(file)) {
                        updateFormState({ tentAndCanopyListUrl: file });
                      }
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Types of Event</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"tent_types_of_events"}
                  appetizers={_typesOfEvents}
                  selectedAppetizers={selectedTentEvents}
                  setSelectedAppetizers={setselectedTentEvents}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Tent and Canopy</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"tent_and_canopy"}
                  appetizers={_tentAndCanopy}
                  selectedAppetizers={selectedTentOptions}
                  setSelectedAppetizers={setSelectedTentOptions}
                />
              </div>
            </div>
          </>
        )}

        {selectedCategory === "Audio-Visual" && (
          <>
            <div className="flex min-w-full flex-col items-start justify-around gap-6 rounded-xl bg-white p-3 md:p-6">
              <div className="flex min-h-full min-w-full flex-col gap-5">
                <h1 className="text-2xl font-semibold">Audio-Visual Rentals</h1>
                <div className="flex min-w-[40%] flex-col">
                  <label className="text-base font-medium" htmlFor="category">
                    Upload list
                  </label>
                  <p className="text-xs font-light text-gray-500">
                    PNG, PDF, JPG
                  </p>
                  <FileInput
                    label="furniture and decor list"
                    onFileSelect={(file) => {
                      if (!Array.isArray(file)) {
                        updateFormState({ audioVisualListUrl: file });
                      }
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Types of Event</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"audio_types_of_events"}
                  appetizers={_typesOfEvents}
                  selectedAppetizers={selectedAudioEvents}
                  setSelectedAppetizers={setselectedAudioEvents}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Audio Equipment</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"audio_equipments"}
                  appetizers={_audioEquipments}
                  selectedAppetizers={selectedAudioOptions}
                  setSelectedAppetizers={setSelectedAudioOptions}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Visual Equipment</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"visual_equipment"}
                  appetizers={_visualEquipments}
                  selectedAppetizers={selectedvisualOptions}
                  setSelectedAppetizers={setSelectedVisualOptions}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-xl font-semibold">Light Equipment</h1>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  field={"light_equipments"}
                  appetizers={_lightEquipments}
                  selectedAppetizers={selectedLightOptions}
                  setSelectedAppetizers={setSelectedLightOptions}
                />
              </div>
            </div>
          </>
        )}
        <div className="flex min-w-full flex-col gap-8 rounded-xl bg-white p-3 md:p-6">
          <h1 className="text-2xl font-semibold">Additional Details</h1>

          <div className="flex min-w-full flex-col items-start justify-between gap-6 md:flex-row">
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
                <span className="text-base font-medium">or Continue via</span>
                <input
                  type="text"
                  name="photos"
                  className="w-full rounded-xl border-2 bg-white p-3 py-5 text-sm outline-none"
                  placeholder="Enter your portfolio links"
                  onChange={(e) => {
                    updateFormState({ photos: e.target.value });
                  }}
                  value={
                    typeof formState.photos === "string"
                      ? formState.photos
                      : Array.isArray(formState.photos)
                        ? formState.photos
                            .map((file: File) => file.name)
                            .join(", ")
                        : (formState.photos as File)?.name
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium" htmlFor="vendorName">
                  Award and Recognization
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.awardsAndRecognize || ""}
                  onChange={(e) =>
                    handleChange("awardsAndRecognize", e.target.value)
                  }
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Provide your URL"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium" htmlFor="vendorName">
                  Instagram
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.instaUrl || ""}
                  onChange={(e) => handleChange("instaUrl", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Provide your Instagram URL for the Venue"
                />
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
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium" htmlFor="vendorName">
                  Client Testimonials
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.clientTestimonial || ""}
                  onChange={(e) =>
                    handleChange("clientTestimonial", e.target.value)
                  }
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Provide your URL"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium" htmlFor="vendorName">
                  Website URL
                </label>
                <input
                  id="vendorName"
                  type="text"
                  value={formState.websiteUrl || ""}
                  onChange={(e) => handleChange("websiteUrl", e.target.value)}
                  className="w-full rounded-xl border-2 bg-white p-4 outline-none"
                  placeholder="Provide your Website URL for the Venue"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-full flex-col gap-8 rounded-xl bg-white p-3 md:p-6">
          <h1 className="text-2xl font-semibold">Policies</h1>

          <div className="flex min-w-full flex-col items-start justify-between gap-6 md:flex-row">
            <div className="flex min-w-[48%] flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-base font-medium">
                  Terms & Conditions{" "}
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
                <span className="text-small font-light">PNG,JPG,PDF</span>

                <FileInput
                  label="tnc"
                  onFileSelect={(file) => {
                    updateFormState({ termsAndConditions: file });
                  }}
                  multiple={false}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
                <p className="text-base font-medium">or Provide Via</p>
                <textarea
                  cols={10}
                  rows={5}
                  placeholder="Enter your venue details"
                  onChange={(e) =>
                    updateFormState({ termsAndConditions: e.target.value })
                  }
                  value={
                    typeof formState.termsAndConditions === "string"
                      ? formState.termsAndConditions
                      : Array.isArray(formState.termsAndConditions)
                        ? formState.termsAndConditions
                            .map((file: File) => file.name)
                            .join(", ")
                        : (formState.termsAndConditions as File)?.name
                  }
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                ></textarea>
              </div>
            </div>
            <div className="flex min-w-[48%] flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 text-base font-medium">
                  Cancellation Policies{" "}
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
                <span className="text-small font-light">PNG,JPG,PDF</span>

                <FileInput
                  label="cancellation_policy"
                  onFileSelect={(file) => {
                    updateFormState({ cancellationPolicy: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
                <p className="text-base font-medium">or Provide Via</p>
                <textarea
                  cols={30}
                  rows={5}
                  placeholder="Enter your venue details"
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  value={
                    typeof formState.cancellationPolicy === "string"
                      ? formState.cancellationPolicy
                      : Array.isArray(formState.cancellationPolicy)
                        ? formState.cancellationPolicy
                            .map((file: File) => file.name)
                            .join(", ")
                        : (formState.cancellationPolicy as File)?.name
                  }
                ></textarea>
              </div>
              <div className="items-strech flex flex-row gap-7 self-end">
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={() => {
                    console.log(
                      formState.furnitureAndDecorListUrl,
                      formState.termsAndConditions,
                      formState.clientTestimonial,
                      formState.photos,
                      formState.videos,
                    );
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
