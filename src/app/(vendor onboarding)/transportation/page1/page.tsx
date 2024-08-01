"use client";
import StepBar from "@/app/(components)/stepBar";
import { Combobox } from "@/components/ui/combobox";
import { Upload } from "lucide-react";
import React, { useState } from "react";

const workerOptions = [
  { value: "0-2 Members", label: "0-2 Members " },
  { value: "2-4 Members", label: "2-4 Members" },
  { value: "4-7 Members", label: "4-7 Members" },
  { value: "More than 10 Members", label: "More than 10 Members" },
];

const Page = () => {
  const [contactName, setcontactName] = useState("");
  const [desc, setDesc] = useState("");
  const [workers, setWorkers] = useState("");
  const [url, seturl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Name:", contactName);
    console.log("Category:", workers);
    console.log("Description:", desc);
    console.log("URL:", url);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar />
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Fill out your Basic details
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Please provide the details of the business offered by your company.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="contactName">Contact Person Name</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Number of workers</label>
                <Combobox
                  options={workerOptions.map(
                    (worker: { value: any; label: any }) => ({
                      value: worker.value,
                      label: worker.label,
                    }),
                  )}
                  placeholder="select your category"
                  setFunction={setWorkers}
                  className="flex items-center justify-between rounded-xl border-2 py-6 text-gray-500 hover:text-[#2E3192]"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Description of your past work</label>
                <input
                  onChange={(e) => setDesc(e.target.value)}
                  id="url"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 pb-28 pt-3 outline-none"
                  placeholder="Enter your Description"
                />
              </div>
              <div className="mt-5 flex flex-col gap-4 xs:min-w-[40%]">
                <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                  <div className="flex min-w-full flex-col items-start justify-between gap-2">
                    <p className="text-[16px]">Portfolio of past work</p>
                    <p className="text-gray-500">PNG, PDF, JPG</p>
                    <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                      {" "}
                      <Upload />
                      Upload
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex min-w-[40%] flex-col">
                    <label htmlFor="url">or provide via</label>
                    <input
                      onChange={(e) => seturl(e.target.value)}
                      id="url"
                      type="text"
                      className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                      placeholder="Enter url"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
