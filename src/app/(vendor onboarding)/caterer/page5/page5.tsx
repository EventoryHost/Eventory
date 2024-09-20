"use client";

import Checkbox from "@mui/material/Checkbox";
import Percentage from "../../invitation/(components)/percentage";
import { FormState } from "../page";
import { ArrowLeft, SquareChevronUpIcon, X } from "lucide-react";
import Dropdown from "../../(components)/Dropdown";
import { useEffect, useState } from "react";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface PageProps {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  dailyPackages: Package[];
  setDailyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  seasonalPackages: Package[];
  setSeasonalPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  handlePackageChange: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => void;
  addPackage: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => void;
  handleContinue: () => void;
  advancePayment: number;
  setAdvancePayment: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number
}

const Page5: React.FC<PageProps> = ({
  formState,
  updateFormState,
  dailyPackages,
  setDailyPackages,
  seasonalPackages,
  setSeasonalPackages,
  handlePackageChange,
  addPackage,
  handleContinue,
  advancePayment,
  setAdvancePayment,
  setCurrentPage,
  currentPage
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

  const deletePackage = (indexToDelete: number, dailyPackages: Package[],
    setDailyPackages: React.Dispatch<React.SetStateAction<Package[]>>) => {
    const filteredPackages = dailyPackages.filter((pkg, index) => index !== indexToDelete);
    setDailyPackages(filteredPackages);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
  };

  const handlePercentageChange = (newValue: number) => {
    setAdvancePayment(newValue);
  };

  const _minorder = [
    "< 100 persons",
    "100-300 persons",
    "300-400 persons",
    "> 500 ",
  ];

  const _advbooking = [
    "Less than a week",
    "1-2 weeks",
    "More than 2 weeks"
  ]
  const [perPlateChecked, setPerPlateChecked] = useState(false);
  const [dealChecked, setdealChecked] = useState(false);
  const [advChecked, setAdvChecked] = useState(false);





  return (
    <div className="flex h-full w-full flex-col overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex  w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9]  scrollbar-hide">
        <div className="flex w-[100%] flex-col gap-10 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-4 items-center">
            <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={() => setCurrentPage(currentPage - 1)} />
            <h1 className=" text-2xl font-semibold">Additiona</h1>
          </div>
          <div className="flex min-w-full flex-col items-center gap-9 p-2">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[45%] flex-col gap-2">
                <label htmlFor="businessName" className="text-base font-medium">
                  Minimum Order Requirements<span className="text-red-500 ">*</span>
                </label>
                <Dropdown
                  options={_minorder}
                  onSelect={(option: string) => {
                    updateFormState({ minOrderReq: option })
                  }
                  }

                  placeholder="Minimum guests required"
                />
              </div>

              <div className="flex min-w-[45%] flex-col gap-2">
                <label htmlFor="businessName" className="text-base font-medium">
                  Advance Booking Period<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={_advbooking}
                  onSelect={(option: string) => {
                    updateFormState({ AdvBooking: option })
                  }
                  }

                  placeholder="Minimum booking notice (e.g. number of days) "
                />
              </div>
            </div>

          </div>


          <div className="flex  min-w-full flex-col gap-5">
            <label className=" text-lg font-semibold">
              <Checkbox
                checked={perPlateChecked}
                onChange={(e) => setPerPlateChecked(!perPlateChecked)}
                sx={{
                  "&.Mui-checked": {
                    color: "#2E3192",
                  },
                }}
              />
              Per plate rates<span className="text-red-500 ">*</span>
            </label>
            {dailyPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row p-2"
              >
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label className="self-start text-base font-semibold">
                    Name
                  </label>
                  <input
                    disabled={!perPlateChecked}
                    id={`dailyPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm  outline-none"
                    placeholder="Enter your Full Name"
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

                <div className="flex h-full min-w-[45%] gap-2">

                  <div className="flex flex-col gap-4 min-w-[45%] items-start ">
                    <label
                      htmlFor={`dailyPriceRange${index}`}

                      className="self-start text-base font-semibold">
                      Min.
                    </label>
                    <input
                      id={`dailyMinPrice${index}`}
                      disabled={!perPlateChecked}

                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Rs 200"
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
                  </div>

                  <div className="flex flex-col gap-4 min-w-[45%] items-start ">
                    <label
                      htmlFor={`dailyPriceRange${index}`}
                      className="self-start text-base font-semibold"
                    >
                      Max.
                    </label>
                    <input
                      disabled={!perPlateChecked}

                      id={`dailyMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Rs 200"
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

                  <button
                    type="button"
                    onClick={() => deletePackage(index, dailyPackages, setDailyPackages)}
                    className="cursor-pointer rounded-lg bg-[#f8dbdb] p-2 m-auto hover:shadow-xl"
                  >
                    <X className=" h-5 w-5 text-[#2E3192]" />
                  </button>
                </div>

              </div>

            ))}
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                  disabled={!perPlateChecked}

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
          <div className="flex  min-w-full flex-col  gap-5">
            <label className="self-start text-lg font-semibold">
              <Checkbox
                checked={dealChecked}
                onChange={(e) => setdealChecked(!dealChecked)}

                sx={{
                  "&.Mui-checked": {
                    color: "#2E3192",
                  },
                }}
              />
              Deal package rates<span className="text-red-500 ">*</span>
            </label>
            {seasonalPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label className="self-start text-base font-semibold">
                    Name
                  </label>
                  <input
                    id={`seasonalPackageType${index}`}
                    disabled={!dealChecked}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm  outline-none"
                    placeholder="Enter your Full Name"
                    value={pkg.type}
                    onChange={(e) =>
                      handlePackageChange(
                        setSeasonalPackages,
                        index,
                        "type",
                        e.target.value,
                      )
                    }
                  />
                </div>

                <div className="flex h-full min-w-[45%] gap-2">

                  <div className="flex flex-col gap-4 min-w-[45%] items-start ">
                    <label
                      htmlFor={`dailyPriceRange${index}`}

                      className="self-start text-base font-semibold">
                      Min.
                    </label>
                    <input
                      id={`seasonalMinPrice${index}`}
                      disabled={!dealChecked}

                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Rs 200"
                      value={pkg.priceRange[0] === 0 ? "" : pkg.priceRange[0]}
                      onChange={(e) =>
                        handleMinPriceChange(
                          setSeasonalPackages,
                          seasonalPackages,
                          index,
                          e.target.value,
                        )
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-4 min-w-[45%] items-start ">
                    <label
                      htmlFor={`dailyPriceRange${index}`}
                      className="self-start text-base font-semibold"
                    >
                      Max.
                    </label>
                    <input
                      disabled={!dealChecked}

                      id={`seasonalMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Rs 200"
                      value={pkg.priceRange[1] === 0 ? "" : pkg.priceRange[1]}
                      onChange={(e) =>
                        handleMaxPriceChange(
                          setSeasonalPackages,
                          seasonalPackages,
                          index,
                          e.target.value,
                        )
                      }
                    />

                  </div>

                  <button
                    type="button"
                    onClick={() => deletePackage(index, seasonalPackages, setSeasonalPackages)}
                    className="cursor-pointer rounded-lg bg-[#f8dbdb] p-2 m-auto hover:shadow-xl"
                  >
                    <X className=" h-5 w-5 text-[#2E3192]" />
                  </button>
                </div>



              </div>
            ))}

            <div className="flex min-w-full flex-col items-start justify-between gap-10 ">
              <div className="item-start flex flex-col justify-between gap-2">
                <button
                disabled={!dealChecked}
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
                  onClick={() => addPackage(setSeasonalPackages)}
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
              <div className="flex min-w-full flex-col gap-4">
                <label className="flex flex-row">
                  <Checkbox
                  checked={!advChecked}
                  onChange={()=>setAdvChecked(!advChecked)} 
                    sx={{
                      "&.Mui-checked": {
                        color: "#2E3192",
                      },
                    }}
                  />
                  <p className="flex items-center font-poppins text-lg font-semibold">
                    Advance Payment<span className="text-red-500 ">*</span>
                  </p>
                </label>
                <span className=" font-medium">Set Percentage({advancePayment}%)</span>
                <Percentage
                  initialValue={advancePayment}
                  onChange={handlePercentageChange}
                  disable={advChecked} 
                />
              </div>
            </div>

            <div className="items-strech  flex flex-row gap-7 self-end">

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
    </div>
  );
};

export default Page5;
