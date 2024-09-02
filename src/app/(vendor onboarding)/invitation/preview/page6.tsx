import { Check, EditIcon } from "lucide-react";
import { SetStateAction } from "react";
import Appetizers from "../..//(components)/Appetizers";
import File from "../../caterer/(components)/File"
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
  references: boolean;
  portfolio: string;
  experience: string;
  // Page 2
  customInvitationsFromScratch: boolean;
  semiCustomInvitations: boolean;
  foilStamping: boolean;
  engraving: boolean;
  letterPressPrinting: boolean;
  preDesignedCards: boolean;
  differentCardstockWeights: boolean;
  informationInserts: boolean;
  // Page 3

  additionalStationery: boolean;
  thankYouCards: boolean;
  designConcepts: boolean;
  discussVision: boolean;
  specialTouch: boolean;
  initialConsultation: boolean;
  allowRevisions: boolean;
  provideProofs: boolean;
  designconcept: boolean;
  // Page 4
  termsandConditions: string;
  cancellationPolicy: string;
  clienttestimonials: string;
  extracharges: boolean;
  deposit: boolean;
};
type PagePreviewProps = {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  typesOfInvitationsYouDesign: string[];
  setTypesOfInvitationsYouDesign: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  formalinvitation: string[];
  setFormalInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  casualinvitation: string[];
  setCasualInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  Electronicinvitation: string[];
  setElectronicInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  handmadeinvitation: string[];
  setHandmadeInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  printedInvitation: string[];
  setPrintedInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  specialyInvitation: string[];
  setSpecialyInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  uniqueInvitation: string[];
  setUniqueInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  relegiousInvitation: string[];
  setRelegiousInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  otherInvitation: string[];
  setOtherInvitation: React.Dispatch<React.SetStateAction<string[]>>;

  paperType: string[];
  setPaperType: React.Dispatch<React.SetStateAction<string[]>>;

  envelopeTypes: string[];
  setEnvelopeTypes: React.Dispatch<React.SetStateAction<string[]>>;

  perPeicePriceRange: Package[];
  setperPeicePriceRange: React.Dispatch<React.SetStateAction<Package[]>>;
  bulkPriceRange: Package[];
  setbulkPriceRange: React.Dispatch<React.SetStateAction<Package[]>>;
  advancePayment: number;
  setAdvancePayment: (newValue: number) => void;
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
  typesOfInvitationsYouDesign,
  setTypesOfInvitationsYouDesign,
  formalinvitation,
  setFormalInvitation,
  casualinvitation,
  setCasualInvitation,
  Electronicinvitation,
  setElectronicInvitation,
  handmadeinvitation,
  setHandmadeInvitation,
  printedInvitation,
  setPrintedInvitation,
  specialyInvitation,
  setSpecialyInvitation,
  uniqueInvitation,
  setUniqueInvitation,
  relegiousInvitation,
  setRelegiousInvitation,
  otherInvitation,
  setOtherInvitation,

  paperType,
  setPaperType,

  envelopeTypes,
  setEnvelopeTypes,

  perPeicePriceRange,
  setperPeicePriceRange,
  bulkPriceRange,
  setbulkPriceRange,
  advancePayment,
  setAdvancePayment,
  handlePackageChange,
  addPackage,
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
          <span className="mx-2 my-5 text-3xl font-semibold">/ Invitation</span>
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
                <span className="">Portfolio of Past Work</span>

                <span className="font-semibold">
                  {typeof formState.portfolio === "string" ? (
                    "no file selected"
                  ) : (
                    <File file={formState.portfolio} />
                  )}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="">
                  Do you provide references upon request ?
                </span>
                <span className="font-semibold">
                  {formState.references ? "yes" : "no"}
                </span>
              </div>
            </div>
            <div className="mt-4 flex w-3/4 flex-col px-4">
              <span className="mb-2">Years of Experience ?</span>
              <span className="mt-2 font-semibold">{formState.experience}</span>
            </div>
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Types of Invitations you design</span>
            <Appetizers
              appetizers={typesOfInvitationsYouDesign}
              selectedAppetizers={typesOfInvitationsYouDesign}
              setSelectedAppetizers={setTypesOfInvitationsYouDesign}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Formal Invitations</span>
            <Appetizers
              appetizers={formalinvitation}
              selectedAppetizers={formalinvitation}
              setSelectedAppetizers={setFormalInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Casual Invitations</span>
            <Appetizers
              appetizers={casualinvitation}
              selectedAppetizers={casualinvitation}
              setSelectedAppetizers={setCasualInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Electronic Invitations</span>
            <Appetizers
              appetizers={Electronicinvitation}
              selectedAppetizers={Electronicinvitation}
              setSelectedAppetizers={setElectronicInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Handmade Invitations</span>
            <Appetizers
              appetizers={handmadeinvitation}
              selectedAppetizers={handmadeinvitation}
              setSelectedAppetizers={setHandmadeInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Printed Invitations</span>
            <Appetizers
              appetizers={printedInvitation}
              selectedAppetizers={printedInvitation}
              setSelectedAppetizers={setPrintedInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Specialty Invitations</span>
            <Appetizers
              appetizers={specialyInvitation}
              selectedAppetizers={specialyInvitation}
              setSelectedAppetizers={setSpecialyInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Unique Invitations</span>
            <Appetizers
              appetizers={uniqueInvitation}
              selectedAppetizers={uniqueInvitation}
              setSelectedAppetizers={setUniqueInvitation}
            />
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">Religious and Cultural Invitations</span>
            <Appetizers
              appetizers={relegiousInvitation}
              selectedAppetizers={relegiousInvitation}
              setSelectedAppetizers={setRelegiousInvitation}
            />
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
          <div className="w-[100%] font-semibold">
            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="text-lg">
                  Do you create custom invitations from the scratch?
                </span>
                <span className="font-semibold">
                  {formState.customInvitationsFromScratch ? "yes" : "no"}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="text-lg">
                  Do you offer letter-press printing for more luxurious look ?
                </span>
                <span className="font-semibold">
                  {formState.letterPressPrinting ? "yes" : "no"}
                </span>
              </div>
            </div>
            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="text-lg">
                  Do you create semi - custom invitations ?
                </span>
                <span className="font-semibold">
                  {formState.semiCustomInvitations ? "yes" : "no"}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="text-lg">
                  Do you have pre-designed cards available ?
                </span>
                <span className="font-semibold">
                  {formState.preDesignedCards ? "yes" : "no"}
                </span>
              </div>
            </div>
            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="text-lg">
                  Do they offer foil stamping for metallic accents ?
                </span>
                <span className="font-semibold">
                  {formState.foilStamping ? "yes" : "no"}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="text-lg">
                  Do you offer different cardstock weights for invitations?
                </span>
                <span className="font-semibold">
                  {formState.differentCardstockWeights ? "yes" : "no"}
                </span>
              </div>
            </div>
            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="text-lg">
                  Do they offer engraving for a classic and elegant look ?
                </span>
                <span className="font-semibold">
                  {formState.engraving ? "yes" : "no"}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="text-lg">
                  Do you design information inserts for additional event details
                  ?
                </span>
                <span className="font-semibold">
                  {formState.informationInserts ? "yes" : "no"}
                </span>
              </div>
            </div>
          </div>
          <div className="m-6 mt-4 flex flex-col">
            <span className="text-xl">
              Types of Paper used for Invitations ?
            </span>
            <Appetizers
              appetizers={paperType}
              selectedAppetizers={paperType}
              setSelectedAppetizers={setPaperType}
            />
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              Pricing & Policies
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
                <span className="">Terms & Condition</span>

                <span className="font-semibold">
                  {typeof formState.termsandConditions === "string" ? (
                    formState.termsandConditions
                  ) : (
                    <File file={formState.termsandConditions} />
                  )}
                </span>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="">Cancellation Policy</span>
                <span className="font-semibold">
                  {typeof formState.cancellationPolicy === "string" ? (
                    formState.cancellationPolicy
                  ) : (
                    <File file={formState.cancellationPolicy} />
                  )}
                </span>
              </div>
            </div>

            <div className="flex gap-16 py-2">
              <div className="flex w-1/2 flex-col px-4">
                <span className="">Client Testimonials</span>

                <span className="font-semibold">
                  {typeof formState.clienttestimonials === "string" ? (
                    formState.clienttestimonials
                  ) : (
                    <File file={formState.clienttestimonials} />
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
