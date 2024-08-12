"use client";

import StepBar from "@/app/(components)/stepBar";
import Appetizers from "@/app/(vendor onboarding)/propRentals/(components)/Appetizers";
import { Upload } from "lucide-react";
import { SetStateAction, useState } from "react";

const furnitureOptions = [
  "Chair",
  "Sofa and Couches",
  "Dining Tables",
  "Cocktail and Bar Tables",
  "Coffee Tables",
  "Side Tables",
  "Console Tables",
  "Others",
];

const DecorOptions = [
  "Stage and Platforms",
  "Backdrop frames and Panels",
  "Display Units",
  "Partition walls and Dividers",
  "Lighting fixtures",
  "Lamps",
  "Artificial items",
  "Carpet and Rugs",
  "Others",
];

type PricingEntry = {
  name: string;
  min: number;
  max: number;
}

type page3Props = {
  selectedAppetizers: string[];
  setselectedAppetizers: (value: SetStateAction<string[]>) => void;
  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  formState: { pricingEntries: PricingEntry[] };
  setFormState: (formState: { pricingEntries: PricingEntry[] }) => void;
};

function page3({
  selectedCategory,
  selectedAppetizers,
  setSelectedCategory,
  setselectedAppetizers,
  selectedDecor,
  setSelectedDecor,
}: page3Props) {
  const [hourlypackageRates, sethourlypackageRates] = useState<
    PricingEntry[]
  >([]);
  const [dealpackageRates, setdealpackageRates] = useState<
    PricingEntry[]
  >([]);
  const [ratesByWorkers, setratesByWorkers] = useState<
    PricingEntry[]
  >([]);

  const handleAddPricingEntry = (type: 'hourly' | 'deal' | 'worker', entry: PricingEntry) => {
    if (type === 'hourly') {
      sethourlypackageRates([...hourlypackageRates, entry]);
    } else if (type === 'deal') {
      setdealpackageRates([...dealpackageRates, entry]);
    } else if (type === 'worker') {
      setratesByWorkers([...ratesByWorkers, entry]);
    }
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={3} />
        </div>
        <div className="ml-8 flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Basic details
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
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

      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl  font-semibold mb-4">Fill out following details</h1>
          <div className="flex max-w-max space-x-4 rounded-3xl border border-[#2E3192] p-4  overflow-hidden">
            <button
              onClick={() => setSelectedCategory('Furniture & Decor')}
              className={`px-4 py-2 rounded-3xl  text-[#2E3192] ${selectedCategory === 'Furniture & Decor'
                ? 'bg-[#2E3192] text-white'
                : ""
                }`}
            >
              Furniture & Decor
            </button>
            <button
              onClick={() => setSelectedCategory('Tent and Canopy')}
              className={`px-4 py-2 rounded-3xl text-[#2E3192] ${selectedCategory === 'Tent and Canopy'
                ? 'bg-[#2E3192] text-white'
                : ''
                }`}
            >
              Tent and Canopy
            </button>
            <button
              onClick={() => setSelectedCategory('Audio-Visual')}
              className={`px-4 py-2 rounded-3xl text-[#2E3192] ${selectedCategory === 'Audio-Visual'
                ? 'bg-[#2E3192] text-white'
                : ''
                }`}
            >
              Audio-Visual
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <h1 className="text-3xl font-semibold">Furniture & Decor Rentals</h1>
            <div className="flex min-w-[40%] flex-col">
              <label className="text-xl font-semibold" htmlFor="category">Upload list</label>
              <p className="text-gray-500">PNG, PDF, JPG</p>
              <button className="mt-2 flex items-center w-1/3 justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload />
                Upload
              </button>
            </div>
          </div>
        </div>

        <div className="flex mx-12 flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <h1 className="text-3xl font-semibold">Furniture</h1>
            <Appetizers
              appetizers={furnitureOptions}
              selectedAppetizers={selectedAppetizers}
              setselectedAppetizers={setselectedAppetizers}
            />
          </div>
        </div>

        <div className="flex mx-12 flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <h1 className="text-3xl font-semibold">Decor</h1>
            <Appetizers
              appetizers={DecorOptions}
              selectedAppetizers={selectedDecor}
              setselectedAppetizers={setSelectedDecor}
            />
          </div>
        </div>

        <div className="flex mx-12 flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <h1 className="text-3xl font-semibold">Pricing Structure</h1>

            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold">Hourly Package Rates</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement; // Type assertion to HTMLFormElement
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const minRate = parseInt((form.elements.namedItem('minRate') as HTMLInputElement).value);
                  const maxRate = parseInt((form.elements.namedItem('maxRate') as HTMLInputElement).value);
                  handleAddPricingEntry('hourly', { name, min: minRate, max: maxRate });
                }}
              >
                <div className="flex gap-4">
                  <input type="text" name="name" placeholder="Service Name" className="border p-2 rounded" />
                  <input type="number" name="minRate" placeholder="Min Rate" className="border p-2 rounded" />
                  <input type="number" name="maxRate" placeholder="Max Rate" className="border p-2 rounded" />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
              </form>

              <ul>
                {hourlypackageRates.map((entry, index) => (
                  <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 mt-8">
              <h2 className="text-2xl font-semibold">Deal Package Rates</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const minRate = parseInt((form.elements.namedItem('minRate') as HTMLInputElement).value);
                  const maxRate = parseInt((form.elements.namedItem('maxRate') as HTMLInputElement).value);
                  handleAddPricingEntry('deal', { name, min: minRate, max: maxRate });
                }}
              >
                <div className="flex gap-4">
                  <input type="text" name="name" placeholder="Service Name" className="border p-2 rounded" />
                  <input type="number" name="minRate" placeholder="Min Rate" className="border p-2 rounded" />
                  <input type="number" name="maxRate" placeholder="Max Rate" className="border p-2 rounded" />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
                  </button>                </div>
              </form>
              <ul>
                {dealpackageRates.map((entry, index) => (
                  <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 mt-8">
              <h2 className="text-2xl font-semibold">Rates by Workers</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const minRate = parseInt((form.elements.namedItem('minRate') as HTMLInputElement).value);
                  const maxRate = parseInt((form.elements.namedItem('maxRate') as HTMLInputElement).value);
                  handleAddPricingEntry('worker', { name, min: minRate, max: maxRate });
                }}
              >
                <div className="flex gap-4">
                  <input type="text" name="name" placeholder="Service Name" className="border p-2 rounded" />
                  <input type="number" name="minRate" placeholder="Min Rate" className="border p-2 rounded" />
                  <input type="number" name="maxRate" placeholder="Max Rate" className="border p-2 rounded" />
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
                  </button>                </div>
              </form>
              <ul>
                {ratesByWorkers.map((entry, index) => (
                  <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default page3;
