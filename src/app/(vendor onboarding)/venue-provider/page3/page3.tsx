"use client";

import { Upload } from "lucide-react";

interface FormState {
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
}

interface Page3Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page3: React.FC<Page3Props> = ({ formState, updateFormState }) => {
  const { termsAndConditions, cancellationPolicy } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Terms and Conditions:", formState.termsAndConditions);
    console.log("Cancellation Policy:", formState.cancellationPolicy);
  };

  return (
    <div className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Pricing and Policies</h1>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <div className="flex min-w-full flex-col items-start justify-between gap-2">
              <p className="text-xl font-semibold">Terms and Conditions</p>
              <p className="text-gray-500">PNG, PDF, JPG</p>
              <button className="relative flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload />
                Upload
                <input
                  type="file"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  accept="image/png, .pdf, image/jpg"
                  // className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(e) => {
                    const file = e.target.files![0];
                    updateFormState({
                      termsAndConditions: e.target.files![0],
                    });
                  }}
                />
              </button>
            </div>
          </div>
          <div className="flex min-w-[40%] flex-col gap-4">
            <div className="flex min-w-full flex-col items-start justify-between gap-2">
              <p className="text-xl font-semibold">Cancellation Policy</p>
              <p className="text-gray-500">PNG, PDF, JPG</p>
              <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                <Upload />
                Upload
                <input
                  type="file"
                  id="cancellationPolicy"
                  name="cancellationPolicy"
                  accept="image/png, .pdf, image/jpg"
                  // className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  onChange={(e) => {
                    const file = e.target.files![0];
                    updateFormState({
                      cancellationPolicy: e.target.files![0],
                    });
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="category">Or provide Via</label>
            <input
              id="businessName"
              type="text"
              className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8vw] text-sm outline-none"
              placeholder="Enter Your Terms And Conditions"
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
              className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 pb-[8vw] text-sm outline-none"
              placeholder="Enter Your Cancellation Policy"
              onChange={(e) =>
                updateFormState({ cancellationPolicy: e.target.value })
              }
            />
          </div>
        </div>
        <div className="items-strech mt-9 flex flex-row gap-7 self-end">
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={handleSubmit}
          >
            Skip
          </button>
          <button
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
    </div>
  );
};

export default Page3;
