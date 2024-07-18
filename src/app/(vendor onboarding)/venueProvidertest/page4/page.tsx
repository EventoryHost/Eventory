"use client";

import React from "react";
import { Upload } from "lucide-react";
import PriceSlider from "../(components)/priceSlider";
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

const Page: React.FC<PageProps> = ({
  hourlyPackages,
  setHourlyPackages,
  dailyPackages,
  setDailyPackages,
  seasonalPackages,
  setSeasonalPackages,
  handlePackageChange,
  addPackage,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Hourly Packages:", hourlyPackages);
    console.log("Daily Packages:", dailyPackages);
    console.log("Seasonal Packages:", seasonalPackages);
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
                  <PriceSlider
                    value={pkg.priceRange}
                    onChange={(e, newValue) =>
                      handlePackageChange(
                        setHourlyPackages,
                        index,
                        "priceRange",
                        newValue as [number, number],
                      )
                    }
                  />
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

            {/* Daily Packages */}
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
                  <PriceSlider
                    value={pkg.priceRange}
                    onChange={(e, newValue) =>
                      handlePackageChange(
                        setDailyPackages,
                        index,
                        "priceRange",
                        newValue as [number, number],
                      )
                    }
                  />
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

            {/* Seasonal Packages */}
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
                    Seasonal package rates
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
                  <PriceSlider
                    value={pkg.priceRange}
                    onChange={(e, newValue) =>
                      handlePackageChange(
                        setSeasonalPackages,
                        index,
                        "priceRange",
                        newValue as [number, number],
                      )
                    }
                  />
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
          </div>
          <button
            className="self-end rounded-lg bg-[#2E3192] px-7 py-3 text-white hover:bg-[#252683]"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import React, { ChangeEvent } from "react";
// import { Upload } from "lucide-react";
// import PriceSlider from "../(components)/priceSlider";
// import Checkbox from "@mui/material/Checkbox";

// interface Package {
//   type: string;
//   priceRange: [number, number];
// }
// interface FormState {
//   venueType: string;
//   seatingCapacity: string;
//   standingCapacity: string;
//   startOperatingHours: string;
//   endOperatingHours: string;
//   venueDescription: string;
//   decorType: string;
//   hourlyPackages: Package[];
//     dailyPackages: Package[];
//     seasonalPackages: Package[];
//   audioVisualEquipment: string[];
//   accessibilityFeatures: string[];
//   facilities: string[];
//   termsAndConditions: string;
//   cancellationPolicy: string;
//   instaURL: string;
//   websiteURL: string;

// }

// interface PageProps {
//   formState: {
//     hourlyPackages: Package[];
//     dailyPackages: Package[];
//     seasonalPackages: Package[];
//   };
//   //updatePackageFormState: (key: string, value: any) => void;
//   updatePackageFormState:(packageType: keyof FormState, newPackages: Package[]) => void;
// }

// const Page: React.FC<PageProps> = ({ formState, updatePackageFormState}) => {
//   const { hourlyPackages, dailyPackages, seasonalPackages } = formState;

//   const handlePackageChange = (
//     packages: Package[],
//     index: number,
//     field: "type" | "priceRange",
//     value: string | [number, number],
//     packageType: "hourlyPackages" | "dailyPackages" | "seasonalPackages"
//   ) => {
//     const newPackages = [...packages];
//     if (field === "type") {
//       newPackages[index].type = value as string;
//     } else {
//       newPackages[index].priceRange = value as [number, number];
//     }
//     updatePackageFormState(packageType, newPackages);
//   };

//   const addPackage = (packageType: "hourlyPackages" | "dailyPackages" | "seasonalPackages") => {
//     const newPackage = { type: "", priceRange: [0, 100000] };
//     const newPackages = [...formState[packageType], newPackage];
//     console.log("newPackages", newPackages);
//     //updatePackageFormState(packageType, newPackages);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log("Hourly Packages:", hourlyPackages);
//     console.log("Daily Packages:", dailyPackages);
//     console.log("Seasonal Packages:", seasonalPackages);
//   };

//   return (
//     <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
//       <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
//         <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
//             1
//           </button>
//           <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
//             2
//           </button>
//           <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
//             3
//           </button>
//           <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
//         </div>
//         <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
//             4
//           </button>
//           <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
//             5
//           </button>
//           <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
//           <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
//             6
//           </button>
//         </div>
//         <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
//           <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
//             Fill out your pricing and policy
//           </h1>
//           <p className="text-black xs:text-sm md:w-[90%]">
//             Please provide the details of the venue offered by your company.
//           </p>
//         </div>
//         <div className="relative h-[10rem] lg:w-full">
//           <img
//             src={"/tajmahal.png"}
//             alt=""
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
//         <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
//           <h1 className="text-3xl font-semibold">Basic Details</h1>
//           <div className="flex min-h-full min-w-full flex-col items-center gap-5">

//             {/* Hourly Packages */}
//             {hourlyPackages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
//               >
//                 <div className="flex min-w-[40%] flex-col gap-4">
//                   <label htmlFor={`hourlyPackageType${index}`}>
//                     <Checkbox
//                       sx={{
//                         "&.Mui-checked": {
//                           color: "#2E3192",
//                         },
//                       }}
//                     />
//                     Hourly package rates
//                   </label>
//                   <input
//                     id={`hourlyPackageType${index}`}
//                     type="text"
//                     className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                     placeholder="Type of package , Eg: Day time"
//                     value={pkg.type}
//                     onChange={(e) =>
//                       handlePackageChange(
//                         hourlyPackages,
//                         index,
//                         "type",
//                         e.target.value,
//                         "hourlyPackages"
//                       )
//                     }
//                   />
//                 </div>

//                 <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                   <label htmlFor={`hourlyPriceRange${index}`}>
//                     Select price range
//                   </label>
//                   <PriceSlider
//                     value={pkg.priceRange}
//                     onChange={(e, newValue) =>
//                       handlePackageChange(
//                         hourlyPackages,
//                         index,
//                         "priceRange",
//                         newValue as [number, number],
//                         "hourlyPackages"
//                       )
//                     }
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex flex-col items-start justify-between gap-2">
//                 <p className="text-gray-500">Or Provide Via</p>
//                 <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//                   {" "}
//                   <Upload />
//                   Upload
//                 </button>
//               </div>
//               <div className="item-start flex flex-col justify-between gap-2">
//                 <button
//                   className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
//                   onClick={() => addPackage("hourlyPackages")}
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 5.5V17.5M6 11.9H18"
//                       stroke="#2B3F6C"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Daily Packages */}
//             {dailyPackages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
//               >
//                 <div className="flex min-w-[40%] flex-col gap-4">
//                   <label htmlFor={`dailyPackageType${index}`}>
//                     <Checkbox
//                       sx={{
//                         "&.Mui-checked": {
//                           color: "#2E3192",
//                         },
//                       }}
//                     />
//                     Daily package rates
//                   </label>
//                   <input
//                     id={`dailyPackageType${index}`}
//                     type="text"
//                     className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                     placeholder="Type of package , Eg: Day time"
//                     value={pkg.type}
//                     onChange={(e) =>
//                       handlePackageChange(
//                         dailyPackages,
//                         index,
//                         "type",
//                         e.target.value,
//                         "dailyPackages"
//                       )
//                     }
//                   />
//                 </div>

//                 <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                   <label htmlFor={`dailyPriceRange${index}`}>
//                     Select price range
//                   </label>
//                   <PriceSlider
//                     value={pkg.priceRange}
//                     onChange={(e, newValue) =>
//                       handlePackageChange(
//                         dailyPackages,
//                         index,
//                         "priceRange",
//                         newValue as [number, number],
//                         "dailyPackages"
//                       )
//                     }
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex flex-col items-start justify-between gap-2">
//                 <p className="text-gray-500">Or Provide Via</p>
//                 <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//                   {" "}
//                   <Upload />
//                   Upload
//                 </button>
//               </div>
//               <div className="item-start flex flex-col justify-between gap-2">
//                 <button
//                   className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
//                   onClick={() => addPackage("dailyPackages")}
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 5.5V17.5M6 11.9H18"
//                       stroke="#2B3F6C"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Seasonal Packages */}
//             {seasonalPackages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
//               >
//                 <div className="flex min-w-[40%] flex-col gap-4">
//                   <label htmlFor={`seasonalPackageType${index}`}>
//                     <Checkbox
//                       sx={{
//                         "&.Mui-checked": {
//                           color: "#2E3192",
//                         },
//                       }}
//                     />
//                     Seasonal package rates
//                   </label>
//                   <input
//                     id={`seasonalPackageType${index}`}
//                     type="text"
//                     className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                     placeholder="Type of package , Eg: Day time"
//                     value={pkg.type}
//                     onChange={(e) =>
//                       handlePackageChange(
//                         seasonalPackages,
//                         index,
//                         "type",
//                         e.target.value,
//                         "seasonalPackages"
//                       )
//                     }
//                   />
//                 </div>

//                 <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                   <label htmlFor={`seasonalPriceRange${index}`}>
//                     Select price range
//                   </label>
//                   <PriceSlider
//                     value={pkg.priceRange}
//                     onChange={(e, newValue) =>
//                       handlePackageChange(
//                         seasonalPackages,
//                         index,
//                         "priceRange",
//                         newValue as [number, number],
//                         "seasonalPackages"
//                       )
//                     }
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex flex-col items-start justify-between gap-2">
//                 <p className="text-gray-500">Or Provide Via</p>
//                 <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//                   {" "}
//                   <Upload />
//                   Upload
//                 </button>
//               </div>
//               <div className="item-start flex flex-col justify-between gap-2">
//                 <button
//                   className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
//                   onClick={() => addPackage("seasonalPackages")}
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 5.5V17.5M6 11.9H18"
//                       stroke="#2B3F6C"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* continue and skip button */}
//             <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
//               <button
//                 className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
//                 onClick={handleSubmit}
//               >
//                 Skip
//               </button>
//               <button
//                 className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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

// export default Page;
