"use client";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import React, { useState } from "react";
import Image from "next/image";
import { pavtypes, pavFormState, BasicDetails } from "@/types/types";
import { addPhotographer } from "@/services/vendors/photographer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // function updateFormState(newState: Partial<pav>) {
  //   setFormState((prev) => ({ ...prev, ...newState }));
  // }

  //states for page1
  const [type, setType] = useState<pavtypes>("individual");
  const [name, setFullName] = useState("");
  const [clientTestimonials, setClientTestimonials] = useState<string | File>(
    "",
  );
  const [portfolio, setPortfolio] = useState<string | File>("");
  const [groupMembers, setGroupMembers] = useState("");
  const [organizationMembers, setOrganizationMembers] = useState("");

  //states for page2
  const [basicDetail, setBasicDetail] = useState<BasicDetails>("photo");
  const [styles, setStyles] = useState<string[]>([]);
  const [events, setEvents] = useState<string[]>([]);
  const [customizablePackage, setCustomizablePackage] =
    useState<boolean>(false);

  //states for page3
  const [customizableSoundLightingRates, setCustomizableSoundLightingRates] =
    useState<boolean>(false);
  const [equipments, setEquipments] = useState<string[]>([]);

  //states for page4
  const [proposalsToClients, setProposalsToClients] = useState<boolean>(false);
  const [freeInitialConsultation, setFreeInitialConsultation] =
    useState<boolean>(false);
  const [advanceSetup, setAdvanceSetup] = useState<boolean>(false);
  const [collaborationWithOtherVendors, setCollaborationWithOtherVendors] =
    useState<boolean>(false);
  const [setupsInstallations, setSetupsInstallations] =
    useState<boolean>(false);
  const [bookingDeposit, setBookingDeposit] = useState<boolean>(false);
  const [cancellationPolicy, setCancellationPolicy] = useState<File | string>(
    "",
  );
  const [tnc, setTnc] = useState<File | string>("");

  //states for page5
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  // states for page5
  interface Package {
    type: string;
    priceRange: [number, number];
  }

  // State for packages

  // Function to handle package change
  const handlePackageChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => {
    setPackages((prevPackages) => {
      const newPackages = [...prevPackages];
      if (field === "type") {
        newPackages[index] = { ...newPackages[index], type: value as string };
      } else {
        newPackages[index] = {
          ...newPackages[index],
          priceRange: value as [number, number],
        };
      }
      return newPackages;
    });
  };

  // Function to add a new package
  const addPackage = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 0] },
    ]);
  };

  const handleContinue = () => {
    console.log({
      type,
      name,
      clientTestimonials,
      portfolio,
      groupMembers,
      organizationMembers,
      styles,
      events,
      customizablePackage,
      customizableSoundLightingRates,
      equipments,
      proposalsToClients,
      freeInitialConsultation,
      advanceSetup,
      collaborationWithOtherVendors,
      setupsInstallations,
      bookingDeposit,
      cancellationPolicy,
      tnc,
      hourlyPackages,
      dailyPackages,
    });
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("venId", "SomeVenID");
    formData.append("type", type);
    formData.append("name", name);
    formData.append(
      "clientTestimonials",
      clientTestimonials instanceof File
        ? clientTestimonials.name
        : clientTestimonials,
    );
    formData.append("portfolio", portfolio);
    formData.append(
      "numberOfMembers",
      groupMembers == "" ? organizationMembers : groupMembers,
    );
    formData.append("organizationMembers", organizationMembers);
    formData.append("basicDetail", basicDetail);
    formData.append("styles", JSON.stringify(styles));
    formData.append("events", JSON.stringify(events));
    formData.append("customizablePackage", JSON.stringify(customizablePackage));
    formData.append(
      "customizableSoundLightingRates",
      JSON.stringify(customizableSoundLightingRates),
    );
    formData.append("equipments", JSON.stringify(equipments));
    formData.append("proposalsToClients", JSON.stringify(proposalsToClients));
    formData.append(
      "freeInitialConsultation",
      JSON.stringify(freeInitialConsultation),
    );
    formData.append("advanceSetup", JSON.stringify(advanceSetup));
    formData.append(
      "collaborationWithOtherVendors",
      JSON.stringify(collaborationWithOtherVendors),
    );
    formData.append("setupsInstallations", JSON.stringify(setupsInstallations));
    formData.append("bookingDeposit", JSON.stringify(bookingDeposit));
    formData.append("cancellationPolicy", cancellationPolicy);
    formData.append("termsAndConditions", tnc);
    formData.append("hourlyPackages", JSON.stringify(hourlyPackages));
    formData.append("dailyPackages", JSON.stringify(dailyPackages));

    console.log("cancel", cancellationPolicy);

    try {
      const res = await addPhotographer(formData);
    } catch (error) {
      console.error("Error adding photographer:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            type={type}
            setType={setType}
            fullName={name}
            setFullName={setFullName}
            clientTestimonials={clientTestimonials}
            setClientTestimonials={setClientTestimonials}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            groupMembers={groupMembers}
            setGroupMembers={setGroupMembers}
            organizationMembers={organizationMembers}
            setOrganizationMembers={setOrganizationMembers}
            handleContinue={handleContinue}
          />
        );
      case 2:
        return (
          <Page2
            basicDetail={basicDetail}
            setBasicDetail={setBasicDetail}
            Selectedstyles={styles}
            setStyles={setStyles}
            Selectedevents={events}
            setEvents={setEvents}
            customozablePackage={customizablePackage}
            setCustomozablePackage={setCustomizablePackage}
            handleContinue={handleContinue}
          />
        );
      case 3:
        return (
          <Page3
            customizableSoundLightingRates={customizableSoundLightingRates}
            setCustomizableSoundLightingRates={
              setCustomizableSoundLightingRates
            }
            Selectedequipments={equipments}
            setSelectedEquipments={setEquipments}
            handleContinue={handleContinue}
          />
        );
      case 4:
        return (
          <Page4
            proposalsToClients={proposalsToClients}
            setProposalsToClients={setProposalsToClients}
            freeInitialConsultation={freeInitialConsultation}
            setFreeInitialConsultation={setFreeInitialConsultation}
            advanceSetup={advanceSetup}
            setAdvanceSetup={setAdvanceSetup}
            collaborationWithOtherVendors={collaborationWithOtherVendors}
            setCollaborationWithOtherVendors={setCollaborationWithOtherVendors}
            setupsInstallations={setupsInstallations}
            setSetupsInstallations={setSetupsInstallations}
            bookingDeposit={bookingDeposit}
            setBookingDeposit={setBookingDeposit}
            cancellationPolicy={cancellationPolicy}
            setCancellationPolicy={setCancellationPolicy}
            tnc={tnc}
            setTnc={setTnc}
            handleContinue={handleContinue}
          />
        );
      case 5:
        return (
          <Page5
            hourlyPackages={hourlyPackages}
            setHourlyPackages={setHourlyPackages}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            handleContinue={handleSubmit}
          />
        );
      default:
        return <div>Completed</div>;
    }
  };

  return (
    <div className="m-0 flex w-full flex-col overflow-x-hidden lg:h-[calc(100vh-4.2rem)] lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex w-[100%] flex-col gap-5 lg:gap-3">
          <div className="flex items-center justify-start gap-1 px-3 lg:mt-[2rem]">
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage === 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
            >
              1
            </button>
            <div
              className={`h-[0.3rem] w-[4rem] rounded-xl ${currentPage > 1 ? "bg-[#2E3192]" : "bg-gray-300"}`}
            ></div>
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full p-5 ${currentPage === 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
            >
              2
            </button>
            <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
              3
            </button>
          </div>
          <div className="flex items-center justify-start gap-1 px-3 lg:mt-[1rem]">
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
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-3 md:px-3">
          <h1 className="text-[8vw] font-bold md:text-[3vw]">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={"/tajmahal.png"}
            alt=""
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]"
      >
        {renderPage()}
      </form>
    </div>
  );
};

export default Page;
