"use client";

import React, { useState } from "react";
import Individual from "./(page1)/individual";
import Group from "./(page1)/group";
import Organization from "./(page1)/organization";

type Page1Props = {
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  cuisineSpecialties: string[];
  setCuisineSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  regionalSpecialties: string[];
  setRegionalSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  serviceStyles: string[];
  setServiceStyles: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

const Page1 = ({
  businessName,
  setBusinessName,
  cuisineSpecialties,
  setCuisineSpecialties,
  regionalSpecialties,
  setRegionalSpecialties,
  serviceStyles,
  setServiceStyles,
  handleContinue,
}: Page1Props) => {
  const [selectedOption, setSelectedOption] = useState("individual");

  const renderComponent = () => {
    switch (selectedOption) {
      case "individual":
        return (
          <Individual
            businessName={businessName}
            setBusinessName={setBusinessName}
            handleContinue={handleContinue}
          />
        );
      case "group":
        return (
          <Group
            businessName={businessName}
            setBusinessName={setBusinessName}
            cuisineSpecialties={cuisineSpecialties}
            setCuisineSpecialties={setCuisineSpecialties}
            regionalSpecialties={regionalSpecialties}
            setRegionalSpecialties={setRegionalSpecialties}
            serviceStyles={serviceStyles}
            setServiceStyles={setServiceStyles}
            handleContinue={handleContinue}
          />
        );
      case "organization":
        return (
          <Organization
            businessName={businessName}
            setBusinessName={setBusinessName}
            cuisineSpecialties={cuisineSpecialties}
            setCuisineSpecialties={setCuisineSpecialties}
            regionalSpecialties={regionalSpecialties}
            setRegionalSpecialties={setRegionalSpecialties}
            serviceStyles={serviceStyles}
            setServiceStyles={setServiceStyles}
            handleContinue={handleContinue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <div className="flex w-[100%] items-center justify-start gap-9">
        <h1 className="text-3xl font-semibold">Basic Details</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="individual"
              name="type"
              value="individual"
              checked={selectedOption === "individual"}
              onChange={() => setSelectedOption("individual")}
            />
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="group"
              name="type"
              value="group"
              checked={selectedOption === "group"}
              onChange={() => setSelectedOption("group")}
            />
            <label htmlFor="group">Group</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="organization"
              name="type"
              value="organization"
              checked={selectedOption === "organization"}
              onChange={() => setSelectedOption("organization")}
            />
            <label htmlFor="organization">Organization</label>
          </div>
        </div>
      </div>
      {renderComponent()}
    </form>
  );
};

export default Page1;
