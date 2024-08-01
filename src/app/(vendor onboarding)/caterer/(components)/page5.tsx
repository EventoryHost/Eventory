// "use client";

// import React from "react";
// import { Combobox } from "@/components/ui/combobox";

// const cuisineOptions = [
//   { value: "north", label: "North Indian" },
//   { value: "south", label: "South Indian" },
//   { value: "chinese", label: "Chinese" },
//   { value: "italian", label: "Italian" },
// ];

// interface Page5Props {
//   businessName: string;
//   setBusinessName: (name: string) => void;
//   category: string;
//   setCategory: (category: string) => void;
//   gstin: string;
//   setGstin: (gstin: string) => void;
//   years: string;
//   setYears: (years: string) => void;
//   businessAddress: string;
//   setBusinessAddress: (address: string) => void;
//   landmark: string;
//   setLandmark: (landmark: string) => void;
//   pinCode: string;
//   setPinCode: (pinCode: string) => void;
//   cities: string;
//   setCities: (cities: string) => void;
//   handleContinue: () => void;
// }

// const Page5 = ({
//   businessName,
//   setBusinessName,
//   category,
//   setCategory,
//   gstin,
//   setGstin,
//   years,
//   setYears,
//   businessAddress,
//   setBusinessAddress,
//   landmark,
//   setLandmark,
//   pinCode,
//   setPinCode,
//   cities,
//   setCities,
//   handleContinue,
// }: Page5Props) => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleContinue();
//   };

//   return (
//     <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
//       <div className="flex min-w-[100%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
//         <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
//           <h1 className="text-3xl font-semibold">Basic Details</h1>
//           <div className="flex min-h-full min-w-full flex-col items-center gap-5">
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="businessName">Caterer Name (Manager)</label>
//                 <input
//                   id="businessName"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter your business name"
//                   value={businessName}
//                   onChange={(e) => setBusinessName(e.target.value)}
//                 />
//               </div>
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="category">Cuisine Specialties</label>
//                 <Combobox
//                   options={cuisineOptions}
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Select your cuisine specialties"
//                   setFunction={setCategory}
//                 />
//               </div>
//             </div>
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="gstin">GSTIN</label>
//                 <input
//                   id="gstin"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter GSTIN"
//                   value={gstin}
//                   onChange={(e) => setGstin(e.target.value)}
//                 />
//               </div>
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="years">Years in Operation</label>
//                 <input
//                   id="years"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter years in operation"
//                   value={years}
//                   onChange={(e) => setYears(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="businessAddress">Business Address</label>
//                 <input
//                   id="businessAddress"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter business address"
//                   value={businessAddress}
//                   onChange={(e) => setBusinessAddress(e.target.value)}
//                 />
//               </div>
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="landmark">Landmark</label>
//                 <input
//                   id="landmark"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter landmark"
//                   value={landmark}
//                   onChange={(e) => setLandmark(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="pinCode">Pin Code</label>
//                 <input
//                   id="pinCode"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter pin code"
//                   value={pinCode}
//                   onChange={(e) => setPinCode(e.target.value)}
//                 />
//               </div>
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="cities">Operational Cities</label>
//                 <input
//                   id="cities"
//                   type="text"
//                   className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
//                   placeholder="Enter operational cities"
//                   value={cities}
//                   onChange={(e) => setCities(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="items-strech mt-9 flex flex-row gap-7 self-end">
//               <button
//                 className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[6rem] md:px-3 md:py-3"
//                 type="button"
//               >
//                 Back
//               </button>
//               <button
//                 className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[6rem] md:px-3 md:py-3"
//                 type="button"
//                 onClick={handleSubmit}
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page5;

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
}

const Page5: React.FC<PageProps> = ({
  hourlyPackages,
  setHourlyPackages,
  dailyPackages,
  setDailyPackages,
  seasonalPackages,
  setSeasonalPackages,
  handlePackageChange,
  addPackage,
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
    console.log("Seasonal Packages:", seasonalPackages);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-y-scroll lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center gap-5 bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            {hourlyPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`hourlyPackageType${index}`}>
                    Minimum Order Requirements
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

                <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-6">
                  <label
                    htmlFor={`hourlyPriceRange${index}`}
                    className="self-start font-bold"
                  >
                    Advance Booking Period
                  </label>
                  <div className="flex w-[80%] flex-row justify-between gap-4">
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

        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
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
                    Per plate rates
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

        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            {seasonalPackages.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
              >
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor={`seasonalPackageType${index}`}>
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
                    id={`seasonalPackageType${index}`}
                    type="text"
                    className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                    placeholder="Type of package , Eg: Day time"
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

                <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
                  <label htmlFor={`seasonalPriceRange${index}`}>
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
                >
                  Skip
                </button>
                <button
                  className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
