"use client";

import React, { useEffect } from "react";
import FileInput from "@/components/fileInput";

interface FormState {
  termsConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  insurancePolicy: string | File | File[];
}

interface PageProps {
  handleContinue: () => void;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  termsConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  insurancePolicy: string | File | File[];
}

const Page4: React.FC<PageProps> = ({
  handleContinue,
  formState,
  updateFormState,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll scrollbar-hide rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start">
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">Basic Details</h1>

        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col items-start justify-center">
            <p className="mb-2 text-lg font-semibold">Terms & Conditions</p>
            <FileInput
              label="tnc"
              onFileSelect={(file) => {
                updateFormState({ termsConditions: file });
              }}
              multiple={false}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="mt-2 text-lg">or Provide Via</p>
            <textarea
              cols={30}
              rows={4}
              placeholder="Enter your venue details"
              value={
                typeof formState.termsConditions === "string"
                  ? formState.termsConditions
                  : Array.isArray(formState.termsConditions)
                    ? formState.termsConditions
                        .map((file: File) => file.name)
                        .join(", ")
                    : (formState.termsConditions as File)?.name
              }
              onChange={(e) => {
                updateFormState({ termsConditions: e.target.value });
              }}
              className="mt-2 w-[100%] rounded-xl border-2 border-gray-300 p-3"
            ></textarea>
          </div>

          <div className="flex min-w-[40%] flex-col items-start justify-center">
            <p className="mb-2 text-lg font-semibold">Cancellation Policies</p>
            <FileInput
              label="cancellation policy"
              multiple={false}
              onFileSelect={(file) => {
                updateFormState({ cancellationPolicy: file });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="mt-2 text-lg">or Provide Via</p>
            <textarea
              cols={30}
              rows={4}
              placeholder="Enter your venue details"
              value={
                typeof formState.cancellationPolicy === "string"
                  ? formState.cancellationPolicy
                  : Array.isArray(formState.cancellationPolicy)
                    ? formState.cancellationPolicy
                        .map((file: File) => file.name)
                        .join(", ")
                    : (formState.cancellationPolicy as File)?.name
              }
              onChange={(e) => {
                updateFormState({ cancellationPolicy: e.target.value });
              }}
              className="mt-2 w-[100%] rounded-xl border-2 border-gray-300 p-3"
            ></textarea>
          </div>
        </div>

        <div className="flex w-[40%] min-w-[40%] flex-col items-start justify-center">
          <p className="mb- text-lg font-semibold">Insurance Coverage Policy</p>
          <FileInput
            label="insurance policy"
            onFileSelect={(file) => {
              updateFormState({ insurancePolicy: file });
            }}
            acceptedFileTypes="image/png, .pdf, image/jpg"
            multiple={false}
          />
          <p className="mt-2 text-lg">or Provide Via</p>
          <textarea
            cols={30}
            rows={4}
            placeholder="Enter your venue details"
            value={
              typeof formState.insurancePolicy === "string"
                ? formState.insurancePolicy
                : Array.isArray(formState.insurancePolicy)
                  ? formState.insurancePolicy
                      .map((file: File) => file.name)
                      .join(", ")
                  : (formState.insurancePolicy as File)?.name
            }
            onChange={(e) => {
              updateFormState({ insurancePolicy: e.target.value });
            }}
            className="mt-2 w-[100%] rounded-xl border-2 border-gray-300 p-3"
          ></textarea>
        </div>
        <div className="items-strech mt-9 flex flex-row gap-7 self-end">
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
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
  );
};

export default Page4;
