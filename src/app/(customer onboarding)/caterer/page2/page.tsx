"use client";

import React, { useState } from "react";
import { ComboboxDemo } from "@/components/dropdown";
import { Dropdown } from "react-day-picker";
import { Combobox } from "@/components/ui/combobox";
import { ArrowUpSquare, Upload } from "lucide-react";
import Appetizers from "./(components)/Appetizers";

const appetizers = [
  'Samosa',
  'Pakora',
  'Paneer Tikka',
  'Aloo Tikki',
  'Chicken 65',
  'Dhokla',
  'Vada Pav',
  'Pani Puri',
  'Bhel Puri',
  'Dahi Puri',
  'Papdi Chaat',
  'Hara Bhara Kabab',
  'Seekh Kebab',
  'Bhajiya',
  'Momos',
  'Masala Papad',
  'Keema Samosa',
  'Fish Amritsari',
  'Prawn Koliwada',
  'Aloo Chaat'
];

const cuisine = [
  { value: "north", label: "North Indian" },
  { value: "south", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "italian", label: "Italian" },
];

const beverages = [
  'Masala Chai',
  'Lassi',
  'Chaas',
  'Nimbu Pani',
  'Aam Panna',
  'Thandai',
  'Jal Jeera',
  'Sol Kadhi',
  'Filter Coffee',
  'Tender Coconut Water',
  'Sugarcane Juice',
  'Badam Milk',
  'Kokum Sherbet',
  'Falooda',
  'Rooh Afza',
  'Buttermilk',
  'Sharbat',
  'Feni',
  'Toddy',
  'Kanji'
];




const Page = () => {
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [gstin, setGstin] = useState("");
  const [years, setYears] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [cities, setCities] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Name:", businessName);
    console.log("Category:", category);
    console.log("GSTIN:", gstin);
    console.log("Years in Operation:", years);
    console.log("Business Address:", businessAddress);
    console.log("Landmark:", landmark);
    console.log("Pin Code:", pinCode);
    console.log("Operational Cities:", cities);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden lg:flex-row min-h-[calc(100vh-5.2rem)]">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center text-white rounded-full bg-[#2E3192] p-5">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center text-white rounded-full bg-[#2E3192] p-5 ">
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
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5 ">
            5
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            6
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
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
      <div className="flex min-w-[70%] flex-col items-center scroll-touch gap-9 max-h-[calc(100vh-5.2rem)] overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Menu Details</h1>
            <div className="flex gap-2 items-center">
              <input type="radio"/>
              <p className="text-gray-500">Veg</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio"/>
              <p className="text-gray-500">Non-Veg</p>
            </div>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-2">
                <p className="font-semibold text-xl">Upload Menu</p>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex bg-gray-200 hover:bg-[#2E3192] hover:text-white text-[#2E3192] px-9 gap-5 items-center justify-center rounded-xl border-2 py-3 mt-5"> <Upload/>Upload</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Appetizers</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers appetizers={appetizers} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Beverages</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers appetizers={beverages} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <h1 className="text-3xl font-semibold">Other Details</h1>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">Caterer Name (Manager)</label>
                <input
                  id="businessName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Cuisine Specialties</label>
                <Combobox
                  options={cuisine}
                  placeholder="Select Cuisine"
                  setFunction={setYears}
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
