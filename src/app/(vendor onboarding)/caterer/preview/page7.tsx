import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../../(components)/Appetizers";
import File from "../(components)/File";
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
  package_name: string;
  priceRange: [number, number];
}

type FormState = {
  // Page-specific states
  // Page 1
  businessName: string;
  cateringName:string;
  menu: string | File;
  preSetMenu:string;
  customizableMenu:boolean;
  // Page 6
  portfolio: string | File;
  tastingSessions: boolean;
  businessLicenses: boolean;
  foodSafety: boolean | File;
  cateringServiceImages: string | File;
  videoEvent: string | File;
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
  minOrderReq: string;
  AdvBooking: string;
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
};

function Preview({
  handleContinue,
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
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-6 xs:w-[95%] xs:min-w-[90%] md:p-6">
      <span className="my-5 text-3xl font-semibold">
        {formState.businessName} / Caterers
      </span>

      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Basic Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Catering Service Name</span>
          <span className="text-lg font-semibold">{formState.cateringName}</span>
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Manager Name (POC)</span>
          <span className="text-lg font-semibold">{formState.businessName}</span>
        </div>

        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Cuisine Speciliaty</span>
          <Appetizers
            appetizers={cuisineSpecialties}
            selectedAppetizers={cuisineSpecialties}
            setSelectedAppetizers={setCuisineSpecialties}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Regional Specialties</span>
          <Appetizers
            appetizers={regionalSpecialties}
            selectedAppetizers={regionalSpecialties}
            setSelectedAppetizers={setRegionalSpecialties}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Service Styles Offered</span>
          <Appetizers
            appetizers={serviceStyles}
            selectedAppetizers={serviceStyles}
            setSelectedAppetizers={setServiceStyles}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Menu Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
      <div className="flex w-1/2 flex-col px-4 mb-2">
            <span className="text-xl font-semibold">Uploaded Menu</span>

            <span className="font-semibold">
              {typeof formState.menu === "string" ? (
                formState.menu
              ) : (
                <File file={formState.menu} />
              )}
            </span>
          </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Appetizers</span>
          <Appetizers
            // field={'_appetizers'}
            appetizers={selectedAppetizers}
            selectedAppetizers={selectedAppetizers}
            setSelectedAppetizers={setSelectedAppetizers}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Beverages</span>
          <Appetizers
            // field={'_beverages'}
            appetizers={selectedBeverages}
            selectedAppetizers={selectedBeverages}
            setSelectedAppetizers={setSelectedBeverages}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Main Courses</span>
          <Appetizers
            //  field={'_mainCourses'}
            appetizers={selectedMainCourses}
            selectedAppetizers={selectedMainCourses}
            setSelectedAppetizers={setSelectedMainCourses}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Dietary Options</span>
          <Appetizers
            // field={'_dietaryOptions'}
            appetizers={selectedDietaryOptions}
            selectedAppetizers={selectedDietaryOptions}
            setSelectedAppetizers={setSelectedDietaryOptions}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Pre-Set Menu</span>
          <p className="text-lg font-semibold break-words whitespace-normal">{formState.preSetMenu}</p>
        </div>
        <div className="m-6 mt-4 flex flex-col gap-1">
          <span className="text-xl font-semibold">Customizable</span>
          <span className="text-lg font-semibold">{formState.customizableMenu ? "yes" : "no"}</span>
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Event Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Event Options</span>
          <Appetizers
            // field={'EventTypes'}
            appetizers={selectedEventTypes}
            selectedAppetizers={selectedEventTypes}
            setSelectedAppetizers={setSelectedEventTypes}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Additional Services</span>
          <Appetizers
            // field={'additionalServices'}
            appetizers={selectedAdditionalServices}
            selectedAppetizers={selectedAdditionalServices}
            setSelectedAppetizers={setSelectedAdditionalServices}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Staff & Equipments
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Staff provides</span>
          <Appetizers
            // field={'staffProvides'}
            appetizers={selectedStaffProvider}
            selectedAppetizers={selectedStaffProvider}
            setSelectedAppetizers={setSelectedStaffProvider}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl font-semibold">Equipments provided</span>
          <Appetizers
            // field={'equipmentsProvided'}
            appetizers={selectedEquipmentsProvided}
            selectedAppetizers={selectedEquipmentsProvided}
            setSelectedAppetizers={setSelectedEquipmentsProvided}
          />
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Booking & Pricing
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>

        <div
          className="flex min-w-full flex-col items-start justify-between gap-5 px-4 md:flex-row"
        >
          <div className="flex min-w-[40%] flex-col gap-4">
            <label  className="font-bold">
              Minimum Order Requirements
            </label>
            <div className="mb-2 flex flex-col">
              <span>{formState.minOrderReq}</span>
            </div>
          </div>
          <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
            <label
              className="self-start font-bold"
            >
              Advance Booking Period
            </label>
            <div className="flex w-[80%] flex-row justify-between gap-1">
              <span className="font-semibold">
                {formState.AdvBooking}
              </span>
            </div>
          </div>
        </div>

      <div className="flex min-w-full flex-col items-start justify-between gap-5 px-4 md:flex-row">
        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label className="self-start font-bold">Per plate rates</label>
          {dailyPackages.map((pkg, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
            >
              <div className="flex min-w-[40%] flex-col gap-4">
                <div key={index} className="mb-2 flex flex-col">
                  <span>{pkg?.package_name}</span>
                  <span className="font-semibold">
                    ₹{pkg?.priceRange[0]} - ₹{pkg?.priceRange[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label className="self-start font-bold">Deal Package rates</label>
          {seasonalPackages.map((pkg, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
            >
              <div className="flex min-w-[40%] flex-col gap-4">
                <div key={index} className="mb-2 flex flex-col">
                  <span>{pkg?.package_name}</span>
                  <span className="font-semibold">
                    ₹{pkg.priceRange[0]} - ₹{pkg.priceRange[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-w-full flex-col items-start justify-between gap-5 px-4 md:flex-row">
        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label className="self-start font-bold">Advance Payment</label>
          <span className="font-semibold">{advancePayment}%</span>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Additional Features
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-[100%] flex flex-col gap-8">
        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="text-xl font-semibold">Tasting sessions</span>

            <span className="font-semibold">
              {formState.tastingSessions ? "yes" : "no"}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl font-semibold">Buisness Licenses</span>
            <span className="font-semibold">
              {formState.businessLicenses ? "yes" : "no"}
            </span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-4">
          <span className="text-xl font-semibold">Food Safety Certificate</span>
          <span className="font-semibold">
            {formState.foodSafety ? "yes" : "no"}
          </span>
        </div>
      </div>

      <div className="w-[100%] flex flex-col gap-10">
        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="text-xl font-semibold">Terms and Condition</span>

            <span className="font-semibold">
              {typeof formState.termsAndConditions === "string" ? (
                formState.termsAndConditions
              ) : (
                <File file={formState.termsAndConditions} />
              )}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="text-xl font-semibold">Cancellation Policy</span>
            <span className="font-semibold">
              {typeof formState.cancellationPolicy === "string" ? (
                formState.cancellationPolicy
              ) : (
                <File file={formState.cancellationPolicy} />
              )}
            </span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-4">
          <span className="text-xl font-semibold">Portfolio</span>
          <span className="font-semibold">
            {typeof formState.portfolio === "string" ? (
              formState.portfolio
            ) : (
              <File file={formState.portfolio} />
            )}
          </span>
        </div>
      </div>
      <button
        className="flex w-fit items-center justify-center self-end rounded-xl bg-[#2E3192] p-5 text-white xs:text-[4vw] md:text-[2vw] lg:w-[10vw] lg:text-[1vw]"
      onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default Preview;
