"use client";
import { ArrowLeft } from "lucide-react";
import FileInput from "@/components/fileInput";

interface Page6Props {
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  policy: string | File | File[];
  termsandconditions: string | File | File[];
  settermsandconditions: React.Dispatch<
    React.SetStateAction<string | File | File[]>
  >;
  setpolicy: React.Dispatch<React.SetStateAction<string | File | File[]>>;
}

const Page6 = ({
  handleContinue,
  setCurrentPage,
  termsandconditions,
  settermsandconditions,
  setpolicy,
  policy,
}: Page6Props) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 md:p-6">
          <div className="flex items-center justify-start gap-5">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            />
            <h1 className="text-2xl font-semibold">Policies</h1>
          </div>

          <div className="flex min-h-full min-w-full flex-col items-center gap-8">
            <div className="flex min-w-full flex-col items-start justify-between md:flex-row">
              <div className="flex min-w-[50%] flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-base font-medium">
                    Terms & Conditions{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.33398"
                        y="1.3335"
                        width="13.3333"
                        height="13.3333"
                        rx="6.66667"
                        stroke="#2B3F6C"
                      />
                      <path
                        d="M8.33398 11.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00065 7.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33398 5.33366L8.33398 4.66699"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  <FileInput
                    label="tnc"
                    onFileSelect={(file: File | File[]) => {
                      const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                      settermsandconditions(newFiles);
                    }}
                    multiple={false}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className="text-base font-medium">or Provide Via</p>
                  <textarea
                    cols={10}
                    rows={5}
                    placeholder="Enter your venue details"
                    onChange={(e) => settermsandconditions(e.target.value)}
                    className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[50%] flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-base font-medium">
                    Cancellation Policies{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.33398"
                        y="1.3335"
                        width="13.3333"
                        height="13.3333"
                        rx="6.66667"
                        stroke="#2B3F6C"
                      />
                      <path
                        d="M8.33398 11.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00065 7.3335L8.33398 7.3335"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33398 5.33366L8.33398 4.66699"
                        stroke="#2B3F6C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  <FileInput
                    label="cancellation_policy"
                    onFileSelect={(file: File | File[]) => {
                      const newFiles = Array.isArray(file) ? file : [file]; // Handle single or multiple files
                      setpolicy(newFiles);
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className="text-base font-medium">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={5}
                    placeholder="Enter your venue details"
                    onChange={(e) => setpolicy(e.target.value)}
                    className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="items-strech flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              >
                Back
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

export default Page6;
/**<FileInput
                    label="client_testimonials"
                    multiple={false}
                    onFileSelect={(file) => {
                      set({ clientTestimonials: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className=" font-medium text-base">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={5}
                    placeholder="Description of your client testimonial"
                    onChange={(e) =>
                      updateFormState({ clientTestimonials: e.target.value })
                    }
                    value={
                      typeof formState.clientTestimonials === 'string'
                        ? formState.clientTestimonials
                        : Array.isArray(formState.clientTestimonials)
                          ? formState.clientTestimonials.map((file: File) => file.name).join(', ')
                          : (formState.clientTestimonials as File)?.name
                    }
                    className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea> */
