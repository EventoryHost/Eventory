"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";
import { ArrowUpSquare, Upload } from "lucide-react";
import Appetizers from "../(components)/Appetizers";

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

const Page: React.FC = ({}) => {
  const [category, setCategory] = useState<
    "Individual" | "Group" | "Organisation"
  >("Individual");

  //
  const [artistDescription, setartistDescription] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");

  //
  const [makeup_groupmembers, setmakeupGroupMembers] = useState("");

  //organisation state
  const [organisationMembers, setOrganisationMembers] = useState("");

  //chips state
  const [makeupArtists_individual, setMakeupArtist_individual] = useState<
    string[]
  >([]);
  const [makeupArtists_groups, setMakeupArtist_group] = useState<string[]>([]);
  const [makeupArtists_organisation, setMakeupArtist_organisation] = useState<
    string[]
  >([]);

  const handleCategoryChange = (
    newCategory: "Individual" | "Group" | "Organisation",
  ) => {
    setCategory(newCategory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Handle form submission
    e.preventDefault();
    console.log("Category:", category);
    console.log("Artist Description:", artistDescription);
    if (portfolioUrl) console.log("Portfolio URL:", portfolioUrl);
    if (organisationMembers)
      console.log("Organisation Members:", organisationMembers);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex flex-col gap-9 md:flex-row">
            <div>
              <h1 className="text-3xl font-semibold">Basic Details</h1>
            </div>
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
            <div>
              {/* Special content for Individual category */}

              <div className="item-start flex min-w-full flex-col justify-between gap-5 md:flex-row">
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
                    onChange={(e) => setartistDescription(e.target.value)}
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <div className="flex min-w-full flex-col items-start justify-between gap-2">
                    <p className="text-xl font-semibold">
                      Portfolio of past work
                    </p>
                    <p className="text-gray-500">PNG, PDF, JPG</p>
                    <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                      {" "}
                      <Upload />
                      Upload
                    </button>
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
                      placeholder="Enter your Venue Description"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {category === "Group" && (
            <div>
              {/* Special content for Group category */}
              <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Group members</label>
                    <Combobox
                      options={_groupMembers}
                      placeholder="Select your category"
                      setFunction={setmakeupGroupMembers}
                      className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    {/* <label htmlFor="category">Seating Capacity</label> */}
                    <div className="flex min-w-full flex-col items-start justify-between gap-2">
                      <label htmlFor="category">Portfolio of past work</label>
                      <p className="text-gray-500">PNG, PDF, JPG</p>
                      <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                        {" "}
                        <Upload />
                        Upload
                      </button>
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
                      onChange={(e) => setartistDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Or continue via</label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="portfolio url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {category === "Organisation" && (
            <div>
              {/* Special content for Organisation category */}
              <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Company members</label>
                    <Combobox
                      options={_groupMembers}
                      placeholder="Select your category"
                      setFunction={setOrganisationMembers}
                      className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    {/* <label htmlFor="category">Seating Capacity</label> */}
                    <div className="flex min-w-full flex-col items-start justify-between gap-2">
                      <label htmlFor="category">Portfolio of past work</label>
                      <p className="text-gray-500">PNG, PDF, JPG</p>
                      <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                        {" "}
                        <Upload />
                        Upload
                      </button>
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
                      onChange={(e) => setartistDescription(e.target.value)}
                    />
                  </div>
                  <div className="flex min-w-[40%] flex-col gap-4">
                    <label htmlFor="category">Or continue via</label>
                    <input
                      id="businessName"
                      type="text"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="portfolio url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {category === "Individual" && (
          <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <h1 className="text-3xl font-semibold">
              Which Type(s) of make up artist you are ?
            </h1>
            <div className="flex min-h-full min-w-full flex-col items-center gap-5">
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <Appetizers
                  appetizers={_makeupArtists_individual}
                  selectedAppetizers={makeupArtists_individual}
                  setSelectedAppetizers={setMakeupArtist_individual}
                />
              </div>
              <div className="items-strech mt-9 flex flex-row gap-7 self-end">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Skip
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
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
                  appetizers={_makeupArtists_groups}
                  selectedAppetizers={makeupArtists_groups}
                  setSelectedAppetizers={setMakeupArtist_group}
                />
              </div>
              <div className="items-strech mt-9 flex flex-row gap-7 self-end">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Skip
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
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
                  appetizers={_makeupArtists_organisation}
                  selectedAppetizers={makeupArtists_organisation}
                  setSelectedAppetizers={setMakeupArtist_organisation}
                />
              </div>
              <div className="items-strech mt-9 flex flex-row gap-7 self-end">
                <button
                  className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Skip
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
