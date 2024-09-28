"use client";

import React, { useEffect, useState } from "react";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./preview/page6";
import Agreement from "../Agreement/Agreement";
import Plans from "../Plans/page";
import Registration_Completed from "../Registration-Completed/page";
import { addInvitation } from "@/services/vendors/invitation";
interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  // Page-specific states
  // Page 1
  references: boolean;
  portfolio: string;
  experience: string;
  // Page 2
  customInvitationsFromScratch: boolean;
  semiCustomInvitations: boolean;
  foilStamping: boolean;
  engraving: boolean;
  letterPressPrinting: boolean;
  preDesignedCards: boolean;
  differentCardstockWeights: boolean;
  informationInserts: boolean;
  // Page 3

  additionalStationery: boolean;
  thankYouCards: boolean;
  designConcepts: boolean;
  discussVision: boolean;
  specialTouch: boolean;
  initialConsultation: boolean;
  allowRevisions: boolean;
  provideProofs: boolean;
  designconcept: boolean;
  // Page 4
  termsandConditions: string;
  cancellationPolicy: string;
  clienttestimonials: string;
  extracharges: boolean;
  deposit: boolean;

  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Invitation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    //page1
    references: false,
    portfolio: "",
    experience: "",
    // Page 2
    customInvitationsFromScratch: false,
    semiCustomInvitations: false,
    foilStamping: false,
    engraving: false,
    letterPressPrinting: false,
    preDesignedCards: false,
    differentCardstockWeights: false,
    informationInserts: false,

    //page 3
    additionalStationery: false,
    thankYouCards: false,
    designConcepts: false,
    discussVision: false,
    specialTouch: false,
    initialConsultation: false,
    allowRevisions: false,
    provideProofs: false,
    designconcept: false,
    // Page 4
    termsandConditions: "",
    cancellationPolicy: "",
    clienttestimonials: "",
    extracharges: false,
    deposit: false,
    currentPage,
    setCurrentPage,
  });

  useEffect(() => {
    console.log("Current Page: ", currentPage);
  }, [currentPage]);

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };

  //page 1
  const [typesOfInvitationsYouDesign, setTypesOfInvitationsYouDesign] =
    useState<string[]>([]);
  const [formalinvitation, setFormalInvitation] = useState<string[]>([]);
  const [casualinvitation, setCasualInvitation] = useState<string[]>([]);
  const [Electronicinvitation, setElectronicInvitation] = useState<string[]>(
    [],
  );
  const [handmadeinvitation, setHandmadeInvitation] = useState<string[]>([]);
  const [printedInvitation, setPrintedInvitation] = useState<string[]>([]);
  const [specialyInvitation, setSpecialyInvitation] = useState<string[]>([]);
  const [uniqueInvitation, setUniqueInvitation] = useState<string[]>([]);
  const [relegiousInvitation, setRelegiousInvitation] = useState<string[]>([]);
  const [otherInvitation, setOtherInvitation] = useState<string[]>([]);

  //page 2
  const [paperType, setPaperType] = useState<string[]>([]);

  //page 3
  const [envelopTypes, setEnvelopTypes] = useState<string[]>([]);

  //page 4

  //page 5
  const [perPeicePriceRange, setperPeicePriceRange] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [bulkPriceRange, setbulkPriceRange] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [advancePayment, setAdvancePayment] = useState(25);

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

  const handleStepClick = (step: number) => {
    setCurrentPage(step);
  };

  // Submit form data

  const handleSubmit = async () => {
    const formData = new FormData();
    // Append form data
    //page 1
    formData.append("references", formState.references.toString());
    formData.append("portfolio", formState.portfolio);
    formData.append("experience", formState.experience);
    formData.append(
      "typesOfInvitationsYouDesign",
      typesOfInvitationsYouDesign.join(","),
    );
    formData.append("formalinvitation", formalinvitation.join(","));
    formData.append("casualinvitation", casualinvitation.join(","));
    formData.append("Electronicinvitation", Electronicinvitation.join(","));
    formData.append("handmadeinvitation", handmadeinvitation.join(","));
    formData.append("printedInvitation", printedInvitation.join(","));
    formData.append("specialyInvitation", specialyInvitation.join(","));
    formData.append("uniqueInvitation", uniqueInvitation.join(","));
    formData.append("relegiousInvitation", relegiousInvitation.join(","));
    formData.append("otherInvitation", otherInvitation.join(","));

    //page 2
    formData.append(
      "customInvitationsFromScratch",
      formState.customInvitationsFromScratch.toString(),
    );
    formData.append(
      "semiCustomInvitations",
      formState.semiCustomInvitations.toString(),
    );
    formData.append("foilStamping", formState.foilStamping.toString());
    formData.append("engraving", formState.engraving.toString());
    formData.append(
      "letterPressPrinting",
      formState.letterPressPrinting.toString(),
    );
    formData.append("preDesignedCards", formState.preDesignedCards.toString());
    formData.append(
      "differentCardstockWeights",
      formState.differentCardstockWeights.toString(),
    );
    formData.append(
      "informationInserts",
      formState.informationInserts.toString(),
    );
    formData.append("paperType", paperType.join(","));

    //page 3
    formData.append(
      "additionalStationery",
      formState.additionalStationery.toString(),
    );

    // Page 4
    formData.append("termsandConditions", formState.termsandConditions);
    formData.append("cancellationPolicy", formState.cancellationPolicy);
    formData.append("clienttestimonials", formState.clienttestimonials);
    formData.append("extracharges", formState.extracharges.toString());
    formData.append("deposit", formState.deposit.toString());

    //page 5
    formData.append("perPeicePriceRange", JSON.stringify(perPeicePriceRange));
    formData.append("bulkPriceRange", JSON.stringify(bulkPriceRange));
    formData.append("advancePayment", advancePayment.toString());

    // Append form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      await addInvitation(formData);
      console.log("Invitation added successfully");
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
            typesOfInvitationsYouDesign={typesOfInvitationsYouDesign}
            setTypesOfInvitationsYouDesign={setTypesOfInvitationsYouDesign}
            formalinvitation={formalinvitation}
            setFormalInvitation={setFormalInvitation}
            casualinvitation={casualinvitation}
            setCasualInvitation={setCasualInvitation}
            Electronicinvitation={Electronicinvitation}
            setElectronicInvitation={setElectronicInvitation}
            handmadeinvitation={handmadeinvitation}
            setHandmadeInvitation={setHandmadeInvitation}
            printedInvitation={printedInvitation}
            setPrintedInvitation={setPrintedInvitation}
            specialyInvitation={specialyInvitation}
            setSpecialyInvitation={setSpecialyInvitation}
            uniqueInvitation={uniqueInvitation}
            setUniqueInvitation={setUniqueInvitation}
            relegiousInvitation={relegiousInvitation}
            setRelegiousInvitation={setRelegiousInvitation}
            otherInvitation={otherInvitation}
            setOtherInvitation={setOtherInvitation}
            handleStepClick={handleStepClick}
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            updateFormState={updateFormState}
            paperType={paperType}
            setPaperType={setPaperType}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleStepClick={handleStepClick}
          />
        );
      case 3:
        return (
          <Page3
            formState={formState}
            updateFormState={updateFormState}
            envelopeTypes={envelopTypes}
            setEnvelopeTypes={setEnvelopTypes}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleStepClick={handleStepClick}
          />
        );
      case 4:
        return (
          <Page4
            formState={formState}
            updateFormState={updateFormState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleStepClick={handleStepClick}
          />
        );
      case 5:
        return (
          <Page5
            perPeicePriceRange={perPeicePriceRange}
            setperPeicePriceRange={setperPeicePriceRange}
            bulkPriceRange={bulkPriceRange}
            setbulkPriceRange={setbulkPriceRange}
            advancePayment={advancePayment}
            setAdvancePayment={setAdvancePayment}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleStepClick={handleStepClick}
          />
        );
      case 6:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        )
      case 7:
        return (
          <>
            <Plans handleformSubmit={handleSubmit} setCurrentPage={setCurrentPage} />
          </>
        )
      case 8:
        return (
          <>
            <Registration_Completed />
          </>
        )
      default:
        return (
          <>
            <center><h2>Loading....</h2></center>
          </>
        )
    }
  };

  return <div>{renderPage()}</div>;
};

export default Invitation;
