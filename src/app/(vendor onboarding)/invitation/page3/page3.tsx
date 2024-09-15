"use client";

import React from "react";
import Appetizers from "../../(components)/Appetizers";

const _envelopeTypes = [
  "A-Style Envelopes",
  "Baronial Envelopes",
  "Booklet Envelopes",
  "Catalog Envelopes",
  "Commercial Envelopes",
  "Inner and Outer Envelopes",
  "Peel and Seal Envelopes",
  "Policy Envelopes",
  "Remittance Envelopes",
  "Square Envelopes",
  "Square Flap Envelopes",
  "Window Envelopes",
  "Others",
];

interface FormState {
  //page 3
  additionalStationery: boolean;
  thankYouCards: boolean;
  designconcept: boolean;
  discussVision: boolean;
  specialTouch: boolean;
  initialConsultation: boolean;
  allowRevisions: boolean;
  provideProofs: boolean;
}

interface Page2Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  envelopeTypes: string[];
  setEnvelopeTypes: React.Dispatch<React.SetStateAction<string[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Page: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  envelopeTypes,
  setEnvelopeTypes,
  currentPage,
  setCurrentPage,
}) => {
  const {
    //page 3
    additionalStationery,
    thankYouCards,
    designconcept,
    discussVision,
    specialTouch,
    initialConsultation,
    allowRevisions,
    provideProofs,
  } = formState;



  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button onClick={() => setCurrentPage(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button onClick={() => setCurrentPage(2)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button onClick={() => setCurrentPage(3)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button onClick={() => setCurrentPage(4)} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5 ">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button onClick={() => setCurrentPage(5)} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
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
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Services Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you design additional stationery products <br /> besides
                  invitations ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={additionalStationery === true}
                    onChange={() =>
                      updateFormState({ additionalStationery: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={additionalStationery === false}
                    onChange={() =>
                      updateFormState({ additionalStationery: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you offer decorative envelope liners to <br /> add a
                  special touch ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={specialTouch === true}
                    onChange={() => updateFormState({ specialTouch: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={specialTouch === false}
                    onChange={() => updateFormState({ specialTouch: false })}
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you design Thank You cards to send after <br /> the event ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={thankYouCards === true}
                    onChange={() => updateFormState({ thankYouCards: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={thankYouCards === false}
                    onChange={() => updateFormState({ thankYouCards: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you offer initial consultations to <br />
                  discuss your invitation needs ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={initialConsultation === true}
                    onChange={() =>
                      updateFormState({ initialConsultation: true })
                    }
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={initialConsultation === false}
                    onChange={() =>
                      updateFormState({ initialConsultation: false })
                    }
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you create initial design concepts based <br /> on
                  Customers’ input?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={designconcept === true}
                    onChange={() => updateFormState({ designconcept: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={designconcept === false}
                    onChange={() => updateFormState({ designconcept: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you allow revisions and adjustments to <br /> the design
                  until you approve it?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={allowRevisions === true}
                    onChange={() => updateFormState({ allowRevisions: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={allowRevisions === false}
                    onChange={() => updateFormState({ allowRevisions: false })}
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  During the consultation, do you discuss <br /> customers’
                  vision, theme, and preferences <br /> for the invitations ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={discussVision === true}
                    onChange={() => updateFormState({ discussVision: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={discussVision === false}
                    onChange={() => updateFormState({ discussVision: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you provide digital or physical proofs <br /> for your
                  review before printing?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={provideProofs === true}
                    onChange={() => updateFormState({ provideProofs: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={provideProofs === false}
                    onChange={() => updateFormState({ provideProofs: false })}
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Types of Envelopes you offer ?
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field="_envelopeTypes"
                appetizers={_envelopeTypes}
                selectedAppetizers={envelopeTypes}
                setSelectedAppetizers={setEnvelopeTypes}
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
            <div className="w-full flex justify-end gap-[32px] mr-[5%]">
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
