"use client";

import FileInput from "@/components/fileInput";
import { Upload } from "lucide-react";

interface FormState {
  termsAndConditions: string | File;
  cancellationPolicy: string | File;
}

interface Page3Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
}

const Page3: React.FC<Page3Props> = ({
  formState,
  updateFormState,
  handleContinue,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Terms and Conditions:", formState.termsAndConditions);
    console.log("Cancellation Policy:", formState.cancellationPolicy);
  };

  return (
    <div className="scroll-touch flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[95%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Pricing and Policies</h1>
      <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
        <div className="mt-6 flex min-w-[40%] flex-col items-start justify-center">
          <p className="text-lg">Terms & Conditions</p>
          <FileInput
            label="tnc"
            onFileSelect={(file) => {
              updateFormState({ termsAndConditions: file });
            }}
            acceptedFileTypes="image/png, .pdf, image/jpg"
          />
          <p className="mt-5 text-lg">or Provide Via</p>
          <textarea
            cols={30}
            rows={7}
            placeholder="Enter your venue details"
            onChange={(e) =>
              updateFormState({ termsAndConditions: e.target.value })
            }
            className="mt-5 w-[100%] rounded-xl border-2 border-gray-300 p-3"
          ></textarea>
        </div>

        <div className="flex min-w-[40%] flex-col items-start justify-center">
          <p className="text-lg">Cancellation Policies</p>
          <FileInput
            label="cancellation policy"
            onFileSelect={(file) => {
              updateFormState({ cancellationPolicy: file });
            }}
            acceptedFileTypes="image/png, .pdf, image/jpg"
          />
          <p className="mt-5 text-lg">or Provide Via</p>
          <textarea
            cols={30}
            rows={7}
            placeholder="Enter your venue details"
            onChange={(e) =>
              updateFormState({ cancellationPolicy: e.target.value })
            }
            className="mt-5 w-[100%] rounded-xl border-2 border-gray-300 p-3"
          ></textarea>
        </div>
      </div>

      <div className="items-strech mt-9 flex flex-row gap-7 self-end">
        <button
          className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
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
};

export default Page3;
