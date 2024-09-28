"use client";

import { CheckCircle, Upload } from "lucide-react";
import React, { useState } from "react";
import FileInput from "@/components/fileInput";
import Dropdown from "../../(components)/Dropdown";

type Page1Props = {

  Durationoffinaldelivery: string;
  setDurationoffinaldelivery: (Durationoffinaldelivery: string) => void;
  Packagetype: string;
  setPackagetype: (Packagetype: string) => void;
  setavailablefordestinationevents: (setPackagetype: boolean) => void;
  availablefordestinationevents: boolean;
  setpostproductionservices: (setPackagetype: boolean) => void;
  postproductionservices: boolean;
  proposalsToClients: boolean;
  setProposalsToClients: (proposalsToClients: boolean) => void;
  freeInitialConsultation: boolean;
  setFreeInitialConsultation: (freeInitialConsultation: boolean) => void;
  advanceSetup: boolean;
  setAdvanceSetup: (advanceSetup: boolean) => void;
  setupsInstallations: boolean;
  setSetupsInstallations: (setupsInstallations: boolean) => void;
  bookingDeposit: boolean;
  setBookingDeposit: (bookingDeposit: boolean) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleContinue: () => void;
};

const Page4 = ({
  proposalsToClients,
  setProposalsToClients,
  freeInitialConsultation,
  setFreeInitialConsultation,
  advanceSetup,
  setAdvanceSetup,
  Durationoffinaldelivery,
  postproductionservices,
  setpostproductionservices,
  setDurationoffinaldelivery,
  Packagetype,
  setPackagetype,
  availablefordestinationevents,
  setavailablefordestinationevents,
  bookingDeposit,
  setBookingDeposit,
  setCurrentPage,
  handleContinue,
}: Page1Props) => {


  const durations = [
    "Less than 1 week",
    "Less then 2 weeks",
    "2-4 weeks",
    "More than 4 weeks",
  ];
  const packagetypes = [
    "Costomize",
    "Standard",
    "Both",
  ];


  return (
    <div
      className="scroll-touch flex flex-col items-start gap-7  overflow-y-scroll rounded-xl bg-white p-3  scrollbar-hide xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleContinue();
      }}
    >
      <h1 className="text-3xl font-semibold">Consultation details</h1>
      <div className="flex min-w-[100%] flex-col items-start justify-between gap-5 md:flex-row">
        <div className="flex flex-col items-start justify-between gap-9">
          <div className="flex flex-col w-max items-start justify-between gap-5 md:flex-row">
            <div className="flex min-w-[60%] flex-col gap-4">
              <label htmlFor="businessName">
                Duration of Final Delivery of Photos/Videos<span className="text-red-500">*</span>
              </label>
              <Dropdown
                options={durations}
                onSelect={(value: string) => setDurationoffinaldelivery(value)}
                placeholder="Select Your Work Delivery time"
              />

            </div>

            <div className="flex min-w-[60%] flex-col gap-4">
              <label htmlFor="businessName">
                Package Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                options={packagetypes}
                onSelect={(value: string) => setPackagetype(value)}
                placeholder="Select Type Of Your Delivery"
              />
            </div>
          </div>

          <div className="flex flex-col w-max items-start justify-between gap-5 md:flex-row">
            <div className="flex min-w-[57%] flex-col gap-5">
              {/* Proposals to Clients */}
              <div className="flex flex-col gap-5">
                <p className="text-md font-md">Do You Provide Design Proposals to Clients?</p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="proposalsToClients"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={proposalsToClients}
                        onChange={() => setProposalsToClients(true)}
                      />
                      {proposalsToClients && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="proposalsToClients"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!proposalsToClients}
                        onChange={() => setProposalsToClients(false)}
                      />
                      {!proposalsToClients && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-[55%] flex-col gap-4">
              {/* Free Initial Consultation */}
              <div className="flex flex-col gap-5">
                <p className="text-md font-md">Do You Provide Free Initial Consultation?</p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="freeInitialConsultation"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={freeInitialConsultation}
                        onChange={() => setFreeInitialConsultation(true)}
                      />
                      {freeInitialConsultation && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="freeInitialConsultation"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!freeInitialConsultation}
                        onChange={() => setFreeInitialConsultation(false)}
                      />
                      {!freeInitialConsultation && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-max items-start justify-between md:flex-row">
            <div className="flex min-w-[5%] flex-col gap-">
              {/* Booking Deposit */}
              <div className="flex flex-col gap-5">
                <p className="text-md font-md">Do You Require Any Booking Deposit For Your Services?</p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="bookingDeposit"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={bookingDeposit}
                        onChange={() => setBookingDeposit(true)}
                      />
                      {bookingDeposit && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="bookingDeposit"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!bookingDeposit}
                        onChange={() => setBookingDeposit(false)}
                      />
                      {!bookingDeposit && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-[57.5%]  flex-col gap-5">
              <div className="flex flex-col gap-5">
                <p className="text-md w-[70%] font-md">
                  Are You Available For Destination Events or Out Of Town Bookings ?
                </p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="availablefordestinationevents"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={availablefordestinationevents}
                        onChange={(e) => {
                          e.preventDefault();
                          setavailablefordestinationevents(true);
                        }}
                      />
                      {/* Add the inner circle to simulate padding */}
                      {availablefordestinationevents && (
                        <center><div className="absolute  w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div></center>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="availablefordestinationevents"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!availablefordestinationevents}
                        onChange={(e) => {
                          e.preventDefault();
                          setavailablefordestinationevents(false);
                        }}
                      />
                      {/* Add the inner circle to simulate padding */}
                      {!availablefordestinationevents && (
                        <center><div className="absolute  w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div></center>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-max items-start justify-between gap-5 md:flex-row">
            <div className="flex justify-between w-max gap-4">

              {/* Advance Setup */}
              <div className="flex flex-col min-w-[66.4%] gap-5">
                <p className="text-md font-md">Do You Provide Advance Set-Up?</p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="advanceSetup"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={advanceSetup}
                        onChange={() => setAdvanceSetup(true)}
                      />
                      {advanceSetup && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="advanceSetup"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!advanceSetup}
                        onChange={() => setAdvanceSetup(false)}
                      />
                      {!advanceSetup && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>

              {/* Post-Production Services */}
              <div className="flex min-w-[75%] flex-col gap-5">
                <p className="text-md font-md">Do You Offer Post-Production Services?</p>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="postproductionservices"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={postproductionservices}
                        onChange={() => setpostproductionservices(true)}
                      />
                      {postproductionservices && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">Yes</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex justify-center items-center h-4 w-4">
                      <input
                        type="radio"
                        name="postproductionservices"
                        className="appearance-none h-4 w-4 border border-black checked:border-[#2E3192] rounded-full checked:bg-white focus:outline-none"
                        checked={!postproductionservices}
                        onChange={() => setpostproductionservices(false)}
                      />
                      {!postproductionservices && (
                        <div className="absolute w-2 h-2 inset-1 bg-[#2E3192] rounded-full"></div>
                      )}
                    </div>
                    <label className="text-sm">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          Back
        </button>
        <button
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page4;