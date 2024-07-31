"use client";

import React, { useState } from "react";
import Appetizers from "../(components)/Appetizers";

interface FormState {
  freeInitialConsultation: boolean;
  revisionPolicy: boolean;
  writtenthemeProposal: boolean;
  setup_installation: boolean;
  consulationProcess: string;
}

interface Page4Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page4: React.FC<Page4Props> = ({ formState, updateFormState }) => {
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
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
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
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
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
                    type="radio"
                    checked={freeInitialConsultation === true}
                    onChange={() =>
                      updateFormState({ freeInitialConsultation: true })
                    }
                  />
                  <p>No</p>
                  <input
                    type="radio"
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
                    checked={revisionPolicy === true}
                    onChange={() => updateFormState({ revisionPolicy: true })}
                  />
                  <p>No</p>
                  <input
                    type="radio"
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
                      checked={writtenthemeProposal === true}
                      onChange={() =>
                        updateFormState({ writtenthemeProposal: true })
                      }
                    />
                    <p>No</p>
                    <input
                      type="radio"
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
                      checked={setup_installation === true}
                      onChange={() =>
                        updateFormState({ setup_installation: true })
                      }
                    />
                    <p>No</p>
                    <input
                      type="radio"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
