"use client";

import React from "react";
import Appetizers from "../../(components)/Appetizers";
import StepBar from "../(components)/StepBar";

const _typesOfPaperUsedForInvitations = [
  "Cardstock",
  "Vellum",
  "Linen",
  "Cotton",
  "Recycled Paper",
  "Parchment",
  "Metallic Paper",
  "Kraft Paper",
  "Others",
];

interface FormState {
  customInvitationsFromScratch: boolean | null;
  semiCustomInvitations: boolean | null;
  foilStamping: boolean | null;
  engraving: boolean | null;
  letterPressPrinting: boolean | null;
  preDesignedCards: boolean | null;
  differentCardstockWeights: boolean | null;
  informationInserts: boolean | null;
}

interface Page2Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  paperType: string[];
  setPaperType: React.Dispatch<React.SetStateAction<string[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleStepClick: (step: number) => void;
}

const Page: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  paperType,
  setPaperType,
  currentPage,
  setCurrentPage,
  handleStepClick,
}) => {
  const {
    customInvitationsFromScratch,
    semiCustomInvitations,
    preDesignedCards,
    foilStamping,
    engraving,
    differentCardstockWeights,
    informationInserts,
    letterPressPrinting,
  } = formState;

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <StepBar currentStep={currentPage} onStepClick={handleStepClick} />
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
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Basic Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="gap- flex min-w-full flex-row items-start justify-between">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you create custom invitations from the <br />
                  scratch?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={customInvitationsFromScratch === true}
                    onChange={() =>
                      updateFormState({ customInvitationsFromScratch: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={customInvitationsFromScratch === false}
                    onChange={() =>
                      updateFormState({ customInvitationsFromScratch: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you offer letter-press printing for more <br />
                  luxurious look ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={letterPressPrinting === true}
                    onChange={() =>
                      updateFormState({ letterPressPrinting: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={letterPressPrinting === false}
                    onChange={() =>
                      updateFormState({ letterPressPrinting: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-0">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>Do you create semi - custom invitations ?</label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={semiCustomInvitations === true}
                    onChange={() =>
                      updateFormState({ semiCustomInvitations: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={semiCustomInvitations === false}
                    onChange={() =>
                      updateFormState({ semiCustomInvitations: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you have pre-designed cards available ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={preDesignedCards === true}
                    onChange={() => updateFormState({ preDesignedCards: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={preDesignedCards === false}
                    onChange={() =>
                      updateFormState({ preDesignedCards: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-0">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do they offer foil stamping for metallic <br />
                  accents ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={foilStamping === true}
                    onChange={() => updateFormState({ foilStamping: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={foilStamping === false}
                    onChange={() => updateFormState({ foilStamping: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you offer different cardstock weights for <br />{" "}
                  invitations?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={differentCardstockWeights === true}
                    onChange={() =>
                      updateFormState({ differentCardstockWeights: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={differentCardstockWeights === false}
                    onChange={() =>
                      updateFormState({ differentCardstockWeights: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-0">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do they offer engraving for a classic and <br />
                  elegant look ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={engraving === true}
                    onChange={() => updateFormState({ engraving: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={engraving === false}
                    onChange={() => updateFormState({ engraving: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you design information inserts for <br /> additional event
                  details ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={informationInserts === true}
                    onChange={() =>
                      updateFormState({ informationInserts: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={informationInserts === false}
                    onChange={() =>
                      updateFormState({ informationInserts: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-2xl font-semibold">
            Types of Paper used for Invitations ?
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_typesOfPaperUsedForInvitations"}
                appetizers={_typesOfPaperUsedForInvitations}
                selectedAppetizers={paperType}
                setSelectedAppetizers={setPaperType}
              />
            </div>
            {/* <div className="items-strech mt-9 flex flex-row gap-7 self-end">
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
            </div> */}
            {/* Button container */}
            <div className="mr-[5%] flex w-full justify-end gap-[32px]">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Previous
              </button>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
