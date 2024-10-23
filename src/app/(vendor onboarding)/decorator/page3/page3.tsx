"use client";

import React, { useEffect, useState } from "react";
import Appetizers from "../../(components)/Appetizers";
import FileInput from "@/components/fileInput";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import jwt from "jsonwebtoken";
import {
  fetchDecoratorData,
  saveDecoratorDetails,
} from "@/redux/decoratorSlice";

const _themesElement = [
  "Backdrop",
  "StageDecor",
  "Table Setting",
  "Prop Selection",
  "Lighting Effects",
  "Others",
];

interface FormState {
  themephotos: string | File | File[];
  themevideos: string | File | File[];
}

interface Page3Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  setCurrentPage,
  themesElements,
  setThemesElements,
  handleContinue,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector(
    (state: RootState) => state.decorator,
  );

  function getVendorId2(): string | null {
    if (typeof window === "undefined") {
      // This code is running on the server, so skip localStorage access
      return null;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }

    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
        email?: string;
      };
      if (!decodedToken || !decodedToken.userId) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  const userId = getVendorId2() || "";

  useEffect(() => {
    // Fetch decorator data when component mounts
    if (userId) {
      dispatch(fetchDecoratorData(userId));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched formData:", formData);

    // Check if formData is defined and log each property
    if (formData) {
      Object.entries(formData).forEach(([key, value]) => {
        console.log(`Key: ${key}, Value: ${value}`);
      });

      if (formData.themesElements) setThemesElements(formData.themesElements);
      updateFormState({
        themephotos: formData.themephotos,
        themevideos: formData.themevideos,
      });
    } else {
      console.log("formData is undefined or null");
    }
  }, [formData]);

  const onContinue = () => {
    const userId = getVendorId2() || "";
    const decoratorDetails = {
      themesElements,
      themephotos: formState.themephotos,
      themevideos: formState.themevideos,
    };

    dispatch(saveDecoratorDetails({ userId, data: decoratorDetails }) as any);
    handleContinue();
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex items-center justify-start gap-5">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            />
            <h1 className="text-3xl font-semibold">
              Theme Elements<span className="text-red-600">*</span>
            </h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_themesElement"}
                appetizers={_themesElement}
                selectedAppetizers={themesElements}
                setSelectedAppetizers={setThemesElements}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[45%] flex-col gap-2">
                <label
                  className="flex items-center justify-start gap-2 text-base font-medium"
                  htmlFor="category"
                >
                  <p>
                    Theme Photos<span className="text-red-600">*</span>
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.33398"
                      y="1.33398"
                      width="13.3333"
                      height="13.3333"
                      rx="6.66667"
                      stroke="#2B3F6C"
                    />
                    <path
                      d="M8.33398 11.334L8.33398 7.33398"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00065 7.33398L8.33398 7.33398"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 5.33464L8.33398 4.66797"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="themephotos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ themephotos: newFiles });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-2">
                <label
                  className="flex items-center justify-start gap-2 text-base font-medium"
                  htmlFor="category"
                >
                  <p>
                    Theme Videos<span className="text-red-600">*</span>
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.33398"
                      y="1.33398"
                      width="13.3333"
                      height="13.3333"
                      rx="6.66667"
                      stroke="#2B3F6C"
                    />
                    <path
                      d="M8.33398 11.334L8.33398 7.33398"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.00065 7.33398L8.33398 7.33398"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33398 5.33464L8.33398 4.66797"
                      stroke="#2B3F6C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
                <p className="text-gray-500">MP4 MKV</p>
                <FileInput
                  label="themevideos"
                  onFileSelect={(file: File | File[]) => {
                    const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                    updateFormState({ themevideos: newFiles });
                  }}
                  acceptedFileTypes="video/mp4, video/x-msvideo, .mp4, .avi"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[45%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ themephotos: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[45%] flex-col gap-2">
                <label className="text-base font-medium" htmlFor="category">
                  Or Continue Via
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter Your Link"
                  onChange={(e) =>
                    updateFormState({ themevideos: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              >
                Back
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={onContinue}
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

export default Page3;
