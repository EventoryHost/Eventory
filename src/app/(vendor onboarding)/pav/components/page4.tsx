"use client";

import { CheckCircle, Upload } from "lucide-react";
import React, { useState } from "react";
import FileInput from "@/components/fileInput";

type Page1Props = {
  proposalsToClients: boolean;
  setProposalsToClients: (proposalsToClients: boolean) => void;
  freeInitialConsultation: boolean;
  setFreeInitialConsultation: (freeInitialConsultation: boolean) => void;
  advanceSetup: boolean;
  setAdvanceSetup: (advanceSetup: boolean) => void;
  collaborationWithOtherVendors: boolean;
  setCollaborationWithOtherVendors: (
    collaborationWithOtherVendors: boolean,
  ) => void;
  setupsInstallations: boolean;
  setSetupsInstallations: (setupsInstallations: boolean) => void;
  bookingDeposit: boolean;
  setBookingDeposit: (bookingDeposit: boolean) => void;
  cancellationPolicy: string | File;
  setCancellationPolicy: (cancellationPolicy: string | File) => void;
  tnc: string | File;
  setTnc: (tnc: string | File) => void;
  handleContinue: () => void;
};

const Page4 = ({
  proposalsToClients,
  setProposalsToClients,
  freeInitialConsultation,
  setFreeInitialConsultation,
  advanceSetup,
  setAdvanceSetup,
  collaborationWithOtherVendors,
  setCollaborationWithOtherVendors,
  setupsInstallations,
  setSetupsInstallations,
  bookingDeposit,
  setBookingDeposit,
  cancellationPolicy,
  setCancellationPolicy,
  tnc,
  setTnc,
  handleContinue,
}: Page1Props) => {
  const [cancellationFileName, setCancellationFileName] = useState<string>("");
  const [tncFileName, setTncFileName] = useState<string>("");
  return (
    <div
      className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleContinue();
      }}
    >
      <h1 className="text-3xl font-semibold">Basic Details</h1>
      <div className="flex min-w-[100%] flex-col items-start justify-between gap-9 md:flex-row">
        <div className="flex h-[100%] flex-col items-start justify-between gap-9 md:w-[50%]">
          {/* Proposals to Clients */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              Do you provide design proposals to clients?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="proposalsToClients"
                  checked={proposalsToClients}
                  onChange={(e) => {
                    e.preventDefault();
                    setProposalsToClients(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="proposalsToClients"
                  checked={!proposalsToClients}
                  onChange={(e) => {
                    e.preventDefault();
                    setProposalsToClients(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>

          {/* Free Initial Consultation */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              Do you provide free initial consultation?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="freeInitialConsultation"
                  checked={freeInitialConsultation}
                  onChange={(e) => {
                    e.preventDefault();
                    setFreeInitialConsultation(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="freeInitialConsultation"
                  checked={!freeInitialConsultation}
                  onChange={(e) => {
                    e.preventDefault();
                    setFreeInitialConsultation(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>

          {/* Advance Setup */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">Do you provide advance setup?</p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="advanceSetup"
                  checked={advanceSetup}
                  onChange={(e) => {
                    e.preventDefault();
                    setAdvanceSetup(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="advanceSetup"
                  checked={!advanceSetup}
                  onChange={(e) => {
                    e.preventDefault();
                    setAdvanceSetup(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>

          {/* Collaboration with Other Vendors */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              Do you collaborate with other vendors?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="collaborationWithOtherVendors"
                  checked={collaborationWithOtherVendors}
                  onChange={(e) => {
                    e.preventDefault();
                    setCollaborationWithOtherVendors(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="collaborationWithOtherVendors"
                  checked={!collaborationWithOtherVendors}
                  onChange={(e) => {
                    e.preventDefault();
                    setCollaborationWithOtherVendors(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>

          {/* Setups & Installations */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              Do you provide setup & installation?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="setupsInstallations"
                  checked={setupsInstallations}
                  onChange={(e) => {
                    e.preventDefault();
                    setSetupsInstallations(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="setupsInstallations"
                  checked={!setupsInstallations}
                  onChange={(e) => {
                    e.preventDefault();
                    setSetupsInstallations(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>

          {/* Booking Deposit */}
          <div className="flex flex-col gap-5">
            <p className="text-md font-md">
              Do you require any booking deposit for your services?
            </p>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="bookingDeposit"
                  checked={bookingDeposit}
                  onChange={(e) => {
                    e.preventDefault();
                    setBookingDeposit(true);
                  }}
                />
                <label className="text-sm">Yes</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="bookingDeposit"
                  checked={!bookingDeposit}
                  onChange={(e) => {
                    e.preventDefault();
                    setBookingDeposit(false);
                  }}
                />
                <label className="text-sm">No</label>
              </div>
            </div>
          </div>
        </div>

        {/* File Upload & Text Areas */}
        <div className="flex h-[100%] flex-col items-start justify-start gap-9 md:w-[50%]">
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="cancellationPolicy">Cancellation Policy</label>
            <FileInput
              label="Cancellation Policy"
              onFileSelect={setCancellationPolicy}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={1}
              onChange={(e) => setCancellationPolicy(e.target.value)}
              placeholder="Enter cancellation policy"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
            />
          </div>

          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="tnc">Terms & Conditions</label>
              <FileInput
                label="Terms & Conditions"
                onFileSelect={setTnc}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={1}
              onChange={(e) => setTnc(e.target.value)}
              placeholder="Enter terms and conditions"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="flex w-full items-center justify-center rounded-xl bg-[#2E3192] py-3 text-white hover:bg-[#2E3192]/90"
      >
        Continue
      </button>
    </div>
  );
};

export default Page4;
