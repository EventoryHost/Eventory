"use client";

import React, { useState } from "react";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import { set } from "date-fns";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  
  // Page-specific states
  // Page 1
  artistDescription: string;
  portfolioUrl: string;
  makeup_groupmembers: string;
  organisationMembers: string;
  // Page 2
  termsAndConditions: string;
  cancellationPolicy: string;
  // Page 3
  // Page 4
}

const VenueForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    artistDescription: "",
    portfolioUrl: "",
    makeup_groupmembers: "",
    organisationMembers: "",
    termsAndConditions: "",
    cancellationPolicy: "",
  });
  const [category, setCategory] = useState("Individual");
  
 
  //page 1 varibles 

  //chips state
  const [makeupArtists_individual, setMakeupArtist_individual] = useState<string[]>([]);
  const [makeupArtists_groups, setMakeupArtist_group] = useState<string[]>([]);
  const [makeupArtists_organisation, setMakeupArtist_organisation] = useState<string[]>([]);

  //page 3
  const [advancePayment, setAdvancePayment] = useState(25);

  const [hourlyPackage, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0,0] },
  ]);
  const [dealPackage, setdealPackage] = useState<Package[]>([
    { type: "", priceRange: [0,0] },
  ]);

  const [ratesbyWorker, setratesbyWorker] = useState<Package[]>([
    { type: "", priceRange:[0,0] },
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
  const [makeupTypes, setMakeupTypes] =  useState<string[]>([]);
  const [onsiteMakeup, setOnsiteMakeup] = useState(true);
  

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  // Page-specific states


  const handleCategoryChange = (newCategory: "Individual" | "Group" | "Organisation") => {
    setCategory(newCategory);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    // Append form data
    formData.append("category", category);
    formData.append("artistDescription", formState.artistDescription);
    formData.append("portfolioUrl", formState.portfolioUrl);
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

  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 
          formState={formState}
          updateFormState={updateFormState}
          category={category}
          handleCategoryChange={handleCategoryChange}
          makeupArtists_individual={makeupArtists_individual}
          setMakeupArtist_individual={setMakeupArtist_individual}
          makeupArtists_groups={makeupArtists_groups}
          setMakeupArtist_group={setMakeupArtist_group}
          makeupArtists_organisation={makeupArtists_organisation}
          setMakeupArtist_organisation={setMakeupArtist_organisation}
         />;
      case 2:
        return <Page2
             formState={formState}
            updateFormState={updateFormState}
         />;
      case 3:
        return <Page3
          advancePayment={advancePayment}
          setAdvancePayment={setAdvancePayment}
          hourlyPackage={hourlyPackage}
          setHourlyPackages={setHourlyPackages}
          dealPackage={dealPackage}
          setdealPackage={setdealPackage}
          ratesbyWorker={ratesbyWorker}
          setratesbyWorker={setratesbyWorker}
          handlePackageChange={handlePackageChange}
          addPackage={addPackage}

         />;
      case 4:
        return <Page4 
          makeupTypes={makeupTypes}
          setMakeupTypes={setMakeupTypes}
          onsiteMakeup={onsiteMakeup}
          setOnsiteMakeup={setOnsiteMakeup}
        />;
      default:
        return (
         <Page1
         formState={formState}
          updateFormState={updateFormState}
          category={category}
          handleCategoryChange={handleCategoryChange}
          makeupArtists_individual={makeupArtists_individual}
          setMakeupArtist_individual={setMakeupArtist_individual}
          makeupArtists_groups={makeupArtists_groups}
          setMakeupArtist_group={setMakeupArtist_group}
          makeupArtists_organisation={makeupArtists_organisation}
          setMakeupArtist_organisation={setMakeupArtist_organisation}
         />
        );
    }
  };

  return (
    <div>
      {renderPage()}
       <div className="ml-10 mt-9 flex flex-row items-center justify-center gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 4 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 4 && (
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
