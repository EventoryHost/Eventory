"use client";

import StepBar from "@/app/(components)/stepBar";
import Appetizers from "@/app/(vendor onboarding)/propRentals/(components)/Appetizers";
import { Upload } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import Page4, { page4Props } from "@/app/(vendor onboarding)/propRentals/page4/page4";
import Page5, { page5Props } from "@/app/(vendor onboarding)/propRentals/page5/page5";

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

type FormState = {
  // Page1
  contactName: string;
  phoneNumber: string;
  workDescription: string;
  yearsOfExperience: string;
  numberOfWorkers: string;
  handleChange: (key: keyof FormState, value: any) => void;
  [key: string]: any;

  // Page2
  insurancePolicy: string;
  cancellationPolicy: string;
  termsAndConditions: string;
  privacyPolicy: string;

  // Page3
  selectedAppetizers: string[];
  selectedDecor: string[];
  pricingEntries: PricingEntry[];
  hourlyCheckbox: boolean;
  packageTypePage3: string;
  packageMinRate: string;
  packageMaxRate: string;
  dealCheckbox: boolean;
  dealType: string;
  dealMinRate: string;
  dealMaxRate: string;
  workerCheckbox: boolean;
  workerType: string;
  workerMinRate: string;
  workerMaxRate: string;

  advancedPaymentCheckboxPage3: boolean;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;

  // Page4
  hourlyCheckboxPage4: boolean;
  dealCheckboxPage4: boolean;
  workerCheckboxPage4: boolean;
  advancedPaymentCheckboxPage4: boolean;

  // Page5
  hourlyCheckboxPage5: boolean;
  dealCheckboxPage5: boolean;
  workerCheckboxPage5: boolean;
  advancedPaymentCheckboxPage5: boolean;
};

type page3Props = {
  selectedAppetizers: string[];
  setselectedAppetizers: (value: SetStateAction<string[]>) => void;
  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  formState: FormState; 
  setFormState: (formState: FormState) => void; 
  selectedTentOptions: string[];
  setSelectedTentOptions: React.Dispatch<SetStateAction<string[]>>;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  handleChange: (key: string, value: any) => void;
  advancePaymentCheckbox: boolean;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;
};


function page3({
  selectedCategory,
  selectedAppetizers,
  setSelectedCategory,
  setselectedAppetizers,
  selectedDecor,
  setSelectedDecor,
  selectedTentOptions,
  setSelectedTentOptions,
  selectedLightOptions,
  setSelectedLightOptions,
  selectedAudioOptions,
  setSelectedAudioOptions,
  selectedvisualOptions,
  setSelectedVisualOptions,
  handleChange,
  percentageValuePage3,
  percentageValuePage4,
  percentageValuePage5,
  formState,
  setFormState,
  advancePaymentCheckbox,
}: page3Props & page4Props & page5Props) {
  const [hourlypackageRates, sethourlypackageRates] = useState<
    PricingEntry[]
  >([]);
  const [dealpackageRates, setdealpackageRates] = useState<
    PricingEntry[]
  >([]);
  const [ratesByWorkers, setratesByWorkers] = useState<
    PricingEntry[]
  >([]);


  const handleAddPricingEntry = (
    type: "hourly" | "deal" | "worker",
    entry: PricingEntry,
  ) => {
    if (type === "hourly") {
      sethourlypackageRates([...hourlypackageRates, entry]);
    } else if (type === "deal") {
      setdealpackageRates([...dealpackageRates, entry]);
    } else if (type === "worker") {
      setratesByWorkers([...ratesByWorkers, entry]);
    }
  };

  const [formPage, setFormPage] = useState(1);
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);

    if (category === 'Furniture & Decor') {
      setFormPage(3);
    } else if (category === 'Tent and Canopy') {
      setFormPage(4);
    } else if (category === 'Audio-Visual') {
      setFormPage(5);
    }
  };


  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          {selectedCategory === 'Furniture & Decor' && (
            <StepBar currentStep={3} />
          )}
          {selectedCategory === 'Tent and Canopy' && (
            <StepBar currentStep={4} />
          )}
          {selectedCategory === 'Audio-Visual' && (
            <StepBar currentStep={5} />
          )}

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
          <h1 className="mb-4 text-3xl font-semibold">
            Fill out following details
          </h1>
          <div className="flex max-w-max space-x-4 overflow-hidden rounded-3xl border border-[#2E3192] p-4">
            <button
              onClick={() => {
                setSelectedCategory('Furniture & Decor')
                handleCategorySelection("Furniture & Decor")
              }}
              className={`px-4 py-2 rounded-3xl  text-[#2E3192] ${selectedCategory === 'Furniture & Decor'
                ? 'bg-[#2E3192] text-white'
                : ""
                }`}
            >
              Furniture & Decor
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Tent and Canopy')
                handleCategorySelection("Tent and Canopy")
              }}
              className={`px-4 py-2 rounded-3xl text-[#2E3192] ${selectedCategory === 'Tent and Canopy'
                ? 'bg-[#2E3192] text-white'
                : ''
                }`}
            >
              Tent and Canopy
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Audio-Visual')
                handleCategorySelection("Audio-Visual")
              }}
              className={`px-4 py-2 rounded-3xl text-[#2E3192] ${selectedCategory === 'Audio-Visual'
                ? 'bg-[#2E3192] text-white'
                : ''
                }`}
            >
              Audio-Visual
            </button>
          </div>
        </div>


        {selectedCategory === 'Furniture & Decor' && (<>
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
                    </button>
                  </div>
                </form>
                <ul>
                  {ratesByWorkers.map((entry, index) => (
                    <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                    // checked={formState.advancedPaymentCheckbox}
                    onChange={(e) =>
                      handleChange("advancedPaymentCheckbox", e.target.checked)
                    }
                  />
                  <span className="semi-bold">Advanced Payment</span>
                </div>

                <div className="flex flex-row gap-6">
                  <div className="flex flex-col">
                    <label className="mb-4">Set Percentage Value</label>
                    <input
                      value={formState.percentageValuePage3}
                      onInput={(e) =>
                        handleChange(
                          "percentageValuePage3",
                          (e.target as HTMLInputElement).value,
                        )
                      }
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      className="w-full rounded-xl border-2 outline-none"
                      style={{
                        padding: 0,
                        backgroundColor: "white",
                        borderColor: "#2E3192",
                      }}
                    />
                    <span>{formState.percentageValuePage3}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )
        }
        {selectedCategory === 'Tent and Canopy' &&
          <Page4
          selectedTentOptions={selectedTentOptions}
          setSelectedTentOptions={setSelectedTentOptions}
          selectedAudioOptions={selectedAudioOptions}
          setSelectedAudioOptions={setSelectedAudioOptions}
          selectedvisualOptions={selectedvisualOptions}
          setSelectedVisualOptions={setSelectedVisualOptions}
          selectedLightOptions={[]}
          setSelectedLightOptions={setSelectedLightOptions}
          percentageValuePage4={0}
          percentageValuePage5={0} formState={{
            contactName: "",
            phoneNumber: "",
            workDescription: "",
            yearsOfExperience: "",
            numberOfWorkers: "",
            handleChange: function (key: keyof { [key: string]: any; contactName: string; phoneNumber: string; workDescription: string; yearsOfExperience: string; numberOfWorkers: string; handleChange: (key: keyof FormState, value: any) => void; insurancePolicy: string; cancellationPolicy: string; termsAndConditions: string; privacyPolicy: string; selectedAppetizers: string[]; selectedDecor: string[]; pricingEntries: { name: string; min: number; max: number; }[]; hourlyCheckbox: boolean; packageTypePage3: string; packageMinRate: string; packageMaxRate: string; dealCheckbox: boolean; dealType: string; dealMinRate: string; dealMaxRate: string; workerCheckbox: boolean; workerType: string; workerMinRate: string; workerMaxRate: string; advancedPaymentCheckboxPage3: boolean; percentageValuePage3: number; percentageValuePage4: number; percentageValuePage5: number; hourlyCheckboxPage4: boolean; dealCheckboxPage4: boolean; workerCheckboxPage4: boolean; advancedPaymentCheckboxPage4: boolean; hourlyCheckboxPage5: boolean; dealCheckboxPage5: boolean; workerCheckboxPage5: boolean; advancedPaymentCheckboxPage5: boolean; }, value: any): void {
              throw new Error("Function not implemented.");
            },
            insurancePolicy: "",
            cancellationPolicy: "",
            termsAndConditions: "",
            privacyPolicy: "",
            selectedAppetizers: [],
            selectedDecor: [],
            pricingEntries: [],
            hourlyCheckbox: false,
            packageTypePage3: "",
            packageMinRate: "",
            packageMaxRate: "",
            dealCheckbox: false,
            dealType: "",
            dealMinRate: "",
            dealMaxRate: "",
            workerCheckbox: false,
            workerType: "",
            workerMinRate: "",
            workerMaxRate: "",
            advancedPaymentCheckboxPage3: false,
            percentageValuePage3: 0,
            percentageValuePage4: 0,
            percentageValuePage5: 0,
            hourlyCheckboxPage4: false,
            dealCheckboxPage4: false,
            workerCheckboxPage4: false,
            advancedPaymentCheckboxPage4: false,
            hourlyCheckboxPage5: false,
            dealCheckboxPage5: false,
            workerCheckboxPage5: false,
            advancedPaymentCheckboxPage5: false
          }} handleChange={function (key: keyof { [key: string]: any; contactName: string; phoneNumber: string; workDescription: string; yearsOfExperience: string; numberOfWorkers: string; handleChange: (key: keyof FormState, value: any) => void; insurancePolicy: string; cancellationPolicy: string; termsAndConditions: string; privacyPolicy: string; selectedAppetizers: string[]; selectedDecor: string[]; pricingEntries: { name: string; min: number; max: number; }[]; hourlyCheckbox: boolean; packageTypePage3: string; packageMinRate: string; packageMaxRate: string; dealCheckbox: boolean; dealType: string; dealMinRate: string; dealMaxRate: string; workerCheckbox: boolean; workerType: string; workerMinRate: string; workerMaxRate: string; advancedPaymentCheckboxPage3: boolean; percentageValuePage3: number; percentageValuePage4: number; percentageValuePage5: number; hourlyCheckboxPage4: boolean; dealCheckboxPage4: boolean; workerCheckboxPage4: boolean; advancedPaymentCheckboxPage4: boolean; hourlyCheckboxPage5: boolean; dealCheckboxPage5: boolean; workerCheckboxPage5: boolean; advancedPaymentCheckboxPage5: boolean; }, value: any): void {
            throw new Error("Function not implemented.");
          } }                   
          
          />}





        {selectedCategory === 'Audio-Visual' && (
          <Page5
            selectedAudioOptions={selectedAudioOptions}
            setSelectedAudioOptions={setSelectedAudioOptions}
            selectedvisualOptions={selectedvisualOptions}
            setSelectedVisualOptions={setSelectedVisualOptions}
            selectedLightOptions={selectedLightOptions}
            setSelectedLightOptions={setSelectedLightOptions}
            percentageValuePage4={0}
            percentageValuePage5={0}
          />
        )}
      </div>
    </div>
  );
}

export default page3;
