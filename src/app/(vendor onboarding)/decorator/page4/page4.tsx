"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import { ArrowLeft } from "lucide-react";

interface FormState {
  freeInitialConsultation: boolean;
  revisionPolicy: boolean;
  writtenthemeProposal: boolean;
  setup_installation: boolean;
  consulationProcess: string;
}

interface Page4Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page4: React.FC<Page4Props> = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage
}) => {
  const {
    freeInitialConsultation,
    revisionPolicy,
    writtenthemeProposal,
    setup_installation,
    consulationProcess,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="scroll-touch items-strech flex  w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9]  scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3  md:p-6">
        <div className="flex gap-4 items-center">
          <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={() => setCurrentPage(currentPage - 1)} />
          <h1 className="text-2xl font-semibold">Consultation Details</h1>
        </div>
        <div className="flex min-h-full min-w-full flex-col items-center gap-8">
          <div className="flex min-w-full flex-row items-start justify-between gap-2">
            <div className="flex min-w-[50%] flex-col gap-4 lg:max-w-[60%]">
              <div className="flex flex-col  gap-2">
                <p className="text-base font-medium">Do you offer free initial consultations? </p>
                <div className="flex gap-6">
                  <div className="flex  gap-4 items-center">
                    <input
                      type="radio"
                      value="true"
                      checked={freeInitialConsultation}
                      onChange={() =>
                        updateFormState({ freeInitialConsultation: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes" className="text-sm">Yes</label>
                  </div>
                  <div className="flex  gap-4 items-center">
                    <input
                      type="radio"
                      value="false"
                      checked={!freeInitialConsultation}
                      onChange={() =>
                        updateFormState({ freeInitialConsultation: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo" className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex min-w-[40%] flex-col gap-4 lg:max-w-[60%]">
              <label htmlFor="businessName">
                Do you offer revisions to the initial theme proposal?
              </label>
              <div className="flex flex-row items-center justify-start gap-2">
                <p>Yes</p>
                <input
                  type="radio"
                  className="h-4 w-4 accent-[#2E3192]"
                  checked={revisionPolicy === true}
                  onChange={() => updateFormState({ revisionPolicy: true })}
                />
                <p>No</p>
                <input
                  type="radio"
                  className="h-4 w-4 accent-[#2E3192]"
                  checked={revisionPolicy === false}
                  onChange={() => updateFormState({ revisionPolicy: false })}
                />
              </div>
            </div> */}
          </div>
          <div className="flex min-w-full flex-row items-start justify-between gap-2">
            <div className="flex flex-col gap-8 lg:max-w-[60%]">
              <div className="flex min-w-[40%] flex-col gap-4">
                <div className="flex flex-col  gap-2">
                  <p className="text-base font-medium"> Do you provide a written theme proposal after consultation?</p>
                  <div className="flex gap-6">
                    <div className="flex  gap-4 items-center">
                      <input
                        type="radio"
                        value="true"
                        checked={writtenthemeProposal}
                        onChange={() =>
                          updateFormState({ writtenthemeProposal: true })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsYes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex  gap-4 items-center">
                      <input
                        type="radio"
                        value="false"
                        checked={!writtenthemeProposal}
                        onChange={() =>
                          updateFormState({ writtenthemeProposal: false })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsNo" className="text-sm">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <div className="flex flex-col  gap-2">
                  <p className="text-base font-medium">Do you handle setup and installation of the decor?</p>
                  <div className="flex gap-6">
                    <div className="flex  gap-4 items-center">
                      <input
                        type="radio"
                        value="true"
                        checked={setup_installation}
                        onChange={() =>
                          updateFormState({ setup_installation: true })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsYes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex  gap-4 items-center">
                      <input
                        type="radio"
                        value="false"
                        checked={!setup_installation}
                        onChange={() =>
                          updateFormState({ setup_installation: false })
                        }
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="tastingSessionsNo" className="text-sm">No</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex min-w-[45%] flex-col gap-4">
              <label htmlFor="category">Consultation Process</label>
              <input
                id="businessName"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Description of their consultation process"
                value={consulationProcess}
                onChange={(e) =>
                  updateFormState({ consulationProcess: e.target.value })
                }
              />
            </div> */}
          </div>

          <div className="items-strech  flex flex-row gap-7 self-end">

            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page4;
