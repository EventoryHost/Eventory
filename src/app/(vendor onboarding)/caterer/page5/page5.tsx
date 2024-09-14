"use client";

import Checkbox from "@mui/material/Checkbox";
import Percentage from "../../invitation/(components)/percentage";
import { FormState } from "../page";

interface Package {
  package_name: string;
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
  setAdvancePayment
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
    console.log("Daily Packages:", dailyPackages);
    console.log("Seasonal Packages:", seasonalPackages);
  };

  const handlePercentageChange = (newValue: number) => {
    setAdvancePayment(newValue);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-y-scroll py-5 lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center gap-5 bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
              <div
                
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label className="self-start font-semibold text-lg"
                  >
                    Minimum Order Requirements
                  </label>
                  <input
                    id={``}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Minimum guests required"
                    onChange={(e) =>
                      updateFormState({  minOrderReq:e.target.value })
                    }
                  />
                </div>
                <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-6">
                  <label
                    className="self-start font-semibold text-lg"
                  >
                    Advance Booking Period
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Minimum booking notice (e.g. number of days) "
                      onChange={(e) =>
                        updateFormState({AdvBooking:e.target.value})
                      }
                    />
                  </div>
                </div>
              </div>
           

          </div>
        </div>

        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <label className="self-start font-semibold text-lg" >
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#2E3192",
                  },
                }}
              />
              Per plate rates
            </label>
            {dailyPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >

                <div className="flex min-w-[40%] flex-col gap-4">
                  <label className="self-start font-semibold text-lg" >

                    Name
                  </label>
                  <input
                    id={`dailyPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
                    value={pkg.package_name}
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

                <div className="flex h-full min-w-[40%] flex-col justify-between">
                  <label htmlFor={`dailyPriceRange${index}`} className="self-start font-semibold text-lg">
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

        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <label className="self-start font-semibold text-lg">
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#2E3192",
                  },
                }}
              />
              Deal package rates
            </label>
            {seasonalPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label className="self-start font-semibold text-lg">
                    Name
                  </label>
                  <input
                    id={`seasonalPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
                    value={pkg.package_name}
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

                <div className="flex h-full min-w-[40%] flex-col  justify-between">
                  <label htmlFor={`seasonalPriceRange${index}`} className="self-start font-semibold text-lg">
                    Select price range
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
                    <input
                      id={`seasonalMinPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Min price"
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
                    <input
                      id={`seasonalMaxPrice${index}`}
                      type="number"
                      className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                      placeholder="Max price"
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
                </div>

                

              </div>
              
            ))}

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
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="item-start flex flex-col justify-between gap-2">
                <button
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
      </div>
    </div>
  );
};

export default Page5;
