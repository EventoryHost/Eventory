"use client";

import React, { useEffect, useState } from "react";
import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import Page4 from "./page4/page4";
import Page5 from "./page5/page5";
import Page6 from "./preview/page6";
import Agreement from "../(Agreement)/Agreement";
import Plans from "../(Plans)/Plans";
import Registration_Completed from "../(Registration-Completed)/thankupage";
import { addInvitation } from "@/services/vendors/invitation";
interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  // Page-specific states
  // Page 1
  references: boolean | null;
  portfolio: string;
  experience: string;
  // Page 2
  customInvitationsFromScratch: boolean | null;
  semiCustomInvitations: boolean | null;
  foilStamping: boolean | null;
  engraving: boolean | null;
  letterPressPrinting: boolean | null;
  preDesignedCards: boolean | null;
  differentCardstockWeights: boolean | null;
  informationInserts: boolean | null;
  // Page 3

  additionalStationery: boolean | null;
  thankYouCards: boolean | null;
  designConcepts: boolean | null;
  discussVision: boolean | null;
  specialTouch: boolean | null;
  initialConsultation: boolean | null;
  allowRevisions: boolean | null;
  provideProofs: boolean | null;
  designconcept: boolean | null;
  // Page 4
  termsandConditions: string;
  cancellationPolicy: string;
  clienttestimonials: string;
  extracharges: boolean | null;
  deposit: boolean | null;

  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Invitation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
  const [formState, setFormState] = useState<FormState>({
    //page1
    references: null,
    portfolio: "",
    experience: "",
    // Page 2
    customInvitationsFromScratch: null,
    semiCustomInvitations: null,
    foilStamping: null,
    engraving: null,
    letterPressPrinting: null,
    preDesignedCards: null,
    differentCardstockWeights: null,
    informationInserts: null,

    //page 3
    additionalStationery: null,
    thankYouCards: null,
    designConcepts: null,
    discussVision: null,
    specialTouch: null,
    initialConsultation: null,
    allowRevisions: null,
    provideProofs: null,
    designconcept: null,
    // Page 4
    termsandConditions: "",
    cancellationPolicy: "",
    clienttestimonials: "",
    extracharges: null,
    deposit: null,
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
    formData.append(
      "references",
      formState.references ? formState.references.toString() : "null",
    );

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
      formState.customInvitationsFromScratch
        ? formState.customInvitationsFromScratch.toString()
        : "null",
    );
    formData.append(
      "semiCustomInvitations",
      formState.semiCustomInvitations
        ? formState.semiCustomInvitations.toString()
        : "null",
    );
    formData.append(
      "foilStamping",
      formState.foilStamping ? formState.foilStamping.toString() : "null",
    );

    formData.append(
      "engraving",
      formState.engraving ? formState.engraving.toString() : "null",
    );

    formData.append(
      "letterPressPrinting",
      formState.letterPressPrinting
        ? formState.letterPressPrinting.toString()
        : "null",
    );

    formData.append(
      "preDesignedCards",
      formState.preDesignedCards
        ? formState.preDesignedCards.toString()
        : "null",
    );

    formData.append(
      "differentCardstockWeights",
      formState.differentCardstockWeights
        ? formState.differentCardstockWeights.toString()
        : "null",
    );
    formData.append(
      "informationInserts",
      formState.informationInserts
        ? formState.informationInserts.toString()
        : "null",
    );
    formData.append("paperType", paperType.join(","));

    //page 3
    formData.append(
      "additionalStationery",
      formState.additionalStationery
        ? formState.additionalStationery.toString()
        : "null",
    );

    // Page 4
    formData.append("termsandConditions", formState.termsandConditions);
    formData.append("cancellationPolicy", formState.cancellationPolicy);
    formData.append("clienttestimonials", formState.clienttestimonials);
    formData.append(
      "extracharges",
      formState.extracharges ? formState.extracharges.toString() : "null",
    );

    formData.append(
      "deposit",
      formState.deposit ? formState.deposit.toString() : "null",
    );

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
        );
      case 7:
        return (
          <>
            <Plans
              handleformSubmit={handleSubmit}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 8:
        return (
          <>
            <Registration_Completed />
          </>
        );
      default:
        return (
          <>
            <center>
              <h2>Loading....</h2>
            </center>
          </>
        );
    }
  };

  return <div>{renderPage()}</div>;
};

export default Invitation;
