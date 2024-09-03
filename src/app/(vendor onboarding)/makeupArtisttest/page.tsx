"use client";

import React, { useEffect, useState } from "react";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import { add } from "date-fns";
import { addMakeUpArtist } from "@/services/vendors/makeupArtist";
import jwt from "jsonwebtoken";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  // Page-specific states
  // Page 1
  artistName: string;
  category: string;
  makeupArtists_individual: string[];
  makeupArtists_groups: string[];
  makeupArtists_organisation: string[];
  advancePayment: number;
  hourlyPackage: { type: string; priceRange: [number, number] }[];
  dealPackage: { type: string; priceRange: [number, number] }[];
  ratesbyWorker: { type: string; priceRange: [number, number] }[];
  makeupTypes: string[];
  onsiteMakeup: boolean;

  artistDescription: string;
  portfolioUrls: string | File;
  makeup_groupmembers: string;
  organisationMembers: string;
  // Page 2
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  // Page 3
  // Page 4
}

const VenueForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    artistName: "",
    artistDescription: "",
    portfolioUrls: "",
    makeup_groupmembers: "",
    organisationMembers: "",
    termsAndConditions: "",
    cancellationPolicy: "",
    category: "",
    makeupArtists_individual: [],
    makeupArtists_groups: [],
    makeupArtists_organisation: [],
    advancePayment: 25,
    hourlyPackage: [{ type: "", priceRange: [0, 0] }],
    dealPackage: [{ type: "", priceRange: [0, 0] }],
    ratesbyWorker: [{ type: "", priceRange: [0, 0] }],
    makeupTypes: [],
    onsiteMakeup: true,
  });
  const [category, setCategory] = useState("Individual");

  //page 1 varibles

  //chips state
  const [makeupArtists_individual, setMakeupArtist_individual] = useState<
    string[]
  >([]);
  const [makeupArtists_groups, setMakeupArtist_group] = useState<string[]>([]);
  const [makeupArtists_organisation, setMakeupArtist_organisation] = useState<
    string[]
  >([]);

  //page 3
  const [advancePayment, setAdvancePayment] = useState(25);

  const [hourlyPackage, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [dealPackage, setdealPackage] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [ratesbyWorker, setratesbyWorker] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const handlePackageChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => {
    setPackages((prevPackages) => {
      const newPackages = [...prevPackages];
      if (field === "type") {
        newPackages[index].type = value as string;
      } else {
        newPackages[index].priceRange = value as [number, number];
      }
      return newPackages;
    });
  };

  const addPackage = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 100000] },
    ]);
  };

  //page 4 varibales
  //chips state
  const [makeupTypes, setMakeupTypes] = useState<string[]>([]);
  const [onsiteMakeup, setOnsiteMakeup] = useState(true);

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  // Page-specific states

  const handleCategoryChange = (
    newCategory: "Individual" | "Group" | "Organisation",
  ) => {
    setCategory(newCategory);
  };

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }

    const { userId, email } = jwt.decode(token) as {
      userId: string;
      email: string;
    };
    return userId;
  }

  const handleSubmit = async () => {
    // print the formState
    console.log(formState);

    const formData = new FormData();

    formData.append("id", getVendorId()!);
    // Append form data
    formData.append("artistName", formState.artistName);
    formData.append("category", category);
    formData.append("artistDescription", formState.artistDescription);
    formData.append("portfolioUrls", formState.portfolioUrls);
    formData.append("makeup_groupmembers", formState.makeup_groupmembers);
    formData.append("organisationMembers", formState.organisationMembers);

    //page 2
    formData.append("termsAndConditions", formState.termsAndConditions);
    formData.append("cancellationPolicy", formState.cancellationPolicy);

    //page 3
    formData.append("advancePayment", advancePayment.toString());
    formData.append("hourlyPackage", JSON.stringify(hourlyPackage));
    formData.append("dealPackage", JSON.stringify(dealPackage));
    formData.append("ratesbyWorker", JSON.stringify(ratesbyWorker));

    // Page 4
    formData.append("makeupTypes", makeupTypes.join(","));
    formData.append("onsiteMakeup", onsiteMakeup ? "Yes" : "No");

    // Append form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      addMakeUpArtist(formData);
      console.log("Makeup Artist added successfully");
    } catch (error) {
      console.log(" error adding makeup artist" + error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            artistName={formState.artistName}
            category={category}
            handleCategoryChange={handleCategoryChange}
            makeupArtists_individual={makeupArtists_individual}
            setMakeupArtist_individual={setMakeupArtist_individual}
            makeupArtists_groups={makeupArtists_groups}
            setMakeupArtist_group={setMakeupArtist_group}
            makeupArtists_organisation={makeupArtists_organisation}
            setMakeupArtist_organisation={setMakeupArtist_organisation}
            portfolioUrls={formState.portfolioUrls}
          />
        );
      case 2:
        return (
          <Page2 formState={formState} updateFormState={updateFormState} />
        );
      case 3:
        return (
          <Page3
            advancePayment={advancePayment}
            setAdvancePayment={setAdvancePayment}
            hourlyPackage={hourlyPackage}
            dealPackage={dealPackage}
            ratesbyWorker={ratesbyWorker}
            setHourlyPackages={setHourlyPackages}
            setdealPackage={setdealPackage}
            setratesbyWorker={setratesbyWorker}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
          />
        );
      case 4:
        return (
          <Page4
            makeupTypes={makeupTypes}
            setMakeupTypes={setMakeupTypes}
            onsiteMakeup={onsiteMakeup}
            setOnsiteMakeup={setOnsiteMakeup}
          />
        );
      case 5:
        return (
          <Page5
            formState={formState}
            updateFormState={updateFormState}
            category={category}
            makeupArtists_individual={makeupArtists_individual}
            makeupArtists_groups={makeupArtists_groups}
            makeupArtists_organisation={makeupArtists_organisation}
            advancePayment={advancePayment}
            hourlyPackage={hourlyPackage}
            dealPackage={dealPackage}
            ratesbyWorker={ratesbyWorker}
            makeupTypes={makeupTypes}
            onsiteMakeup={onsiteMakeup}
            artistName={formState.artistName}
            organisationMembers={formState.organisationMembers}
            artistDescription={formState.artistDescription}
            portfolioUrls={formState.portfolioUrls}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return (
          <Page1
            formState={formState}
            updateFormState={updateFormState}
            artistName={formState.artistName}
            category={category}
            handleCategoryChange={handleCategoryChange}
            makeupArtists_individual={makeupArtists_individual}
            setMakeupArtist_individual={setMakeupArtist_individual}
            makeupArtists_groups={makeupArtists_groups}
            setMakeupArtist_group={setMakeupArtist_group}
            makeupArtists_organisation={makeupArtists_organisation}
            setMakeupArtist_organisation={setMakeupArtist_organisation}
            portfolioUrls={formState.portfolioUrls}
          />
        );
    }
  };

  return (
    <div>
      {renderPage()}
      <div className="my-9 mr-[5%] flex flex-row justify-end gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 5 && (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default VenueForm;
