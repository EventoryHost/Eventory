"use client";

import React, { useState, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import PriceSlider from "../(components)/priceSlider";
import Checkbox from "@mui/material/Checkbox";
import { set } from "date-fns";

interface Package {
  type: string;
  priceRange: [number, number];
}

const Page: React.FC = () => {
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [10000, 1000000] },
  ]);

  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [20000, 100000] },
  ]);

  const [seasonalPackages, setSeasonalPackages] = useState<Package[]>([
    { type: "", priceRange: [50000, 600000] },
  ]);

  const handlePackageChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => {
    setPackages((prevPackages) => {
      const newPackages = [...prevPackages];
      if (field === "type") {
        newPackages[index].type = value as string;
      } else {
        newPackages[index].priceRange = value as [number, number];
      }
      return newPackages;
    });
  };

  const addPackage = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 100000] },
    ]);
  };

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
            {/* <div className="flex min-w-full flex-col gap-4">
              <label htmlFor="uploadButton">Upload Photo/Video</label>
              <button
                id="uploadButton"
                className="flex h-[4rem] w-full items-center justify-center gap-2 rounded-lg border-2 border-dotted border-gray-300 bg-white"
              >
                <Upload />
                <p>Upload</p>
              </button>
            </div> */}

            {/* Hourly Packages */}
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

            {/* continue and skip button */}
            <div className="mt-9 flex flex-row items-stretch gap-7 self-end">
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

// "use client";

// import React, { useState } from "react";
// import { Upload } from "lucide-react";
// import PriceSlider from "./(components)/priceSlider";
// import Checkbox from "@mui/material/Checkbox";

// const Page = () => {
//   const [value1, setValue1] = useState([10000, 400000]);
//   const [value2, setValue2] = useState([20000, 450000]);
//   const [value3, setValue3] = useState([50000, 600000]);
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };

//   const handleChange1 = (event: Event, newValue: number | number[]) => {
//     setValue1(newValue as number[]);
//     //console.log('value1', value1)
//   };

//   const handleChange2 = (event: Event, newValue: number | number[]) => {
//     setValue2(newValue as number[]);
//     //console.log('value2', value2)
//   };

//   const handleChange3 = (event: Event, newValue: number | number[]) => {
//     setValue3(newValue as number[]);
//     //console.log('value3', value3)
//   };

//   const [instaURL, setInstaURL] = useState("");
//   const [websiteURL, setWebsiteURL] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (instaURL) console.log("instagram URL:", instaURL);
//     if (websiteURL) console.log("website URL:", websiteURL);
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
//             {/* 6 col for 3 items */}
//             <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="category">
//                   <Checkbox
//                     {...label}
//                     sx={{
//                       "&.Mui-checked": {
//                         color: "#2E3192",
//                       },
//                     }}
//                   />
//                   {/* <input type="checkbox" className="m-2 size-4 "></input> */}
//                   Hourly package rates
//                 </label>
//                 <input
//                   id="businessName"
//                   type="text"
//                   className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                   placeholder="Type of package , Eg: Day time"
//                   value={instaURL}
//                   onChange={(e) => setInstaURL(e.target.value)}
//                 />
//               </div>

//               <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                 <label htmlFor="category">Select price range</label>
//                 <PriceSlider value={value1} onChange={handleChange1} />
//               </div>
//             </div>
// <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//   <div className="flex  flex-col items-start justify-between gap-2">
//     <p className="text-gray-500">Or Provide Via</p>
//     <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//       {" "}
//       <Upload />
//       Upload
//     </button>
//   </div>
//   <div className="flex  flex-col item-start justify-between gap-2">
//   <div className="rounded-lg bg-[#E6E6E6] p-2 cursor-pointer hover:shadow-xl">
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M12 5.5V17.5M6 11.9H18"
//           stroke="#2B3F6C"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//       </svg>
//     </div>
//   </div>
// </div>

//             <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="category">
//                   <Checkbox
//                     {...label}
//                     sx={{
//                       "&.Mui-checked": {
//                         color: "#2E3192",
//                       },
//                     }}
//                   />
//                   Daily package rates
//                 </label>
//                 <input
//                   id="businessName"
//                   type="text"
//                   className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                   placeholder="Type of package , Eg: Day time"
//                   value={instaURL}
//                   onChange={(e) => setInstaURL(e.target.value)}
//                 />
//               </div>

//               <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                 <label htmlFor="category">Select price range</label>
//                 <PriceSlider value={value2} onChange={handleChange2} />
//               </div>

//             </div>
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex  flex-col items-start justify-between gap-2">
//                 <p className="text-gray-500">Or Provide Via</p>
//                 <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//                   {" "}
//                   <Upload />
//                   Upload
//                 </button>
//               </div>
//               <div className="flex  flex-col item-start justify-between gap-2">
//               <div className="rounded-lg bg-[#E6E6E6] p-2 cursor-pointer hover:shadow-xl">
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
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
//               <div className="flex min-w-[40%] flex-col gap-4">
//                 <label htmlFor="category">
//                   <Checkbox
//                     {...label}
//                     sx={{
//                       "&.Mui-checked": {
//                         color: "#2E3192",
//                       },
//                     }}
//                   />
//                   Seasonal package rates
//                 </label>
//                 <input
//                   id="businessName"
//                   type="text"
//                   className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
//                   placeholder="Type of package , Eg: Day time"
//                   value={instaURL}
//                   onChange={(e) => setInstaURL(e.target.value)}
//                 />
//               </div>

//               <div className="flex h-full min-w-[40%] flex-col items-center justify-between">
//                 <label htmlFor="category">Select price range</label>
//                 <PriceSlider value={value3} onChange={handleChange1} />
//               </div>

//             </div>
//             <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="flex  flex-col items-start justify-between gap-2">
//                 <p className="text-gray-500">Or Provide Via</p>
//                 <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
//                   {" "}
//                   <Upload />
//                   Upload
//                 </button>
//               </div>
//               <div className="flex  flex-col item-start justify-between gap-2">
//               <div className="rounded-lg bg-[#E6E6E6] p-2 cursor-pointer hover:shadow-xl">
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
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* continue and skip button */}
//             <div className="items-strech mt-9 flex flex-row gap-7 self-end">
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
