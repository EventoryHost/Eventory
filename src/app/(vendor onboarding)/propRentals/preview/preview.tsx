import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../(components)/Appetizers";

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

const tentOptions = [
  "Traditional Indian Tents",
  "marquee tents",
  "pagoda tents",
  "pole tents",
  "frame tents",
  "event specific tents",
  "pop-up canopies",
  "garden canopies",
  "event specific canopies",
  "gazebo",
  "shade structures",
  "temporary structures",
  "others",
];

const audioOptions = [
  "Speakers",
  "Microphones",
  "mixing consoles",
  "Amplifiers",
  "Signal Processors",
  "Cables and accessories",
  "playback equipment",
  "dj equipment",
  "audio interfaces",
  "in-ear monitors",
  "portable pa systems",
  "recording equipment",
  "confrence and meeting equipment",
  "lighting equipment",
  "others",
];

const visualOptions = [
  "projectos",
  "screens",
  "LED displays",
  "TV screens",
  "video wall",
  "video cameras",
  "playback and recording equipment",
  "camera accessories",
  "video switchers and mixers",
  "visual effects",
  "signal distribution",
  "ingeractive display",
  "presentaion aids",
  "VR and AR equipment",
  "ineractive display",
  "Others",
];

const lightOptions = [
  "LED lights",
  "conventional lights",
  "lighting control",
  "lighting stands",
  "lighting effects",
  "lighting filters",
  "lighting truss",
  "lighting cables",
  "lighting power",
  "lighting dimmers",
  "lighting consoles",
  "lighting software",
  "lighting fixtures",
  "lighting controllers",
  "lighting accessories",
  "Others",
];

type PricingEntry = {
  min: number;
  max: number;
  name: string;
  minRate: string;
  maxRate: string;
};

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
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;

  // Page3
  selectedAppetizers: string[];
  selectedDecor: string[];
  furnitureHourlyPricingEntries: PricingEntry[];
  tentHourlyPricingEntries: PricingEntry[];
  furnitureDealPricingEntries: PricingEntry[];
  furnitureWorkerPricingEntries: PricingEntry[];
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

type PagePreviewProps = {
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
  furnitureHourlyPricingEntries: PricingEntry[];
  tentHourlyPricingEntries: PricingEntry[];
  handleAddPricingEntry: (entry: PricingEntry) => void;
  furnitureDealPricingEntries: PricingEntry[];
  furnitureWorkerPricingEntries: PricingEntry[];
  handleAddTentPricingEntry: (entry: PricingEntry) => void;
  handleAddAudioPricingEntry: (entry: PricingEntry) => void;
};

function Preview({
  formState,
  selectedAppetizers,
  setselectedAppetizers,
  selectedDecor,
  setSelectedDecor,
  selectedTentOptions,
  setSelectedTentOptions,
  selectedAudioOptions,
  setSelectedAudioOptions,
  selectedvisualOptions,
  setSelectedVisualOptions,
  selectedLightOptions,
  setSelectedLightOptions,
  handleChange,
  advancePaymentCheckbox,
  percentageValuePage3,
  percentageValuePage4,
}: PagePreviewProps) {
  return (
    <div>
      <div className="flex w-screen flex-col gap-2 p-2">
        <span className="align-center flex justify-start p-4 text-3xl font-semibold">
          {formState.contactName} / Prop-Rentals
        </span>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          1. General Information
          <div className="align-center flex justify-center p-1">
            <button>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Contact Person Name</span>
            <span className="mt-4 font-semibold">{formState.contactName}</span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Contact Phone number</span>
            <span className="font-semibold">{formState.phoneNumber}</span>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">What work do you do</span>
            <span className="mt-4 font-semibold">
              {formState.workDescription}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Years of experience</span>
            <span className="mt-4 font-semibold">
              {formState.yearsOfExperience}
            </span>
          </div>
        </div>

        <div className="mx-8 mt-6 flex w-1/2 flex-col">
          <span className="text-xl">Number of workers</span>
          <span className="mt-4 font-semibold">
            {formState.numberOfWorkers}
          </span>
        </div>

        <div className="ml-8 mr-4 mt-6 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          2.Mandatory Details
          <div className="align-center flex justify-center p-1">
            <button>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Insurance coverage policy</span>
            <span className="mt-4 font-semibold">
              {typeof formState.insurancePolicy === "string"
                ? formState.insurancePolicy
                : formState.insurancePolicy?.name || "Not uploaded"}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Cancellation policy</span>
            <span className="mt-4 font-semibold">
              {typeof formState.cancellationPolicy === "string"
                ? formState.cancellationPolicy
                : formState.cancellationPolicy?.name || "Not uploaded"}
            </span>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Terms and Conditions</span>
            <span className="mt-4 font-semibold">
              {typeof formState.termsAndConditions === "string"
                ? formState.termsAndConditions
                : formState.termsAndConditions?.name || "Not uploaded"}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Privacy Policy</span>
            <span className="mt-4 font-semibold">
              {typeof formState.privacyPolicy === "string"
                ? formState.privacyPolicy
                : formState.privacyPolicy?.name || "Not uploaded"}
            </span>
          </div>
        </div>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          3. Furniture and Decor Rentals
          <div className="align-center flex justify-center p-1">
            <button>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Uploaded List</span>
            <span className="ml-8 mt-2 flex items-center font-semibold">
              <span>
                {formState.furnitureAndDecorListUrl.name || "No File Uploaded"}
              </span>
            </span>
          </div>
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Selected Decor</span>
          <Appetizers
            appetizers={furnitureOptions}
            selectedAppetizers={selectedAppetizers}
            setselectedAppetizers={setselectedAppetizers}
          />
        </div>
        <div className="m-6 mt-6 flex flex-col">
          <span className="text-xl">Selected Appetizers</span>
          <Appetizers
            appetizers={DecorOptions}
            selectedAppetizers={selectedDecor}
            setselectedAppetizers={setSelectedDecor}
          />
        </div>

        <div>
          <span className="mb-4 ml-6 text-2xl font-semibold">
            Pricing Structure
          </span>

          <div className="ml-8 flex flex-col">
            <div className="text-xl font-semibold">Hourly package rates</div>
            <div className="mt-4 flex flex-col">
              {formState.furnitureHourlyPricingEntries.length > 0 ? (
                formState.furnitureHourlyPricingEntries.map((entry, index) => (
                  <div key={index} className="mb-2 flex flex-col">
                    <span>{entry.name}</span>
                    <span className="font-semibold">
                      ₹ {entry.min} - ₹{entry.max}
                    </span>
                  </div>
                ))
              ) : (
                <div>No hourly package rates available</div>
              )}
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Daily package rates</div>
            <div className="mt-4 flex flex-col">
              {formState.furnitureDealPricingEntries.length > 0 ? (
                formState.furnitureDealPricingEntries.map((entry, index) => (
                  <div key={index} className="mb-2 flex flex-col">
                    <span>{entry.name}</span>
                    <span className="font-semibold">
                      ₹ {entry.min} - ₹{entry.max}
                    </span>
                  </div>
                ))
              ) : (
                <div>No daily package rates available</div>
              )}
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Daily package rates</div>
            <div className="mt-4 flex flex-col">
              {formState.furnitureWorkerPricingEntries.length > 0 ? (
                formState.furnitureWorkerPricingEntries.map((entry, index) => (
                  <div key={index} className="mb-2 flex flex-col">
                    <span>{entry.name}</span>
                    <span className="font-semibold">
                      ₹ {entry.min} - ₹{entry.max}
                    </span>
                  </div>
                ))
              ) : (
                <div>No daily package rates available</div>
              )}
            </div>
          </div>
        </div>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          4. Tent and Canopy Rentals
          <div className="align-center flex justify-center p-1">
            <button>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Uploaded List</span>
            <span className="ml-8 mt-2 flex items-center font-semibold">
              <span>
                {formState.tentAndCanopyListUrl.name || "No File Uploaded"}
              </span>
            </span>
          </div>
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Tent and Canopy</span>
          <Appetizers
            appetizers={tentOptions}
            selectedAppetizers={selectedTentOptions}
            setselectedAppetizers={setSelectedTentOptions}
          />
        </div>

        {/* Pricing Structure section */}
        <div>
          <span className="mb-4 ml-6 text-2xl font-semibold">
            Pricing Structure
          </span>

          <div className="ml-8 flex flex-col">
            <div className="text-xl font-semibold">Hourly package rates</div>
            <div className="mt-4 flex flex-col">
              {formState.tentHourlyPricingEntries.length > 0 ? (
                formState.tentHourlyPricingEntries.map((entry, index) => (
                  <div key={index} className="mb-2 flex flex-col">
                    <span>{entry.name}</span>
                    <span className="font-semibold">
                      ₹ {entry.min} - ₹{entry.max}
                    </span>
                  </div>
                ))
              ) : (
                <div>No hourly package rates available</div>
              )}
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Daily package rates</div>
            <div className="mt-4 flex flex-row">
              <div className="flex w-1/2 flex-col">
                <span>{formState.serviceType}</span>
                <span className="font-semibold">
                  ₹ {formState.dealMinRate} - ₹{formState.dealMaxRate}
                </span>
              </div>
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Type of workers</div>
            <div className="mt-4 flex">
              <div className="flex w-1/2 flex-col">
                <span>{formState.cargoType}</span>
                <span className="font-semibold">
                  ₹ {formState.workerMinRate} - ₹{formState.workerMaxRate}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-8 mr-4 flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
          5. Audio-Visual Equipment Rentals
          <div className="align-center flex justify-center p-1">
            <button>
              <EditIcon size={32} />
            </button>
          </div>
        </div>

        <div className="mx-8 mt-6 flex gap-16">
          <div className="flex w-1/2 flex-col">
            <span className="text-xl">Uploaded List</span>
            <span className="ml-8 mt-2 flex items-center font-semibold">
              <span>{formState.audioVisualListUrl.name}</span>
            </span>
          </div>
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Audio Equipment</span>
          <Appetizers
            appetizers={audioOptions}
            selectedAppetizers={selectedAudioOptions}
            setselectedAppetizers={setSelectedAudioOptions}
          />
        </div>

        <div className="m-6 mt-6 flex flex-col">
          <span className="text-xl">Visual Equipment</span>
          <Appetizers
            appetizers={visualOptions}
            selectedAppetizers={selectedvisualOptions}
            setselectedAppetizers={setSelectedVisualOptions}
          />
        </div>

        <div className="m-6 mt-6 flex flex-col">
          <span className="text-xl">Light Equipment</span>
          <Appetizers
            appetizers={lightOptions}
            selectedAppetizers={selectedLightOptions}
            setselectedAppetizers={setSelectedLightOptions}
          />
        </div>

        <div>
          <span className="mb-4 ml-6 text-2xl font-semibold">
            Pricing Structure
          </span>

          <div className="ml-8 flex flex-col">
            <div className="text-xl font-semibold">Hourly package rates</div>
            <div className="mt-4 flex">
              <div className="flex w-1/2 flex-col">
                <span> {formState.packageTypePage3}</span>
                <span className="font-semibold">
                  ₹ {formState.packageMinRate} - ₹{formState.packageMaxRate}
                </span>
              </div>
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Daily package rates</div>
            <div className="mt-4 flex flex-row">
              <div className="flex w-1/2 flex-col">
                <span>{formState.serviceType}</span>
                <span className="font-semibold">
                  ₹ {formState.dealMinRate} - ₹{formState.dealMaxRate}
                </span>
              </div>
            </div>
          </div>

          <div className="ml-8 mt-4 flex flex-col">
            <div className="text-xl font-semibold">Type of workers</div>
            <div className="mt-4 flex">
              <div className="flex w-1/2 flex-col">
                <span>{formState.cargoType}</span>
                <span className="font-semibold">
                  ₹ {formState.workerMinRate} - ₹{formState.workerMaxRate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
