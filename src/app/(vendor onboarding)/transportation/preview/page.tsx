"use client";
// Make a preview page for the transportation form

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StepBar from "@/app/(components)/stepBar";
import { Check, EditIcon } from "lucide-react";

const Preview = () => {
  const router = useRouter();
  const name = "Vijay Mallya";
  const [contactName, setcontactName] = useState("");
  const [desc, setDesc] = useState("");
  const [workers, setWorkers] = useState("");
  const [url, seturl] = useState("");
  // sedan coupe suv crosover minivan
  const vehicleTypes = ["Sedan", "Coupe", "SUV", "Crossover", "Minivan"];
  // maruti suzuki tata motors mahindra honda
  const brands = ["Maruti Suzuki", "Tata Motors", "Mahindra", "Honda"];

  // swift scorpio tata punch mahindra thar
  const models = ["Swift", "Scorpio", "Tata Punch", "Mahindra", "Thar"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Name:", contactName);
    console.log("Category:", workers);
    console.log("Description:", desc);
    console.log("URL:", url);
    router.push("/transportation/page2");
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2">
        <span className="align-center flex justify-start p-4 text-3xl font-semibold">
          {name} / Transportation
        </span>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          1. Basic Venue Details
          <div className="align-center flex justify-center p-1">
            <a href="">
              <EditIcon size={32} />
            </a>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Contact Person Name</span>
            <span className="mt-4 font-semibold">{name}</span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Total Workers</span>
            <span className="font-semibold">0-2 Members</span>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Description of your past work</span>
            <span className="mt-4 font-semibold">
              Desc. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, ad. Perspiciatis, expedita accusantium quas quia itaque
              id saepe maxime voluptatem commodi eos delectus.
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Portfolio of past work</span>
            <span className="mt-4 flex font-semibold">
              <span>Doc1.pdf</span>
              <Check size={24} />
            </span>
          </div>
        </div>

        <div className="ml-8 mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          2. Equipment Details
          <div className="align-center flex justify-center p-1">
            <a href="">
              <EditIcon size={32} />
            </a>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-lg">Do You have any heavy vehicles?</span>
            <span className="mt-4 font-semibold">Yes</span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div className="p-4 pl-8">
            <span className="text-xl">Heavy Vehicles Details</span>
          </div>
          <span className="ml-8 mt-2 flex font-semibold">
            <span>Doc1.pdf</span>
            <Check size={24} />
          </span>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Vehicle Types</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            {vehicleTypes.map((type) => (
              <button
                key={type}
                className="min-w-[6rem] rounded-3xl border border-[#605ED8] bg-white p-2 text-center text-sm text-[#605ED8] shadow-md hover:bg-[#252775] hover:text-white"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Brands</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            {brands.map((type) => (
              <button
                key={type}
                className="min-w-[6rem] rounded-3xl border border-[#605ED8] bg-white p-2 text-center text-sm text-[#605ED8] shadow-md hover:bg-[#252775] hover:text-white"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="p-4 pl-8">
            <span className="text-xl">Models</span>
          </div>

          <div className="ml-8 flex flex-wrap gap-2">
            {models.map((type) => (
              <button
                key={type}
                className="min-w-[6rem] rounded-3xl border border-[#605ED8] bg-white p-2 text-center text-sm text-[#605ED8] shadow-md hover:bg-[#252775] hover:text-white"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 ml-8 mr-4 mt-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          3. Package Rates
          <div className="align-center flex justify-center p-1">
            <a href="">
              <EditIcon size={32} />
            </a>
          </div>
        </div>

        <div className="ml-8 flex flex-col">
          <div className="text-xl font-semibold">Types of Vehicles</div>
          <div className="mt-4 flex">
            <div className="flex w-1/2 flex-col">
              <span>Small Vehicles</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span>Big Vehicles</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div></div>
          </div>
        </div>

        <div className="ml-8 mt-4 flex flex-col">
          <div className="text-xl font-semibold">Types of Service</div>
          <div className="mt-4 flex flex-row">
            <div className="flex w-1/2 flex-col">
              <span>Standard Delivery</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span>Fast Delivery</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div></div>
          </div>
        </div>

        <div className="ml-8 mt-4 flex flex-col">
          <div className="text-xl font-semibold">Types of Cargo</div>
          <div className="mt-4 flex">
            <div className="flex w-1/2 flex-col">
              <span>General Cargo</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span>Big Cargo</span>
              <span className="font-semibold">₹ 800 - ₹ 1600</span>
            </div>
            <div></div>
          </div>
        </div>

        <div className="ml-8 mr-4 mt-4 flex flex-col rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold lg:flex-row lg:justify-between">
          <div className="flex items-center">4. Policy</div>
          <div className="flex items-center justify-center p-1">
            <a href="">
              <EditIcon size={32} />
            </a>
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col lg:flex-row lg:gap-4">
          <div className="w-full p-4 lg:w-1/2 lg:p-0">
            <div className="flex flex-col">
              <div className="p-4 pl-8">
                <span className="text-xl">Terms and Conditions</span>
              </div>
              <span className="ml-8 mt-2 flex items-center font-semibold">
                <span>Doc1.pdf</span>
                <Check size={24} />
              </span>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/2 lg:p-0">
            <div className="flex flex-col">
              <div className="p-4 pl-8">
                <span className="text-xl">Cancellation Policy</span>
              </div>
              <span className="ml-8 mt-2 flex items-center font-semibold">
                <span>Doc1.pdf</span>
                <Check size={24} />
              </span>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Preview;
