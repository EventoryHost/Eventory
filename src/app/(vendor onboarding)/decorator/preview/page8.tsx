import { EditIcon } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";
import File from "../../caterer/(components)/File";
import { FormState } from "../page";
import FileDisplay from "../../caterer/(components)/File";

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

type PagePreviewProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  typeOfevents: string[];
  setTypesOfEvents: React.Dispatch<React.SetStateAction<string[]>>;
  weddingEvents: string[];
  setWeddingEvents: React.Dispatch<React.SetStateAction<string[]>>;
  corporateEvents: string[];
  setCorporateEvents: React.Dispatch<React.SetStateAction<string[]>>;
  seasonalEvents: string[];
  setSeasonalEvents: React.Dispatch<React.SetStateAction<string[]>>;
  culturalEvents: string[];
  setCulturalEvents: React.Dispatch<React.SetStateAction<string[]>>;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesOffered: string[];
  setThemesOffered: React.Dispatch<React.SetStateAction<string[]>>;

  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;

  hourlyPackages: Package[];
  setHourlyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  dailyPackages: Package[];
  setDailyPackages: React.Dispatch<React.SetStateAction<Package[]>>;
  additionalCharges: Package[];
  setAdditionalCharges: React.Dispatch<React.SetStateAction<Package[]>>;
  handlePackageChange: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => void;
  addPackage: (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => void;
  handleContinue: () => void;

  advancePayment: number;
  setAdvancePayment: React.Dispatch<React.SetStateAction<number>>;
};

function Preview({
  typeOfevents,
  setTypesOfEvents,
  weddingEvents,
  setWeddingEvents,
  corporateEvents,
  setCorporateEvents,
  seasonalEvents,
  setSeasonalEvents,
  culturalEvents,
  setCulturalEvents,

  formState,
  updateFormState,
  themesOffered,
  setThemesOffered,

  themesElements,
  setThemesElements,

  hourlyPackages,
  setHourlyPackages,
  dailyPackages,
  setDailyPackages,
  additionalCharges,
  setAdditionalCharges,
  handlePackageChange,
  addPackage,
  advancePayment,
  setAdvancePayment,
  handleContinue,
  setCurrentPage,
}: PagePreviewProps) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-white p-6 scrollbar-hide md:p-10">
      <span className="text-xl font-semibold">
        {formState.businessName} / Decorators
      </span>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Basic Details
        <div className="align-center flex justify-center p-1">
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
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Types of Event</span>
          <Appetizers
            appetizers={typeOfevents}
            selectedAppetizers={typeOfevents}
            setSelectedAppetizers={setTypesOfEvents}
          />
        </div>

        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Wedding Events</span>
          <Appetizers
            appetizers={weddingEvents}
            selectedAppetizers={weddingEvents}
            setSelectedAppetizers={setWeddingEvents}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Corporate Events</span>
          <Appetizers
            appetizers={corporateEvents}
            selectedAppetizers={corporateEvents}
            setSelectedAppetizers={setCorporateEvents}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Seasonal Event</span>
          <Appetizers
            appetizers={seasonalEvents}
            selectedAppetizers={seasonalEvents}
            setSelectedAppetizers={setSeasonalEvents}
          />
        </div>
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Cultural Events</span>
          <Appetizers
            appetizers={culturalEvents}
            selectedAppetizers={culturalEvents}
            setSelectedAppetizers={setCulturalEvents}
          />
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Themes Offered
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
        <div className="m-6 mt-4 flex flex-col gap-2">
          <span className="text-xl">Themes</span>
          <Appetizers
            appetizers={themesOffered}
            selectedAppetizers={themesOffered}
            setSelectedAppetizers={setThemesOffered}
          />
        </div>

        <div className="w-[100%] px-2 font-semibold">
          <div className="flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="">Do you offer prop selection for themes ?</span>

              <span className="font-semibold">
                {formState.propthemesOffered ? "yes" : "no"}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="">
                Do you adapt themes to different venue sizes ?
              </span>
              <span className="font-semibold">
                {formState.adobtThemes ? "yes" : "no"}
              </span>
            </div>
          </div>
          <div className="flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="">
                Do you adapt themes to different venue sizes ?
              </span>

              <span className="font-semibold">
                {formState.colorschmes ? "yes" : "no"}
              </span>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="">Do you offer customization of themes ?</span>
              <span className="font-semibold">
                {formState.customizationsThemes ? "yes" : "no"}
              </span>
            </div>
          </div>
          <div className="mt-4 flex w-3/4 flex-col px-4">
            <span className="mb-2">Custom design process</span>
            <span className="mt-2 font-semibold">
              {formState.customDesignProcess}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Themes Element
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
        <div className="m-6 mt-4 flex flex-col">
          <span className="text-xl">Themes Elements</span>
          <Appetizers
            appetizers={themesElements}
            selectedAppetizers={themesElements}
            setSelectedAppetizers={setThemesElements}
          />
        </div>

        <div className="w-[100%] px-2 font-semibold">
          <div className="flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="mb-2">Description of backdrop options</span>

              <p className="w-3/4 break-words font-semibold">
                {formState.customDesignProcess}
              </p>
            </div>
            {/* <div className="flex w-1/2 flex-col">
              <span className="mb-2">
                Description of stage decoration options
              </span>
              <span className="w-3/4 break-words font-semibold">
                {formState.decorationoptions}
              </span>
            </div> */}
          </div>
          <div className="mt-4 flex w-1/2 flex-col px-4">
            <span className="mb-2">
              {" "}
              Description of prop & accessory selection
            </span>
            {/* <span className="w-3/4 break-words font-semibold">
              {formState.backDropoptions}
            </span> */}
          </div>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Consultation Details
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
        <div className="w-[100%] px-2 font-semibold">
          <div className="mb-4 flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="mb-2">
                Do you offer free initial consultations?
              </span>

              <p className="break-words font-semibold">
                {formState.freeInitialConsultation ? "yes" : "no"}
              </p>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="mb-2">
                Do you offer revisions to the initial theme proposal?
              </span>
              <span className="break-words font-semibold">
                {formState.revisionPolicy ? "yes" : "no"}
              </span>
            </div>
          </div>
          <div className="mb-4 flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="mb-2">
                Do you provide a written theme proposal after consultation?
              </span>

              <p className="break-words font-semibold">
                {formState.writtenthemeProposal ? "yes" : "no"}
              </p>
            </div>
            <div className="flex w-1/2 flex-col">
              <span className="mb-2">
                Do you handle setup and installation of the decor?
              </span>
              <span className="break-words font-semibold">
                {formState.setup_installation ? "yes" : "no"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Pricing Structure
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
        <div className="w-[100%] px-2 font-semibold">
          <div className="mb-4 flex gap-16 py-2">
            <div className="flex w-1/2 flex-col px-4">
              <span className="mb-2">Hourly package rates</span>

              {hourlyPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
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
            <div className="flex w-1/2 flex-col px-4">
              <span className="mb-2">Daily package rates</span>

              {dailyPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
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
          <div className="flex w-1/2 flex-col px-4">
            <span className="mb-2">Additional charges rates</span>

            {additionalCharges.map((pkg, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row"
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

          <div className="mt-4 flex w-1/2 flex-col px-4">
            <span className="mb-2">Advance Payment</span>
            <span className="font-semibold">{advancePayment}%</span>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Rating & Reviews
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
                fill="#2B3F6C"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Portfolio</span>

            <span className="font-semibold">
              {typeof formState.portfolio === "string" ? (
                "no file selected"
              ) : (
                <File file={formState.portfolio} />
              )}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="">Online Ratings and Reviews</span>
            <span className="font-semibold">
              {typeof formState.ratings_reviews === "string" ? (
                "no file selected"
              ) : (
                <File file={formState.ratings_reviews} />
              )}
            </span>
          </div>
        </div>

        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Client Testimonials </span>

            <span className="font-semibold">
              {typeof formState.clientTestimonials === "string" ? (
                "no file selected"
              ) : (
                <File file={formState.clientTestimonials} />
              )}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="">Certificate or award</span>
            <span className="font-semibold">
              {typeof formState.certificates_awards === "string" ? (
                "no file selected"
              ) : (
                <File file={formState.certificates_awards} />
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] justify-between rounded-xl bg-[rgba(96,94,216,0.1)] p-2 pl-4 text-xl font-semibold">
        Mandatory Details
        <div className="align-center flex justify-center p-1">
          <button onClick={() => setCurrentPage(7)}>
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

      <div className="w-[100%]">
        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Insurance coverage policy</span>

            <span className="font-semibold">
            {typeof formState.insurancePolicy === "string" ? (
                <div>{formState.insurancePolicy}</div> // Handle string case
              ) : Array.isArray(formState.insurancePolicy) ? (
                <FileDisplay files={formState.insurancePolicy} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.insurancePolicy} /> // Handle single File case
              )}
            </span>
          </div>
          <div className="flex w-1/2 flex-col">
            <span className="">Cancellation Policy</span>
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

        <div className="flex gap-16 py-2">
          <div className="flex w-1/2 flex-col px-4">
            <span className="">Terms & Condition</span>

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
          <div className="flex w-1/2 flex-col">
            <span className="">Privacy Policy</span>
            <span className="font-semibold">
            {typeof formState.privacyPolicy === "string" ? (
                <div>{formState.privacyPolicy}</div> // Handle string case
              ) : Array.isArray(formState.privacyPolicy) ? (
                <FileDisplay files={formState.privacyPolicy} /> // Handle File[] case
              ) : (
                <FileDisplay file={formState.privacyPolicy} /> // Handle single File case
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="items-strech mt-9 flex flex-row gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          onClick={handleContinue}
        >
          Skip
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
