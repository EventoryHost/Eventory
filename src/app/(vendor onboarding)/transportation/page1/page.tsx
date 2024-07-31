"use client";
import StepBar from "@/app/(components)/stepBar";
import { Combobox } from "@/components/ui/combobox";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const workerOptions = [
  { value: "0-2 Members", label: "0-2 Members " },
  { value: "2-4 Members", label: "2-4 Members" },
  { value: "4-7 Members", label: "4-7 Members" },
  { value: "More than 10 Members", label: "More than 10 Members" },
];

const Page = () => {
  const router = useRouter();
  const [contactName, setContactName] = useState("");
  const [desc, setDesc] = useState("");
  const [workers, setWorkers] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Create a ref for the file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Name:", contactName);
    console.log("Category:", workers);
    console.log("Description:", desc);
    console.log("URL:", url);
    console.log("File:", file);
    router.push("/transportation/page2");
  };

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Function to trigger file input click
  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={1} />
        </div>
        <div className="ml-8 flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Basic details
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
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
      <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full w-full flex-col gap-5">
            <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[48%]">
                <label htmlFor="contactName">Contact Person Name</label>
                <input
                  onChange={(e) => setContactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex w-full flex-col gap-4 md:w-[48%]">
                <label htmlFor="category">Number of workers</label>
                <Combobox
                  options={workerOptions.map((worker) => ({
                    value: worker.value,
                    label: worker.label,
                  }))}
                  placeholder="Select your category"
                  setFunction={setWorkers}
                  className="flex items-center justify-between rounded-xl border-2 py-6 text-gray-500 hover:text-[#2E3192]"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-[48%]">
                <label htmlFor="desc">Description of your past work</label>
                <input
                  onChange={(e) => setDesc(e.target.value)}
                  id="desc"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 pb-28 pt-3 outline-none"
                  placeholder="Enter your Description"
                />
              </div>
              <div className="mt-5 flex w-full flex-col gap-4 md:w-[48%]">
                <div className="flex flex-col items-start gap-5">
                  <div className="flex w-full flex-col items-start gap-2">
                    <p className="text-[16px]">Portfolio of past work</p>
                    <p className="text-gray-500">PNG, PDF, JPG</p>
                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <button
                      onClick={handleFileClick}
                      className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white"
                    >
                      <Upload size={24} />
                      Upload
                    </button>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <label htmlFor="url">Or provide via URL</label>
                  <input
                    onChange={(e) => setUrl(e.target.value)}
                    id="url"
                    type="text"
                    className="mt-2 w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter URL"
                  />
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
                className="rounded-xl bg-[rgb(46,49,146)] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
