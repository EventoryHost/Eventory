"use client";

import { useState } from "react";
import Individual from "./(page1)/individual";
import Group from "./(page1)/group";
import Organization from "./(page1)/organization";
import { pavtypes } from "@/types/types";

type Page1Props = {
  type: pavtypes;
  setType: (type: pavtypes) => void;
  fullName: string;
  setFullName: (fullName: string) => void;
  clientTestimonials: string | File|File[];
  setClientTestimonials: (clientTestimonials: string | File|File[]) => void;
  portfolio: string | File|File[];
  setPortfolio: (portfolio: string | File|File[]) => void;
  groupMembers: string;
  setGroupMembers: (groupMembers: string) => void;
  organizationMembers: string;
  setOrganizationMembers: (organizationMembers: string) => void;
  handleContinue: () => void;
};

const Page1 = ({
  type,
  setType,
  fullName,
  setFullName,
  clientTestimonials,
  setClientTestimonials,
  portfolio,
  setPortfolio,
  groupMembers,
  setGroupMembers,
  organizationMembers,
  setOrganizationMembers,
  handleContinue,
}: Page1Props) => {
  // State to manage the selected option (individual, group, organization)
  const [selectedOption, setSelectedOption] = useState<pavtypes>("individual");

  const renderComponent = () => {
    switch (selectedOption) {
      case "individual":
        return (
          <Individual
            fullname={fullName}
            setFullname={setFullName}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            clientTestimonials={clientTestimonials}
            setClientTestimonials={setClientTestimonials}
            handleContinue={handleContinue}
          />
        );
      case "grp":
        return (
          <Group
            fullName={fullName}
            setFullName={setFullName}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            groupMembers={groupMembers}
            setGroupMembers={setGroupMembers}
            handleContinue={handleContinue}
          />
        );
      case "org":
        return (
          <Organization
            fullName={fullName}
            setFullName={setFullName}
            organizationMembers={organizationMembers}
            setOrganizationMembers={setOrganizationMembers}
            clientTestimonials={clientTestimonials}
            setClientTestimonials={setClientTestimonials}
            handleContinue={handleContinue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
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
              onChange={() => {
                setSelectedOption("individual");
                setType("individual");
              }}
            />
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="group"
              name="type"
              value="group"
              checked={selectedOption === "grp"}
              onChange={() => {
                setSelectedOption("grp");
                setType("grp");
              }}
            />
            <label htmlFor="group">Group</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="organization"
              name="type"
              value="organization"
              checked={selectedOption === "org"}
              onChange={() => {
                setSelectedOption("org");
                setType("org");
              }}
            />
            <label htmlFor="organization">Organization</label>
          </div>
        </div>
      </div>
      {renderComponent()}
    </div>
  );
};

export default Page1;
