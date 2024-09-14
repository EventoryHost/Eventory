"use client";

import FileInput from "@/components/fileInput";

interface FormState {
  insurancePolicy: string | File;
  cancellationPolicy: string | File;
  termsAndConditions: string | File;
  privacyPolicy: string | File;
}

interface Page7Props {
  handleContinue: () => void;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page7: React.FC<Page7Props> = ({ formState, updateFormState ,handleContinue}) => {
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
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Mandatory Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Insurance coverage policy</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="insurance policy"
                  onFileSelect={(file) =>
                    updateFormState({ insurancePolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Cancellation Policy</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="cancellation policy"
                  onFileSelect={(file) =>
                    updateFormState({ cancellationPolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ insurancePolicy: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Terms & Condition</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="terms and conditions"
                  onFileSelect={(file) =>
                    updateFormState({ termsAndConditions: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Privacy Policy</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="privacy policy"
                  onFileSelect={(file) =>
                    updateFormState({ privacyPolicy: file })
                  }
                  acceptedFileTypes=".png,.pdf,.jpg"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ termsAndConditions: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ privacyPolicy: e.target.value })
                  }
                />
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
          
        </div>
      </div>
    </div>
  );
};

export default Page7;
