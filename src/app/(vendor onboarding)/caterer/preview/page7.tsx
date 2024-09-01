import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../../(components)/Appetizers";
import File from "../(components)/File"
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
  // Page 6
  tastingSessions: boolean;
  businessLicenses: boolean;
  foodSafety: boolean;
  cateringServiceImages: string | File;
  videoEvent: string | File;
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
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

  hourlyPackages: Package[];
  setHourlyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
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
};

function Preview({
  formState,
  updateFormState,
  cuisineSpecialties,
  setCuisineSpecialties,
  regionalSpecialties,
  setRegionalSpecialties,
  serviceStyles,
  setServiceStyles,

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

  hourlyPackages,
  setHourlyPackages,
  dailyPackages,
  setDailyPackages,
  seasonalPackages,
  setSeasonalPackages,
  handlePackageChange,
  addPackage,
}: PagePreviewProps) {
  return (

    <div className="flex h-full  flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] md:p-6">
      <span className="my-5 text-3xl font-semibold">{formState.businessName} / Caterers</span>

      <div className=" w-[100%]   flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Basic Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Cuisine Speciliaty</span>
          <Appetizers
            appetizers={cuisineSpecialties}
            selectedAppetizers={cuisineSpecialties}
            setSelectedAppetizers={setCuisineSpecialties}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Regional Specialties</span>
          <Appetizers
            appetizers={regionalSpecialties}
            selectedAppetizers={regionalSpecialties}
            setSelectedAppetizers={setRegionalSpecialties}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Service Styles Offered</span>
          <Appetizers
            appetizers={serviceStyles}
            selectedAppetizers={serviceStyles}
            setSelectedAppetizers={setServiceStyles}
          />
        </div>
      </div>
      <div className="   w-[100%] flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Menu Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Appetizers</span>
          <Appetizers
          // field={'_appetizers'}
            appetizers={selectedAppetizers}
            selectedAppetizers={selectedAppetizers}
            setSelectedAppetizers={setSelectedAppetizers}
          />
        </div>


        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Beverages</span>
          <Appetizers
          // field={'_beverages'}
            appetizers={selectedBeverages}
            selectedAppetizers={selectedBeverages}
            setSelectedAppetizers={setSelectedBeverages}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Main Courses</span>
          <Appetizers
          //  field={'_mainCourses'}
            appetizers={selectedMainCourses}
            selectedAppetizers={selectedMainCourses}
            setSelectedAppetizers={setSelectedMainCourses}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Dietary Options</span>
          <Appetizers
          // field={'_dietaryOptions'}
            appetizers={selectedDietaryOptions}
            selectedAppetizers={selectedDietaryOptions}
            setSelectedAppetizers={setSelectedDietaryOptions}
          />
        </div>
      </div>
      <div className="   w-[100%] flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Event Details
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Event Options</span>
          <Appetizers
          // field={'EventTypes'}
            appetizers={selectedEventTypes}
            selectedAppetizers={selectedEventTypes}
            setSelectedAppetizers={setSelectedEventTypes}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Additional Services</span>
          <Appetizers
          // field={'additionalServices'}
            appetizers={selectedAdditionalServices}
            selectedAppetizers={selectedAdditionalServices}
            setSelectedAppetizers={setSelectedAdditionalServices}
          />
        </div>
      </div>
      <div className="   w-[100%] flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Staff & Equipments
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Staff provides</span>
          <Appetizers
          // field={'staffProvides'}
            appetizers={selectedStaffProvider}
            selectedAppetizers={selectedStaffProvider}
            setSelectedAppetizers={setSelectedStaffProvider}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Equipments provided</span>
          <Appetizers
          // field={'equipmentsProvided'}
            appetizers={selectedEquipmentsProvided}
            selectedAppetizers={selectedEquipmentsProvided}
            setSelectedAppetizers={setSelectedEquipmentsProvided}
          />
        </div>
      </div>
      <div className="   w-[100%] flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Booking & Pricing
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>


      {hourlyPackages.map((pkg, index) => (
        <div
          key={index}
          className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row px-4"
        >
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor={`hourlyPackageType${index}`}>
              Minimum Order Requirements
            </label>
            <div key={index} className="mb-2 flex flex-col">
              <span>{pkg.type}</span>

            </div>
          </div>
          <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
            <label
              htmlFor={`hourlyPriceRange${index}`}
              className="self-start font-bold"
            >
              Advance Booking Period
            </label>
            <div className="flex w-[80%] flex-row justify-between gap-1">
              <span className="font-semibold">
                {pkg.priceRange[0]} - {pkg.priceRange[1]}
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row px-4">

        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label
            className="self-start font-bold"
          >
            Per plate rates
          </label>
          {dailyPackages.map((pkg, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row "
            >
              <div className="flex min-w-[40%] flex-col gap-4">

                <div key={index} className="mb-2 flex flex-col">
                  <span>{pkg.type}</span>
                  <span className="font-semibold">
                    ₹{pkg.priceRange[0]} - ₹{pkg.priceRange[1]}
                  </span>

                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label
            className="self-start font-bold"
          >
            Deal Package rates
          </label>
          {seasonalPackages.map((pkg, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row "
            >
              <div className="flex min-w-[40%] flex-col gap-4">

                <div key={index} className="mb-2 flex flex-col">
                  <span>{pkg.type}</span>
                  <span className="font-semibold">
                    ₹{pkg.priceRange[0]} - ₹{pkg.priceRange[1]}
                  </span>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row px-4">
        <div className="flex h-full min-w-[40%] flex-col items-start justify-center gap-2">
          <label
            className="self-start font-bold"
          >
            Advance Payment
          </label>

        </div>
      </div>

      <div className="   w-[100%] flex justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
        Additional Features
        <div className="align-center flex justify-center p-1">
          <button>
            <EditIcon size={32} />
          </button>
        </div>
      </div>
      <div className="w-[100%]">
        <div className=" flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Tasting sessions</span>

            <span className="font-semibold">{formState.tastingSessions ? 'yes' : 'no'}</span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="">Buisness Licenses</span>
            <span className="font-semibold">{formState.businessLicenses ? 'yes' : 'no'}</span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-4">
          <span className="">Food Safety Certificate</span>
          <span className="font-semibold">
            {formState.foodSafety ? 'yes' : 'no'}
          </span>
        </div>
      </div>

      <div className="w-[100%]">
        <div className=" flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Terms and Condition</span>

            <span className="font-semibold">
              {typeof formState.termsAndConditions === 'string'
                ? formState.termsAndConditions
                : <File file={formState.termsAndConditions} />}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="">Cancellation Policy</span>
            <span className="font-semibold">
              {typeof formState.cancellationPolicy === 'string'
                ? formState.cancellationPolicy
                : <File file={formState.cancellationPolicy} />}
            </span>
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-4">
          <span className="">Portfolio</span>
          <span className="font-semibold">
            {typeof formState.cateringServiceImages === 'string'
              ? formState.cateringServiceImages
              : <File file={formState.cateringServiceImages} />}
          </span>
        </div>
      </div>

    </div>




  );
}

export default Preview;
