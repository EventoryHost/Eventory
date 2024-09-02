"use client";

import React, { useState, ChangeEvent } from "react";
import { Percent, Upload } from "lucide-react";
import PriceSlider from "../(components)/priceSlider";
import Checkbox from "@mui/material/Checkbox";
import Percentage from "../(components)/percentage";
import { set } from "date-fns";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {}
interface Page3Props {
  advancePayment: number;
  setAdvancePayment: (newValue: number) => void;
  hourlyPackage: Package[];
  setHourlyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  dealPackage: Package[];
  setdealPackage: React.Dispatch<React.SetStateAction<Package[]>>;
  ratesbyWorker: Package[];
  setratesbyWorker: React.Dispatch<React.SetStateAction<Package[]>>;
  handlePackageChange: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => void;
  addPackage: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => void;
}

const Page: React.FC<Page3Props> = ({
  advancePayment,
  setAdvancePayment,
  hourlyPackage,
  setHourlyPackages,
  dealPackage,
  setdealPackage,
  ratesbyWorker,
  setratesbyWorker,
  handlePackageChange,
  addPackage,
}) => {
  const handlePercentageChange = (newValue: number) => {
    setAdvancePayment(newValue);
  };

  const handleMinPriceChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    packages: Package[],
    index: number,
    value: string,
  ) => {
    const newValue = parseInt(value, 10);
    const updatedPriceRange: [number, number] = [
      newValue,
      packages[index].priceRange[1],
    ];
    handlePackageChange(setPackages, index, "priceRange", updatedPriceRange);
  };

  const handleMaxPriceChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    packages: Package[],
    index: number,
    value: string,
  ) => {
    const newValue = parseInt(value, 10);
    const updatedPriceRange: [number, number] = [
      packages[index].priceRange[0],
      newValue,
    ];
    handlePackageChange(setPackages, index, "priceRange", updatedPriceRange);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("hourlyPackage", hourlyPackage);
    console.log("dealPackage", dealPackage);
    console.log("ratesbyWorker", ratesbyWorker);
    console.log("advancePayment", advancePayment);
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
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Fill out your pricing and policy
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Please provide the details of the venue offered by your company.
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
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            {/* makeup artist type*/}
            {hourlyPackage.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`hourlyPackageType${index}`}>
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#2E3192",
                        },
                      }}
                    />
                    Hourly Package Rates
                  </label>
                  <input
                    id={`hourlyPackage${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of artists , Eg: Bridal makeup artists"
                    value={pkg.type}
                    onChange={(e) =>
                      handlePackageChange(
                        setHourlyPackages,
                        index,
                        "type",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
                  <label htmlFor={`hourlyPriceRange${index}`}>
                    Select price range
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      id={`hourlyMinPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Min price"
                      value={pkg.priceRange[0] === 0 ? "" : pkg.priceRange[0]}
                      onChange={(e) =>
                        handleMinPriceChange(
                          setHourlyPackages,
                          hourlyPackage,
                          index,
                          e.target.value,
                        )
                      }
                    />
                    <input
                      id={`hourlyMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Max price"
                      value={pkg.priceRange[1] === 0 ? "" : pkg.priceRange[1]}
                      onChange={(e) =>
                        handleMaxPriceChange(
                          setHourlyPackages,
                          hourlyPackage,
                          index,
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-col items-start justify-between gap-2">
                <p className="text-gray-500">Or Provide Via</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                  onClick={() => addPackage(setHourlyPackages)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.9H18"
                      stroke="#2B3F6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* hourly Packages */}
            {dealPackage.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`hourlyPackages${index}`}>
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#2E3192",
                        },
                      }}
                    />
                    Deal package rates
                  </label>
                  <input
                    id={`dealPackage${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
                    value={pkg.type}
                    onChange={(e) =>
                      handlePackageChange(
                        setdealPackage,
                        index,
                        "type",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
                  <label htmlFor={`hourlyPackages${index}`}>
                    Select price range
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      id={`dealMinPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Min price"
                      value={pkg.priceRange[0] === 0 ? "" : pkg.priceRange[0]}
                      onChange={(e) =>
                        handleMinPriceChange(
                          setdealPackage,
                          dealPackage,
                          index,
                          e.target.value,
                        )
                      }
                    />
                    <input
                      id={`dealMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Max price"
                      value={pkg.priceRange[1] === 0 ? "" : pkg.priceRange[1]}
                      onChange={(e) =>
                        handleMaxPriceChange(
                          setdealPackage,
                          dealPackage,
                          index,
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-col items-start justify-between gap-2">
                <p className="text-gray-500">Or Provide Via</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                  onClick={() => addPackage(setdealPackage)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.9H18"
                      stroke="#2B3F6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* dialy package charges */}
            {ratesbyWorker.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`dailyPackages${index}`}>
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#2E3192",
                        },
                      }}
                    />
                    Rates by Worker
                  </label>
                  <input
                    id={`setratesbyWorker${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of Package , Eg: Week days"
                    value={pkg.type}
                    onChange={(e) =>
                      handlePackageChange(
                        setratesbyWorker,
                        index,
                        "type",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
                  <label htmlFor={`setratesbyWorker${index}`}>
                    Select price range
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      id={`ratesbyWorker${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Min price"
                      value={pkg.priceRange[0] === 0 ? "" : pkg.priceRange[0]}
                      onChange={(e) =>
                        handleMinPriceChange(
                          setratesbyWorker,
                          ratesbyWorker,
                          index,
                          e.target.value,
                        )
                      }
                    />
                    <input
                      id={`ratesbyWorker${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Max price"
                      value={pkg.priceRange[1] === 0 ? "" : pkg.priceRange[1]}
                      onChange={(e) =>
                        handleMaxPriceChange(
                          setratesbyWorker,
                          ratesbyWorker,
                          index,
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-col items-start justify-between gap-2">
                <p className="text-gray-500">Or Provide Via</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                  onClick={() => addPackage(setratesbyWorker)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.9H18"
                      stroke="#2B3F6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label className="flex flex-row">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#2E3192",
                      },
                    }}
                  />
                  <p className="flex items-center font-poppins text-lg font-semibold">
                    Advance Payment
                  </p>
                </label>
                <div className="flex flex-row gap-5">
                  <p className="">set percentage(%)</p>
                  {/* <div className="border-2 rounded-xl text-sm">{advancePayment}</div> */}
                </div>
                <Percentage
                  initialValue={advancePayment}
                  onChange={handlePercentageChange}
                />
              </div>
            </div>

            {/* continue and skip button */}
            {/* <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
