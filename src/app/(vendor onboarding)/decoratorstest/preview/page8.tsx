import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../../(components)/Appetizers";
import File from "../../caterer/(components)/File";
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
  references: boolean;
  experience: string;
  // Page 2
  propthemesOffered: boolean;
  adobtThemes: boolean;
  colorschmes: boolean;
  customizationsThemes: boolean;
  customDesignProcess: string;

  // Page 3
  backDropoptions: string;
  decorationoptions: string;
  prop_accessory: string;

  // Page 4
  freeInitialConsultation: boolean;
  revisionPolicy: boolean;
  writtenthemeProposal: boolean;
  setup_installation: boolean;
  consulationProcess: string;

  //page 6
  portfolio: string;
  ratings_reviews: string;
  clientTestimonials: string;
  certificates_awards: string;

  //page 7
  insurancePolicy: string;
  cancellationPolicy: string;
  termsAndConditions: string;
  privacyPolicy: string;
};

type PagePreviewProps = {
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
}: PagePreviewProps) {
  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-5 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5">
            5
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col gap-5 overflow-y-scroll bg-[#F7F6F9] p-6">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-2">
          <span className="mx-2 my-5 text-3xl font-semibold">
            {formState.businessName} / Decorators
          </span>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Basic Details
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="m-6 mt-4 flex flex-col">
              <span className="text-xl">Types of Event</span>
              <Appetizers
                appetizers={typeOfevents}
                selectedAppetizers={typeOfevents}
                setSelectedAppetizers={setTypesOfEvents}
              />
            </div>

            <div className="m-6 mt-4 flex flex-col">
              <span className="text-xl">Wedding Events</span>
              <Appetizers
                appetizers={weddingEvents}
                selectedAppetizers={weddingEvents}
                setSelectedAppetizers={setWeddingEvents}
              />
            </div>
            <div className="m-6 mt-4 flex flex-col">
              <span className="text-xl">Corporate Events</span>
              <Appetizers
                appetizers={corporateEvents}
                selectedAppetizers={corporateEvents}
                setSelectedAppetizers={setCorporateEvents}
              />
            </div>
            <div className="m-6 mt-4 flex flex-col">
              <span className="text-xl">Seasonal Event</span>
              <Appetizers
                appetizers={seasonalEvents}
                selectedAppetizers={seasonalEvents}
                setSelectedAppetizers={setSeasonalEvents}
              />
            </div>
            <div className="m-6 mt-4 flex flex-col">
              <span className="text-xl">Cultural Events</span>
              <Appetizers
                appetizers={culturalEvents}
                selectedAppetizers={culturalEvents}
                setSelectedAppetizers={setCulturalEvents}
              />
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Themes Offered
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="m-6 mt-4 flex flex-col">
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
                  <span className="">
                    Do you offer prop selection for themes ?
                  </span>

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
                  <span className="">
                    Do you offer customization of themes ?
                  </span>
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
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Themes Element
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
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
                    {formState.backDropoptions}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2">
                    Description of stage decoration options
                  </span>
                  <span className="w-3/4 break-words font-semibold">
                    {formState.decorationoptions}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex w-1/2 flex-col px-4">
                <span className="mb-2">
                  {" "}
                  Description of prop & accessory selection
                </span>
                <span className="w-3/4 break-words font-semibold">
                  {formState.backDropoptions}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Consultation Details
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
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
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Pricing Structure
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
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

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Rating & Reviews
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
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

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Mandatory Details
              <div className="align-center flex justify-center p-1">
                <button>
                  <EditIcon size={32} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="">Insurance coverage policy</span>

                <span className="font-semibold">
                  {typeof formState.insurancePolicy === "string" ? (
                    "no file selected"
                  ) : (
                    <File file={formState.insurancePolicy} />
                  )}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="">Cancellation Policy</span>
                <span className="font-semibold">
                  {typeof formState.cancellationPolicy === "string" ? (
                    "no file selected"
                  ) : (
                    <File file={formState.cancellationPolicy} />
                  )}
                </span>
              </div>
            </div>

            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="">Terms & Condition</span>

                <span className="font-semibold">
                  {typeof formState.termsAndConditions === "string" ? (
                    "no file selected"
                  ) : (
                    <File file={formState.termsAndConditions} />
                  )}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="">Privacy Policy</span>
                <span className="font-semibold">
                  {typeof formState.privacyPolicy === "string" ? (
                    "no file selected"
                  ) : (
                    <File file={formState.privacyPolicy} />
                  )}
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
