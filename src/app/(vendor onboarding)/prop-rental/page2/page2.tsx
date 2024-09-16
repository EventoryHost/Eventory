import StepBar from "@/app/(components)/stepBar";
import FileInput from "@/components/fileInput";
import { Upload } from "lucide-react";
import { SetStateAction } from "react";

interface formState {
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;
  handleChange: (key: string, value: any) => void;
}

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

export interface page2Props {
  formState: formState;
  handleChange: (key: string, value: any) => void;
  handleNestedChange: (key: string, nestedKey: string, value: any) => void;
  navigateToPage: (page: number) => void;
  selectedCategory: string;
  setSelectedCategory: (value: any) => void;
  selectedAppetizers: string[];
  setselectedAppetizers: (value: SetStateAction<string[]>) => void;
  selectedDecor: string[];
  setSelectedDecor: (value: any) => void;
  selectedTentOptions: string[];
  setSelectedTentOptions: (value: any) => void;
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  percentageValuePage3: number;
  percentageValuePage4: number;
  percentageValuePage5: number;
  furnitureHourlyPricingEntries: any;
  tentHourlyPricingEntries: any;
  furnitureDealPricingEntries: any;
  furnitureWorkerPricingEntries: any;
  handleAddPricingEntry: (entry: PricingEntry) => void;
  handleAddTentHourlyPricingEntries: (entry: PricingEntry) => void;
  handleAddTentPricingEntry: (entry: PricingEntry) => void;
  handleAddAudioPricingEntry: (entry: PricingEntry) => void;
  updateFormState: (value: any) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const Page2: React.FC<page2Props> = ({
  formState,
  handleChange,
  handleNestedChange,
  updateFormState,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={2} />
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
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Mandatory Details</h1>
          </div>
          <div className="flex flex-col items-center gap-5 p-4 md:p-6">
            {/* Row 1: Insurance Coverage Policy & Cancellation Policy */}
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label className="font-semibold" htmlFor="insurancePolicy">
                  Insurance Coverage Policy
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="insurance policy"
                  onFileSelect={(file) => {
                    updateFormState({ insurancePolicy: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label className="font-semibold" htmlFor="cancellationPolicy">
                  Cancellation Policy
                </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="cancellation policy"
                  onFileSelect={(file) => {
                    updateFormState({ cancellationPolicy: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
            </div>

            {/* Row 2: Insurance Policy & Cancellation Policy Inputs */}
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label htmlFor="insurancePolicy">Or Provide Via</label>
                <input
                  id="insurancePolicy"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter your insurance policy description"
                  value={
                    typeof formState.insurancePolicy === "string"
                      ? formState.insurancePolicy
                      : formState.insurancePolicy?.name || ""
                  }
                  onChange={(e) =>
                    handleChange("insurancePolicy", e.target.value)
                  }
                />
              </div>
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <label htmlFor="cancellationPolicy">Or Provide Via</label>
                <input
                  id="cancellationPolicy"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter your cancellation policy description"
                  value={
                    typeof formState.cancellationPolicy === "string"
                      ? formState.cancellationPolicy
                      : formState.cancellationPolicy?.name || ""
                  }
                  onChange={(e) =>
                    handleChange("cancellationPolicy", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 rounded-xl bg-white p-4 xs:min-w-[90%] md:p-6">
          {/* Row 1: Terms and Conditions & Privacy Policy Uploads */}
          <div className="flex w-full flex-col gap-6 md:flex-row md:gap-6">
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <label className="font-semibold" htmlFor="termsAndConditions">
                Terms and Conditions
              </label>
              <p className="text-gray-500">PNG, PDF, JPG</p>
              <FileInput
                label="terms and conditions"
                onFileSelect={(file) => {
                  updateFormState({ termsAndConditions: file });
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <label className="font-semibold" htmlFor="privacyPolicy">
                Privacy Policy
              </label>
              <p className="text-gray-500">PNG, PDF, JPG</p>
              <FileInput
                label="privacy policy"
                onFileSelect={(file) => {
                  updateFormState({ privacyPolicy: file });
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
            </div>
          </div>

          {/* Row 2: Terms and Conditions & Privacy Policy Inputs */}
          <div className="flex w-full flex-col gap-6 md:flex-row md:gap-6">
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <label htmlFor="termsAndConditions">Or Provide Via</label>
              <input
                id="termsAndConditions"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your terms and conditions description"
                value={
                  typeof formState.termsAndConditions === "string"
                    ? formState.termsAndConditions
                    : formState.termsAndConditions?.name || ""
                }
                onChange={(e) =>
                  handleChange("termsAndConditions", e.target.value)
                }
              />
            </div>
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <label htmlFor="privacyPolicy">Or Provide Via</label>
              <input
                id="privacyPolicy"
                type="text"
                className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                placeholder="Enter your privacy policy description"
                value={
                  typeof formState.privacyPolicy === "string"
                    ? formState.privacyPolicy
                    : formState.privacyPolicy?.name || ""
                }
                onChange={(e) => handleChange("privacyPolicy", e.target.value)}
              />
            </div>

          </div>
            {/* Button container */}
            <div className="mr-[5%] flex w-full justify-end gap-[32px]">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Previous
              </button>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              >
                Next
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
