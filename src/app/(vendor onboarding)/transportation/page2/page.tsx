"use client";
import StepBar from "@/app/(components)/stepBar";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const vehicleTypes = [
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "SUV",
  "Bus",
  "Van",
  "Crossover",
  "Minivan",
  "Wagon",
  "Sports Cars",
  "Luxury Cars",
  "Minibus",
  "Hybrid",
  "Limousine",
  "Others",
];
const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Mahindra",
  "Honda",
  "Skoda",
  "Volkswagen AG",
  "Renault",
  "Nissan",
  "Mg Motors",
  "BYD",
  "Toyota",
  "Kia",
  "Audi",
  "Bmw",
  "Mercedes",
  "Others",
];

const models = [
  "Swift",
  "Scorpio",
  "Tata Punch",
  "Mahindra",
  "Thar",
  "Ciaz",
  "Nexon",
  "Creta",
  "Brezza",
  "Sonet",
  "Innova Crysta",
  "Innova",
  "Kia Carens",
  "Xuv300",
  "Baleno",
  "Ertiga",
  "Others",
];

const page = () => {
  const router = useRouter();
  const [contactName, setcontactName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/transportation/page3");
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={2} />
        </div>
        <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Fill out your Basic details
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
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
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <span className="font-bold">Equipment Details</span>
            <div className="flex gap-2">
              <input type="checkbox" name="heavy_vehicles" id="" />
              <span className="semi-bold">Heavy Vehicles</span>
            </div>
            <div className="flex flex-row gap-2">
              <input
                onChange={(e) => setcontactName(e.target.value)}
                id="contactName"
                type="text"
                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                placeholder="Name of vehicles"
              />
              <input
                onChange={(e) => setcontactName(e.target.value)}
                id="contactName"
                type="text"
                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                placeholder="Name of vehicles"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex min-w-[40%] flex-col gap-2">
                <label htmlFor="url">or provide via</label>
                <button className="flex max-w-52 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
          </div>
          {/* Vehicle types */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <span className="font-semibold">Vehicle types</span>

            <div className="grid grid-cols-4 gap-4">
              {vehicleTypes.map((type) => (
                <button
                  key={type}
                  className="rounded-3xl bg-gray-200 p-4 text-center shadow-md hover:bg-[#252775] hover:text-white"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {/* Brands */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <span className="font-semibold">Brands</span>

            <div className="grid grid-cols-4 gap-4">
              {brands.map((type) => (
                <button
                  key={type}
                  className="rounded-3xl bg-gray-200 p-4 text-center shadow-md hover:bg-[#252775] hover:text-white"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {/* Models */}
          <div className="my-6"></div>
          <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
            <span className="font-semibold">Models</span>

            <div className="grid grid-cols-4 gap-4">
              {models.map((type) => (
                <button
                  key={type}
                  className="rounded-3xl bg-gray-200 p-4 text-center shadow-md hover:bg-[#252775] hover:text-white"
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
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

export default page;
