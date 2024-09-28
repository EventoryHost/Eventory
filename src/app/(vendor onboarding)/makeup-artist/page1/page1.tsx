"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";
import { ArrowUpSquare, Upload } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";
import { set } from "date-fns";
import FileInput from "@/components/fileInput";

const _makeupArtists_individual = [
  "Airbrush Makeup Artists",
  "Body Paint Artists",
  "Bridal Makeup Artists",
  "Celebrity Makeup Artists",
  "Commercial Makeup Artists",
  "Editorial Makeup Artists",
  "Freelance Makeup Artists",
  "Glamour Makeup Artists",
  "Hairstyle Makeup Artists",
  "Special Effects (SFX) Makeup Artists",
  "Theatrical Makeup Artists",
  "Others",
];
const _makeupArtists_groups = [
  "Airbrush Makeup Artists",
  "Body Paint Artists",
  "Bridal Makeup Artists",
  "Celebrity Makeup Artists",
  "Commercial Makeup Artists",
  "Editorial Makeup Artists",
  "Freelance Makeup Artists",
  "Glamour Makeup Artists",
  "Hairstyle Makeup Artists",
  "Special Effects (SFX) Makeup Artists",
  "Theatrical Makeup Artists",
  "Others",
];

const _makeupArtists_organisation = [
  "Airbrush Makeup Artists",
  "Body Paint Artists",
  "Bridal Makeup Artists",
  "Celebrity Makeup Artists",
  "Commercial Makeup Artists",
  "Editorial Makeup Artists",
  "Freelance Makeup Artists",
  "Glamour Makeup Artists",
  "Hairstyling Makeup Artists", // Assuming misspelling in the image
  "Special Effects (SFX) Makeup Artists",
  "Theatrical Makeup Artists",
  "Others",
];

const _groupMembers = [
  { value: "0-2", label: "0-2 Members" },
  { value: "2-4", label: "2-4 Members" },
  { value: "4-7", label: "4-7 Members" },
  { value: "7-10", label: "7-10 Members" },
  { value: "10+", label: "more than 10" },
];

interface FormState {
  artistName: string;
  artistDescription: string;
  portfolioUrls: string | File | File[];
  makeup_groupmembers: string;
  organisationMembers: string;
}

interface Page1Props {
  handleContinue: () => void;

  formState: FormState;
  portfolioUrls: string | File | File[];
  updateFormState: (newState: Partial<FormState>) => void;
  artistName: string;
  category: string;
  handleCategoryChange: (
    newCategory: "Individual" | "Group" | "Organisation",
  ) => void;
  makeupArtists_individual: string[];
  setMakeupArtist_individual: React.Dispatch<React.SetStateAction<string[]>>;
  makeupArtists_groups: string[];
  setMakeupArtist_group: React.Dispatch<React.SetStateAction<string[]>>;
  makeupArtists_organisation: string[];
  setMakeupArtist_organisation: React.Dispatch<React.SetStateAction<string[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Page: React.FC<Page1Props> = ({
  formState,
  updateFormState,
  artistName,
  category,
  handleCategoryChange,
  makeupArtists_individual,
  setMakeupArtist_individual,
  makeupArtists_groups,
  setMakeupArtist_group,
  makeupArtists_organisation,
  setMakeupArtist_organisation,
  handleContinue,
  currentPage,
  setCurrentPage,
}) => {
  const { artistDescription, portfolioUrls } = formState;

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex min-w-full flex-col items-start justify-around gap-10 rounded-xl bg-white p-3 md:p-6">
          <div className="flex gap-6">
            <h1 className="text-3xl font-semibold">Basic Details</h1>

            <div className="flex flex-row gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={category === "Individual"}
                  onChange={() => handleCategoryChange("Individual")}
                />
                <p className="text-gray-500">Individual</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={category === "Group"}
                  onChange={() => handleCategoryChange("Group")}
                />
                <p className="text-gray-500">Group</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={category === "Organisation"}
                  onChange={() => handleCategoryChange("Organisation")}
                />
                <p className="text-gray-500">Organisation</p>
              </div>
            </div>
          </div>

          {category === "Individual" && (
            <>
              <div className="item-start flex min-w-full flex-col justify-between gap-4 md:flex-row">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label
                    className="text-xl font-semibold"
                    htmlFor="businessName"
                  >
                    Description about your background
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Enter your Venue Description"
                    value={artistDescription}
                    onChange={(e) =>
                      updateFormState({ artistDescription: e.target.value })
                    }
                  />

                  {/* Make a label and input box for artist name */}
                  <label
                    className="text-xl font-semibold"
                    htmlFor="businessName"
                  >
                    Artist Name
                  </label>
                  <input
                    id="artistName"
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Enter your Venue Description"
                    value={artistName}
                    onChange={(e) =>
                      updateFormState({ artistName: e.target.value })
                    }
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <div className="flex min-w-full flex-col items-start justify-between gap-2">
                    <p className="text-xl font-semibold">
                      Portfolio of past work
                    </p>
                    <p className="text-gray-500">PNG, PDF, JPG</p>
                    <FileInput
                      label="Photos"
                      multiple={true}
                      onFileSelect={(files) => {
                        // Determine existing photos from the previous state
                        const existingPhotos = Array.isArray(
                          formState.portfolioUrls,
                        )
                          ? formState.portfolioUrls
                          : formState.portfolioUrls instanceof File
                            ? [formState.portfolioUrls]
                            : [];

                        // Create the new photos array by combining existing and newly selected files
                        const newPhotos = [
                          ...existingPhotos,
                          ...(Array.isArray(files) ? files : [files]),
                        ];

                        // Update the form state with the new photos array
                        updateFormState({ portfolioUrls: newPhotos });
                      }}
                      acceptedFileTypes="image/png, .pdf, image/jpg"
                    />
                  </div>

                  <div className="">
                    <label
                      className="text-xl font-semibold"
                      htmlFor="businessName"
                    >
                      or continue via
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Enter URL"
                      value={
                        typeof formState.portfolioUrls === "string"
                          ? formState.portfolioUrls
                          : Array.isArray(formState.portfolioUrls)
                            ? formState.portfolioUrls
                                .map((file: File) => file.name)
                                .join(", ")
                            : (formState.portfolioUrls as File)?.name
                      }
                      onChange={(e) =>
                        updateFormState({ portfolioUrls: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {category === "Group" && (
            <>
              {/* Special content for Group category */}
              <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Group members</label>
                    <Combobox
                      options={_groupMembers}
                      placeholder="Select your category"
                      setFunction={(value) =>
                        updateFormState({ makeup_groupmembers: value })
                      }
                      className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    {/* <label htmlFor="category">Seating Capacity</label> */}
                    <div className="flex min-w-full flex-col items-start justify-between gap-2">
                      <label htmlFor="category">Portfolio of past work</label>
                      <p className="text-gray-500">PNG, PDF, JPG</p>
                      <FileInput
                        label="Photos"
                        multiple={true}
                        onFileSelect={(files) => {
                          // Determine existing photos from the previous state
                          const existingPhotos = Array.isArray(
                            formState.portfolioUrls,
                          )
                            ? formState.portfolioUrls
                            : formState.portfolioUrls instanceof File
                              ? [formState.portfolioUrls]
                              : [];

                          // Create the new photos array by combining existing and newly selected files
                          const newPhotos = [
                            ...existingPhotos,
                            ...(Array.isArray(files) ? files : [files]),
                          ];

                          // Update the form state with the new photos array
                          updateFormState({ portfolioUrls: newPhotos });
                        }}
                        acceptedFileTypes="image/png, .pdf, image/jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">
                      Description about your group
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Description about your group"
                      value={artistDescription}
                      onChange={(e) =>
                        updateFormState({ artistDescription: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Or continue via</label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="portfolio url"
                      value={
                        typeof formState.portfolioUrls === "string"
                          ? formState.portfolioUrls
                          : Array.isArray(formState.portfolioUrls)
                            ? formState.portfolioUrls
                                .map((file: File) => file.name)
                                .join(", ")
                            : (formState.portfolioUrls as File)?.name
                      }
                      onChange={(e) =>
                        updateFormState({ portfolioUrls: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {category === "Organisation" && (
            <>
              {/* Special content for Organisation category */}
              <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Company members</label>
                    <Combobox
                      options={_groupMembers}
                      placeholder="Select your category"
                      setFunction={(value) =>
                        updateFormState({ organisationMembers: value })
                      }
                      className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    {/* <label htmlFor="category">Seating Capacity</label> */}
                    <div className="flex min-w-full flex-col items-start justify-between gap-2">
                      <label htmlFor="category">Portfolio of past work</label>
                      <p className="text-gray-500">PNG, PDF, JPG</p>
                      <FileInput
                        label="Photos"
                        multiple={true}
                        onFileSelect={(files) => {
                          // Determine existing photos from the previous state
                          const existingPhotos = Array.isArray(
                            formState.portfolioUrls,
                          )
                            ? formState.portfolioUrls
                            : formState.portfolioUrls instanceof File
                              ? [formState.portfolioUrls]
                              : [];

                          // Create the new photos array by combining existing and newly selected files
                          const newPhotos = [
                            ...existingPhotos,
                            ...(Array.isArray(files) ? files : [files]),
                          ];

                          // Update the form state with the new photos array
                          updateFormState({ portfolioUrls: newPhotos });
                        }}
                        acceptedFileTypes="image/png, .pdf, image/jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">
                      Description about your comapny
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Description about your group"
                      value={artistDescription}
                      onChange={(e) =>
                        updateFormState({ artistDescription: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Or continue via</label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="portfolio url"
                      value={
                        typeof formState.portfolioUrls === "string"
                          ? formState.portfolioUrls
                          : Array.isArray(formState.portfolioUrls)
                            ? formState.portfolioUrls
                                .map((file: File) => file.name)
                                .join(", ")
                            : (formState.portfolioUrls as File)?.name
                      }
                      onChange={(e) =>
                        updateFormState({ portfolioUrls: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {category === "Individual" && (
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Which Type(s) of make up artist you are ?
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_makeupArtists_individual"}
                appetizers={_makeupArtists_individual}
                selectedAppetizers={makeupArtists_individual}
                setSelectedAppetizers={setMakeupArtist_individual}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {category === "Group" && (
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Which Type(s) of make up artist your Group includes ?
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_makeupArtists_groups"}
                appetizers={_makeupArtists_groups}
                selectedAppetizers={makeupArtists_groups}
                setSelectedAppetizers={setMakeupArtist_group}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {category === "Organisation" && (
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Which Type(s) of make up artist your Organization contain ?
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_makeupArtists_organisation"}
                appetizers={_makeupArtists_organisation}
                selectedAppetizers={makeupArtists_organisation}
                setSelectedAppetizers={setMakeupArtist_organisation}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
