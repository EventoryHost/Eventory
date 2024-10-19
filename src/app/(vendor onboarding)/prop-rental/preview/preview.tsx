import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import StepBar from "@/app/(components)/stepBar";
import Appetizers from "../../(components)/PreviewAppetizer";
import File from "../../caterer/(components)/File";
import FileDisplay from "../../caterer/(components)/File";

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
  managerName: string;
  workDescription: string;
  eventSize: string;
  handleChange: (key: keyof FormState, value: any) => void;
  [key: string]: any;

  // Page2
  itemCatalogue: boolean | File;
  customization: boolean | null;
  maintenance: string;
  services: string;

  // Page3
  furnitureAndDecorListUrl: string | File;
  tentAndCanopyListUrl: string | File;
  audioVisualListUrl: string | File;
  photos: string | File | File[];
  videos: string | File | File[];
  awardsAndRecognize: string;
  clientTestimonial: string;
  instaUrl: string;
  websiteUrl: string;
  termsAndConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
};

type PagePreviewProps = {
  selectedFurnitureEvents: string[];
  setselectedFurnitureEvents: (value: SetStateAction<string[]>) => void;
  selectedTentEvents: string[];
  setselectedTentEvents: (value: SetStateAction<string[]>) => void;
  selectedAudioEvents: string[];
  setselectedAudioEvents: (value: SetStateAction<string[]>) => void;

  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedFurniture: string[];
  setSelectedFurniture: (value: SetStateAction<string[]>) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  formState: FormState;
  // setFormState: (formState: FormState) => void;
  selectedTentOptions: string[];
  setSelectedTentOptions: React.Dispatch<SetStateAction<string[]>>;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  handleChange: (key: string, value: any) => void;
  serviceProvided: string[];
  setServiceProvided: (value: SetStateAction<string[]>) => void;
  // advancePaymentCheckbox: boolean;
  // percentageValuePage3: number;
  // percentageValuePage4: number;
  // percentageValuePage5: number;
  // furnitureHourlyPricingEntries: PricingEntry[];
  // tentHourlyPricingEntries: PricingEntry[];
  // handleAddPricingEntry: (entry: PricingEntry) => void;
  // furnitureDealPricingEntries: PricingEntry[];
  // furnitureWorkerPricingEntries: PricingEntry[];
  // handleAddTentPricingEntry: (entry: PricingEntry) => void;
  // handleAddAudioPricingEntry: (entry: PricingEntry) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
};

function Preview({
  formState,
  selectedFurnitureEvents,
  selectedTentEvents,
  selectedAudioEvents,
  setselectedFurnitureEvents,
  setselectedAudioEvents,
  setselectedTentEvents,
  selectedFurniture,
  setSelectedFurniture,
  setServiceProvided,
  serviceProvided,
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
  currentPage,
  setCurrentPage,
  handleSubmit,
}: PagePreviewProps) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-6 scrollbar-hide md:p-10">
      <span className="text-xl font-semibold">
        {formState.managerName} Prop-Rentals
      </span>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        1. Basic Information
        <div className="align-center m-1 flex justify-center">
          <button onClick={() => setCurrentPage(1)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">manager name (POC)</span>
            <span className="text-sm font-bold">{formState.managerName}</span>
          </div>
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Event Size</span>
            <span className="text-sm font-bold">{formState.eventSize}</span>
          </div>
        </div>

        <div className="mt-4 flex w-1/2 flex-col gap-1">
          <span className="text-base font-normal">Description about you</span>
          <span className="break-words text-sm font-bold">
            {formState.workDescription}
          </span>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        2. Services Details
        <div className="align-center flex justify-center">
          <button onClick={() => setCurrentPage(2)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">catalogue</span>
            <span className="font-semibold">
              {formState.itemCatalogue &&
                typeof formState.itemCatalogue === "object" ? (
                <span className="font-semibold">
                  <FileDisplay file={formState.itemCatalogue} />
                </span>
              ) : (
                "no"
              )}
            </span>
          </div>
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">
              Do you offer customization(branding, color, theme of Items) ?
            </span>
            <span className="text-sm font-bold">
              {formState.customization === null
                ? ""
                : formState.customization
                  ? "yes"
                  : "no"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">
              How do you handle maintenance and repairs?
            </span>
            <span className="w-full break-words text-sm font-bold">
              {formState.maintenance}
            </span>
          </div>
          <div className="mt-4 flex w-full flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">
              What areas do you provide service for?
            </span>
            <span className="w-full break-words text-sm font-bold">
              {formState.services}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Selected Decor</span>
        <Appetizers
          appetizers={serviceProvided}
          selectedAppetizers={serviceProvided}
          setSelectedAppetizers={setServiceProvided}
        />
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        3. Furniture and Decor Rentals
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(3)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Uploaded List</span>
            <span className="font-semibold">
              {formState.furnitureAndDecorListUrl &&
                typeof formState.furnitureAndDecorListUrl === "object" ? (
                <span className="font-semibold">
                  <FileDisplay file={formState.furnitureAndDecorListUrl} />
                </span>
              ) : (
                "no"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Types of event </span>
        <Appetizers
          appetizers={selectedFurnitureEvents}
          selectedAppetizers={selectedFurnitureEvents}
          setSelectedAppetizers={setselectedFurnitureEvents}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Furniture</span>
        <Appetizers
          appetizers={selectedFurniture}
          selectedAppetizers={selectedFurniture}
          setSelectedAppetizers={setSelectedFurniture}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Decor</span>
        <Appetizers
          appetizers={selectedDecor}
          selectedAppetizers={selectedDecor}
          setSelectedAppetizers={setSelectedDecor}
        />
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        4. Tent and Canopy Rentals
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(3)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Uploaded List</span>
            <span className="font-semibold">
              {formState.tentAndCanopyListUrl &&
                typeof formState.tentAndCanopyListUrl === "object" ? (
                <span className="min-w-full font-semibold">
                  <FileDisplay file={formState.tentAndCanopyListUrl} />
                </span>
              ) : (
                "no"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Types of event </span>
        <Appetizers
          appetizers={selectedTentEvents}
          selectedAppetizers={selectedTentEvents}
          setSelectedAppetizers={setselectedTentEvents}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Tent and Canopy</span>
        <Appetizers
          appetizers={selectedTentOptions}
          selectedAppetizers={selectedTentOptions}
          setSelectedAppetizers={setSelectedTentOptions}
        />
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        5. Audio-Visual Rentals
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(3)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Upload List</span>
            <span className="font-semibold">
              {formState.audioVisualListUrl &&
                typeof formState.audioVisualListUrl === "object" ? (
                <span className="min-w-full font-semibold">
                  <FileDisplay file={formState.audioVisualListUrl} />
                </span>
              ) : (
                "no"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Types of event </span>
        <Appetizers
          appetizers={selectedAudioEvents}
          selectedAppetizers={selectedAudioEvents}
          setSelectedAppetizers={setselectedAudioEvents}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Audio Equipment </span>
        <Appetizers
          appetizers={selectedAudioOptions}
          selectedAppetizers={selectedAudioOptions}
          setSelectedAppetizers={setSelectedAudioOptions}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Visual Equipment </span>
        <Appetizers
          appetizers={selectedvisualOptions}
          selectedAppetizers={selectedvisualOptions}
          setSelectedAppetizers={setSelectedVisualOptions}
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2">
        <span className="text-base font-normal">Light Equipment </span>
        <Appetizers
          appetizers={selectedLightOptions}
          selectedAppetizers={selectedLightOptions}
          setSelectedAppetizers={setSelectedLightOptions}
        />
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        6. Additional Details
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(4)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">photos</span>
            <span className="text-sm font-bold">
              {Array.isArray(formState.photos) &&
                formState.photos.length > 0 ? (
                formState.photos.map((photo, index) => (
                  <span key={index} className="block">
                    {photo.name}
                  </span>
                ))
              ) : (
                <span>No photos uploaded</span>
              )}
            </span>
          </div>
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Videos</span>
            <span className="text-sm font-bold">
              {Array.isArray(formState.videos) &&
                formState.videos.length > 0 ? (
                formState.videos.map((video, index) => (
                  <span key={index} className="block">
                    {video.name}
                  </span>
                ))
              ) : (
                <span>No videos uploaded</span>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Awards/Recognition</span>
            <span className="text-sm font-bold">
              {formState.awardsAndRecognize}
            </span>
          </div>
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Clients Testimonals</span>
            <span className="text-sm font-bold">
              {formState.clientTestimonial}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Instagram uRL</span>
            <span className="text-sm font-bold">{formState.instaUrl}</span>
          </div>
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Website URL</span>
            <span className="text-sm font-bold">{formState.websiteUrl}</span>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Policies
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(5)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">Terms and Condition</span>

            <span className="font-semibold">
              {typeof formState.termsAndConditions === "string" ? (
                <div>{formState.termsAndConditions}</div> // Handle string case
              ) : Array.isArray(formState.termsAndConditions) ? (
                <FileDisplay files={formState.termsAndConditions} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.termsAndConditions} /> // Handle single File case
              )}
            </span>
          </div>
          <div className="mt-4 flex flex-col items-start gap-1 md:w-1/2">
            <span className="text-base font-normal">cancellation policy</span>
            <span className="text-sm font-bold">
              {typeof formState.cancellationPolicy === "string" ? (
                <div>{formState.cancellationPolicy}</div> // Handle string case
              ) : Array.isArray(formState.cancellationPolicy) ? (
                <FileDisplay files={formState.cancellationPolicy} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.cancellationPolicy} /> // Handle single File case
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="mr-[5%] flex w-full justify-end gap-[32px]">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Preview;
