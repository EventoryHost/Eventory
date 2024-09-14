"use client";

import React, { useState } from "react";
import Appetizers from "../../(components)/Appetizers";

interface FormState {
  freeInitialConsultation: boolean;
  revisionPolicy: boolean;
  writtenthemeProposal: boolean;
  setup_installation: boolean;
  consulationProcess: string;
}

interface Page4Props {
  handleContinue: () => void;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page4: React.FC<Page4Props> = ({
  formState,
  updateFormState,
  handleContinue,
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
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Consultation details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4 lg:max-w-[60%]">
                <label htmlFor="businessName">
                  Do you offer free initial consultations?
                </label>
                <div className="flex flex-row items-center justify-start gap-2">
                  <p>Yes</p>
                  <input
                    className="h-4 w-4 accent-[#2E3192]"
                    checked={freeInitialConsultation === true}
                    onChange={() =>
                      updateFormState({ freeInitialConsultation: true })
                    }
                  />
                  <p>No</p>
                  <input
                    type="radio"
                    className="h-4 w-4 accent-[#2E3192]"
                    className="h-4 w-4 accent-[#2E3192]"
                    checked={freeInitialConsultation === false}
                    onChange={() =>
                      updateFormState({ freeInitialConsultation: false })
                    }
                  />
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4 lg:max-w-[60%]">
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
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex flex-col gap-4 lg:max-w-[60%]">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Do you provide a written theme proposal after consultation?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <p>Yes</p>
                    <input
                      type="radio"
                      className="h-4 w-4 accent-[#2E3192]"
                      checked={writtenthemeProposal === true}
                      onChange={() =>
                        updateFormState({ writtenthemeProposal: true })
                      }
                    />
                    <p>No</p>
                    <input
                      type="radio"
                      className="h-4 w-4 accent-[#2E3192]"
                      checked={writtenthemeProposal === false}
                      onChange={() =>
                        updateFormState({ writtenthemeProposal: false })
                      }
                    />
                  </div>
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Do you handle setup and installation of the decor?
                  </label>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <p>Yes</p>
                    <input
                      type="radio"
                      className="h-4 w-4 accent-[#2E3192]"
                      checked={setup_installation === true}
                      onChange={() =>
                        updateFormState({ setup_installation: true })
                      }
                    />
                    <p>No</p>
                    <input
                      type="radio"
                      className="h-4 w-4 accent-[#2E3192]"
                      checked={setup_installation === false}
                      onChange={() =>
                        updateFormState({ setup_installation: false })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex min-w-[45%] flex-col gap-4">
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
              </div>
            </div>

            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Skip
              </button>
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
    </div>
  );
};

export default Page4;
