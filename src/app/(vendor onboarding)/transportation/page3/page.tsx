"use client";
import StepBar from "@/app/(components)/stepBar";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddBtn from "@/app/(components)/addBtn";

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
  const [value, setValue] = useState(50);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(Number(event.target.value));
  };
  const router = useRouter();
  const [contactName, setcontactName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/transportation/page4");
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={3} />
        </div>
        <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Pricing rates
          </h1>
          <p className="text-gray-600 xs:text-sm lg:text-lg md:w-[90%]">
            Please provide the details of the vehicles offered by your company.
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
            <span className="font-semibold">Pricing Structure</span>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-6 w-6 border-2 rounded-lg border-[#2E3192] bg-white appearance-none checked:bg-[#2E3192]  focus:outline-none"
              />              <span className="semi-bold">Type of Vehicles</span>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label>Min.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
              <div className="flex flex-col">
                <label>Max.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
            </div>
            <AddBtn />
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-6 w-6 border-2 rounded-lg border-[#2E3192] bg-white appearance-none checked:bg-[#2E3192]  focus:outline-none"
              />
              <span className="semi-bold">Type of Service</span>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label>Min.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
              <div className="flex flex-col">
                <label>Max.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
            </div>
            <AddBtn />
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-6 w-6 border-2 rounded-lg border-[#2E3192] bg-white appearance-none checked:bg-[#2E3192]  focus:outline-none"
              />
              <span className="semi-bold">Type of Cargo</span>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label>Min.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
              <div className="flex flex-col">
                <label>Max.</label>
                <input
                  onChange={(e) => setcontactName(e.target.value)}
                  id="contactName"
                  type="text"
                  className="w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Rs 200"
                />
              </div>
            </div>
            <AddBtn />
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="h-6 w-6 border-2 rounded-lg border-[#2E3192] bg-white appearance-none checked:bg-[#2E3192]  focus:outline-none"
              />
              <span className="semi-bold">Advanced Payment</span>
            </div>
            Set Percentage
            <div className="flex w-full flex-col items-start">
              <div className="relative w-full max-w-xs">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#2E3192]"
                  style={{
                    background: `linear-gradient(to right, #1D4ED8 ${value}%, #E5E7EB ${value}%)`,
                  }}
                />
                <div className="mt-2 text-center">
                  <p className="text-md font-medium">{value}%</p>
                </div>
              </div>
              <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                  appearance: none;
                  width: 16px;
                  height: 16px;
                  border-radius: 9999px;
                  background-color: #2e3192;
                  border: 2px solid white;
                  cursor: pointer;
                }
                input[type="range"]::-moz-range-thumb {
                  width: 16px;
                  height: 16px;
                  border-radius: 9999px;
                  background-color: #2e3192;
                  border: 2px solid white;
                  cursor: pointer;
                }
                input[type="range"]::-ms-thumb {
                  width: 16px;
                  height: 16px;
                  border-radius: 9999px;
                  background-color: #2e3192;
                  border: 2px solid white;
                  cursor: pointer;
                }
              `}</style>

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
    </div>
  );
};

export default page;
