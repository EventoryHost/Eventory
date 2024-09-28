"use client";

import FileInput from "@/components/fileInput";
import { ArrowLeft } from "lucide-react";

interface FormState {
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;
}

interface Page7Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page7: React.FC<Page7Props> = ({
  formState,
  updateFormState,
  handleContinue,
  currentPage,
  setCurrentPage,
}) => {
  const {
    insurancePolicy,
    cancellationPolicy,
    termsAndConditions,
    privacyPolicy,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Mandatory Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-10">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Insurance coverage policy
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="insurance policy"
                  onFileSelect={(file) =>
                    updateFormState({ insurancePolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
                <p className="text-lg">or Provide Via</p>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ insurancePolicy: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Cancellation Policy
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="cancellation policy"
                  onFileSelect={(file) =>
                    updateFormState({ cancellationPolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
                <label htmlFor="category">Or provide Via</label>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Terms & Condition
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="terms and conditions"
                  onFileSelect={(file) =>
                    updateFormState({ termsAndConditions: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
                <label htmlFor="category">Or provide Via</label>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ termsAndConditions: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Privacy Policy
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="privacy policy"
                  onFileSelect={(file) =>
                    updateFormState({ privacyPolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
                <label htmlFor="category">Or provide Via</label>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ privacyPolicy: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="items-strech flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
