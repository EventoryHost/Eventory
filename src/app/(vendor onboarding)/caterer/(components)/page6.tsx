"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";

interface Page6Props {
  tastingSessions: boolean;
  setTastingSessions: (value: boolean) => void;
  businessLicenses: boolean;
  setBusinessLicenses: (value: boolean) => void;
  foodSafety: boolean;
  setFoodSafety: (value: boolean) => void;
  handleContinue: () => void;
}

const Page6 = ({
  tastingSessions,
  setTastingSessions,
  businessLicenses,
  setBusinessLicenses,
  foodSafety,
  setFoodSafety,
  handleContinue,
}: Page6Props) => {
  return (
    <form className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden overflow-x-hidden lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Additional Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Tasting Sessions</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="tastingSessionsYes"
                      type="radio"
                      name="tastingSessions"
                      value="true"
                      checked={tastingSessions}
                      onChange={() => setTastingSessions(true)}
                    />
                    <label htmlFor="tastingSessionsYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="tastingSessionsNo"
                      type="radio"
                      name="tastingSessions"
                      value="false"
                      checked={!tastingSessions}
                      onChange={() => setTastingSessions(false)}
                    />
                    <label htmlFor="tastingSessionsNo">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Catering Service Images</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Business Licenses</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessLicenseYes"
                      type="radio"
                      name="businessLicense"
                      value="true"
                      checked={businessLicenses}
                      onChange={() => setBusinessLicenses(true)}
                    />
                    <label htmlFor="businessLicenseYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessLicenseNo"
                      type="radio"
                      name="businessLicense"
                      value="false"
                      checked={!businessLicenses}
                      onChange={() => setBusinessLicenses(false)}
                    />
                    <label htmlFor="businessLicenseNo">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Videos of Event Setups</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-7">
                <p className="text-lg">Food Safety Certificates</p>
                <div className="flex">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="foodSafetyYes"
                      type="radio"
                      name="foodSafety"
                      value="true"
                      checked={foodSafety}
                      onChange={() => setFoodSafety(true)}
                    />
                    <label htmlFor="foodSafetyYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="foodSafetyNo"
                      type="radio"
                      name="foodSafety"
                      value="false"
                      checked={!foodSafety}
                      onChange={() => setFoodSafety(false)}
                    />
                    <label htmlFor="foodSafetyNo">No</label>
                  </div>
                </div>
                <div className="flex min-w-[40%] flex-col items-start justify-center">
                  <label htmlFor="category">Terms & Conditions</label>
                  <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                    <Upload />
                    Upload
                  </button>
                  <p className="mt-5 text-lg">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={7}
                    placeholder="Enter your venue details"
                    className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Cancellation Policies</label>
                <button className="mt-5 flex items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  <Upload />
                  Upload
                </button>
                <p className="mt-5 text-lg">or Provide Via</p>
                <textarea
                  cols={30}
                  rows={7}
                  placeholder="Enter your venue details"
                  className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                ></textarea>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4"></div>
              <div className="flex flex-col gap-4 xs:min-w-[40%]"></div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
    </form>
  );
};

export default Page6;