import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../../(components)/PreviewAppetizer";
import File from "../(components)/File";
import FileDisplay from "../(components)/File";
const _cuisine = ["North Indian", "South Indian", "Chinese", "Italian"];
const regional = [
  "Gujrati",
  "Rajasthani",
  "Bengali",
  "Other",
  "Rajasthani",
  "Bengali",
  "Rajasthani",
  "Bengali",
];
const service = ["Buffet", "Plated Meals", "Family Style", "Food Stations"];
const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Nut-Free"];
const mainCourses = ["Biryani", "Tandoori", "Pasta", "Pizza"];
const beverages = ["Tea", "Coffee", "Juice", "Soda"];
const appetizers = ["Samosa", "Spring Roll", "Chicken Wings", "Bruschetta"];
const eventTypes = [
  "Weddings",
  "Corporate",
  "Birthdays",
  "Anniversary",
  "Others",
];

const additionalServices = ["Setup Services", "Cleanup Services", "Others"];
const staff = ["Chefs", "Bartenders", "Servers", "Cleaners", "Others"];

const equipment = ["Setup Services", "Cleanup Services", "Others"];

type PricingEntry = {
  min: number;
  max: number;
  name: string;
  minRate: string;
  maxRate: string;
};
interface Package {
  type: string;
  priceRange: [number, number];
}

type FormState = {
  // Page-specific states
  // Page 1
  businessName: string;
  cateringName: string;
  // menu: string | File;
  preSetMenu: string;
  customizableMenu: boolean | null;
  // Page 6
  portfolio: string | File;
  photos: string | File[] | File;
  videos: string | File[] | File;
  tastingSessions: boolean | null;
  businessLicenses: boolean | null;
  foodSafety: boolean | File;
  cateringServiceImages: string | File;
  videoEvent: string | File;
  termsAndConditions: string | File | File[];
  cancellationPolicy: string | File | File[];
  minOrderReq: string;
  AdvBooking: string;
  clientTestimonials: string | File | File[];
};

type PagePreviewProps = {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  cuisineSpecialties: string[];
  setCuisineSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  regionalSpecialties: string[];
  setRegionalSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  serviceStyles: string[];
  setServiceStyles: React.Dispatch<React.SetStateAction<string[]>>;
  servingCapacity: string[];
  setServingCapacity: React.Dispatch<React.SetStateAction<string[]>>;

  selectedAppetizers: string[];
  setSelectedAppetizers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBeverages: string[];
  setSelectedBeverages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedMainCourses: string[];
  setSelectedMainCourses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDietaryOptions: string[];
  setSelectedDietaryOptions: React.Dispatch<React.SetStateAction<string[]>>;

  selectedEventTypes: string[];
  setSelectedEventTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAdditionalServices: string[];
  setSelectedAdditionalServices: React.Dispatch<React.SetStateAction<string[]>>;

  selectedStaffProvider: string[];
  setSelectedStaffProvider: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEquipmentsProvided: string[];
  setSelectedEquipmentsProvided: React.Dispatch<React.SetStateAction<string[]>>;

  // hourlyPackages: Package[];
  // setHourlyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
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

  advancePayment: number;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  veg: string[];
  setVeg: React.Dispatch<React.SetStateAction<string[]>>;
  setMenu: React.Dispatch<React.SetStateAction<File[]>>;
  menu: File[];
};

function Preview({
  menu,
  setMenu,
  veg,
  setVeg,
  handleContinue,
  setCurrentPage,
  advancePayment,

  formState,
  updateFormState,
  cuisineSpecialties,
  setCuisineSpecialties,
  regionalSpecialties,
  setRegionalSpecialties,
  serviceStyles,
  setServiceStyles,
  servingCapacity,
  setServingCapacity,

  selectedAppetizers,
  setSelectedAppetizers,
  selectedBeverages,
  setSelectedBeverages,
  selectedMainCourses,
  setSelectedMainCourses,
  selectedDietaryOptions,
  setSelectedDietaryOptions,

  selectedEventTypes,
  setSelectedEventTypes,
  selectedAdditionalServices,
  setSelectedAdditionalServices,

  selectedStaffProvider,
  setSelectedStaffProvider,
  selectedEquipmentsProvided,
  setSelectedEquipmentsProvided,

  dailyPackages,
  setDailyPackages,
  seasonalPackages,
  setSeasonalPackages,
  handlePackageChange,
  addPackage,
}: PagePreviewProps) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-6 scrollbar-hide md:p-10">
      <span className="text-xl font-semibold">
        {formState.businessName} Caterers
      </span>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        1. Basic Details
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-6 flex flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mt-4 flex min-w-[45%] flex-col items-start gap-1">
            <span className="text-base font-normal">Catering Service Name</span>
            <span className="text-sm font-bold">{formState.cateringName}</span>
          </div>
          <div className="mt-4 flex min-w-[45%] flex-col items-center gap-1">
            <span className="text-base font-normal">Manager Name (POC)</span>
            <span className="text-sm font-bold">{formState.businessName}</span>
          </div>
        </div>

        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Serving Capacity</span>
          <span className="text-sm font-bold">{servingCapacity}</span>
        </div>

        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Cuisine Speciliaty</span>
          <Appetizers
            appetizers={cuisineSpecialties}
            selectedAppetizers={cuisineSpecialties}
            setSelectedAppetizers={setCuisineSpecialties}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Regional Specialties</span>
          <Appetizers
            appetizers={regionalSpecialties}
            selectedAppetizers={regionalSpecialties}
            setSelectedAppetizers={setRegionalSpecialties}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Service Styles Offered</span>
          <Appetizers
            appetizers={serviceStyles}
            selectedAppetizers={serviceStyles}
            setSelectedAppetizers={setServiceStyles}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Menu Details
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(2)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Veg or NonVeg</span>
          <span className="text-sm font-bold">{veg}</span>
        </div>
        <div className="m-6 mt-6 flex flex-col gap-1">
          <span className="text-base font-normal">Uploaded Menu</span>
          <div className="w-[60%] font-semibold">
            {Array.isArray(menu) ? (
              <FileDisplay files={menu} />
            ) : (
              <div>Not specified</div>
            )}
          </div>
        </div>

        {!menu.length && (
          <>
            <div className="m-6 mt-4 flex flex-col gap-2">
              <span className="text-base font-normal">Appetizers</span>
              <Appetizers
                // field={'_appetizers'}
                appetizers={selectedAppetizers}
                selectedAppetizers={selectedAppetizers}
                setSelectedAppetizers={setSelectedAppetizers}
              />
            </div>

            <div className="m-6 mt-4 flex flex-col gap-2">
              <span className="text-base font-normal">Beverages</span>
              <Appetizers
                // field={'_beverages'}
                appetizers={selectedBeverages}
                selectedAppetizers={selectedBeverages}
                setSelectedAppetizers={setSelectedBeverages}
              />
            </div>
            <div className="m-6 mt-4 flex flex-col gap-2">
              <span className="text-base font-normal">Main Courses</span>
              <Appetizers
                //  field={'_mainCourses'}
                appetizers={selectedMainCourses}
                selectedAppetizers={selectedMainCourses}
                setSelectedAppetizers={setSelectedMainCourses}
              />
            </div>
            <div className="m-6 mt-4 flex flex-col gap-2">
              <span className="text-base font-normal">Dietary Options</span>
              <Appetizers
                // field={'_dietaryOptions'}
                appetizers={selectedDietaryOptions}
                selectedAppetizers={selectedDietaryOptions}
                setSelectedAppetizers={setSelectedDietaryOptions}
              />
            </div>
          </>
        )}
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Pre-Set Menu</span>
          <p className="whitespace-normal break-words text-sm font-bold">
            {formState.preSetMenu}
          </p>
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-base font-normal">Customizable</span>
          <span className="text-sm font-bold">
            {formState.customizableMenu === null
              ? ""
              : formState.customizableMenu
                ? "Yes"
                : "No"}
          </span>
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Event Details
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-base font-normal">Event Options</span>
          <Appetizers
            // field={'EventTypes'}
            appetizers={selectedEventTypes}
            selectedAppetizers={selectedEventTypes}
            setSelectedAppetizers={setSelectedEventTypes}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-base font-normal">Additional Services</span>
          <Appetizers
            // field={'additionalServices'}
            appetizers={selectedAdditionalServices}
            selectedAppetizers={selectedAdditionalServices}
            setSelectedAppetizers={setSelectedAdditionalServices}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Staff & Equipments
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-base font-normal">Staff provides</span>
          <Appetizers
            // field={'staffProvides'}
            appetizers={selectedStaffProvider}
            selectedAppetizers={selectedStaffProvider}
            setSelectedAppetizers={setSelectedStaffProvider}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-base font-normal">Equipments provided</span>
          <Appetizers
            // field={'equipmentsProvided'}
            appetizers={selectedEquipmentsProvided}
            selectedAppetizers={selectedEquipmentsProvided}
            setSelectedAppetizers={setSelectedEquipmentsProvided}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Additional Details
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-4 flex min-w-full flex-col items-start justify-between gap-5 px-4 md:flex-row">
        <div className="flex min-w-[45%] flex-col gap-2">
          <label className="text-base font-normal">
            Minimum Order Requirements
          </label>
          <span className="text-sm font-bold">{formState.minOrderReq}</span>
        </div>
        <div className="flex h-full min-w-[45%] flex-col items-start justify-center gap-2">
          <label className="text-base font-normal">
            Advance Booking Period
          </label>
          <span className="text-sm font-bold">{formState.AdvBooking}</span>
        </div>
      </div>

      <div className="mb-4 flex min-w-full flex-col items-start justify-between gap-5 pl-4 md:flex-row">
        <div className="flex min-w-[45%] flex-col gap-2">
          <label className="text-base font-normal">Photos</label>
          <span className="text-sm font-bold">
            {typeof formState.photos === "string" ? (
              <div>{formState.photos}</div> // Handle string case
            ) : Array.isArray(formState.photos) ? (
              <FileDisplay files={formState.photos} /> // Handle File[] case
            ) : (
              <FileDisplay file={formState.photos} /> // Handle single File case
            )}
          </span>
        </div>
        <div className="flex min-w-[45%] flex-col gap-2">
          <label className="text-base font-normal">Videos</label>
          <span className="text-sm font-bold">
            {typeof formState.videos === "string" ? (
              <div>{formState.videos}</div> // Handle string case
            ) : Array.isArray(formState.videos) ? (
              <FileDisplay files={formState.videos} /> // Handle File[] case
            ) : (
              <FileDisplay file={formState.videos} /> // Handle single File case
            )}
          </span>
        </div>
      </div>
      <div className="mb-4 flex min-w-full flex-col items-start justify-between gap-5 px-4 md:flex-row">
        <div className="flex h-full min-w-[45%] flex-col items-start justify-center gap-2">
          <span className="text-base font-normal">Tasting sessions</span>

          <span className="font-semibold">
            {formState.tastingSessions === null
              ? ""
              : formState.tastingSessions
                ? "Yes"
                : "No"}
          </span>
        </div>
        <div className="flex min-w-[45%] flex-col gap-2">
          <span className="text-base font-normal">Buisness Licenses</span>

          <span className="font-semibold">
            {formState.businessLicenses === null
              ? ""
              : formState.businessLicenses
                ? "Yes"
                : "No"}
          </span>
        </div>
      </div>

      <div className="mb-4 flex min-w-full flex-col items-start justify-between gap-2 px-4">
        <span className="text-base font-normal">Food Safety Certificate</span>
        <span className="font-semibold">
          {formState.foodSafety && typeof formState.foodSafety === "object" ? (
            <span className="font-semibold">
              <File file={formState.foodSafety} />
            </span>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className="flex py-2"></div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Policies
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(6)}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex w-[100%] flex-col gap-6">
        <div className="flex py-2">
          <div className="flex w-1/2 flex-col gap-2 px-4">
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
          <div className="flex w-1/2 flex-col gap-2 px-4">
            <span className="text-base font-normal">Cancellation Policy</span>
            <span className="font-semibold">
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

        <div className="flex w-1/2 flex-col px-4">
          <span className="text-base font-normal">Client Testimonials</span>
          <span className="font-semibold">
            {typeof formState.clientTestimonials === "string" ? (
              <div>{formState.clientTestimonials}</div> // Handle string case
            ) : Array.isArray(formState.clientTestimonials) ? (
              <FileDisplay files={formState.clientTestimonials} /> // Handle File[] case
            ) : (
              <FileDisplay file={formState.clientTestimonials} /> // Handle single File case
            )}
          </span>
        </div>
      </div>
      <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          Back
        </button>
        <button
          className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Preview;
