"use client";

import React from "react";
import { Upload } from "lucide-react";
import Checkbox from "@mui/material/Checkbox";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface PageProps {
  hourlyPackages: Package[];
  setHourlyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  dailyPackages: Package[];
  setDailyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  handlePackageChange: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => void;
  addPackage: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => void;
  handleContinue: (e: React.FormEvent) => Promise<void>;
}

const Page5: React.FC<PageProps> = ({
  hourlyPackages,
  setHourlyPackages,
  dailyPackages,
  setDailyPackages,
  handlePackageChange,
  addPackage,
  handleContinue,
}) => {
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
    console.log("Hourly Packages:", hourlyPackages);
    console.log("Daily Packages:", dailyPackages);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-y-scroll lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center gap-5 bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Pricing Structure</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            {hourlyPackages.map((pkg, index) => (
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
                    Hourly package rates
                  </label>
                  <input
                    id={`hourlyPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
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
                          hourlyPackages,
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
                          hourlyPackages,
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
                      d="M12 5.5V17.5M6 11.5H18"
                      stroke="#2E3192"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            {dailyPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`dailyPackageType${index}`}>
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#2E3192",
                        },
                      }}
                    />
                    Daily package rates
                  </label>
                  <input
                    id={`dailyPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
                    value={pkg.type}
                    onChange={(e) =>
                      handlePackageChange(
                        setDailyPackages,
                        index,
                        "type",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
                  <label htmlFor={`dailyPriceRange${index}`}>
                    Select price range
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      id={`dailyMinPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Min price"
                      value={pkg.priceRange[0] === 0 ? "" : pkg.priceRange[0]}
                      onChange={(e) =>
                        handleMinPriceChange(
                          setDailyPackages,
                          dailyPackages,
                          index,
                          e.target.value,
                        )
                      }
                    />
                    <input
                      id={`dailyMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Max price"
                      value={pkg.priceRange[1] === 0 ? "" : pkg.priceRange[1]}
                      onChange={(e) =>
                        handleMaxPriceChange(
                          setDailyPackages,
                          dailyPackages,
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
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                  onClick={() => addPackage(setDailyPackages)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.5V17.5M6 11.5H18"
                      stroke="#2E3192"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="h-[4rem] w-[100%] rounded-xl bg-[#2E3192] p-3 text-sm font-semibold text-white outline-none md:w-[40%]"
          onClick={(e) => {
            e.preventDefault();
            handleContinue(e);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page5;
