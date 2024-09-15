"use client";

import { FormState } from "../page";
import FileInput from "@/components/fileInput";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
}

const Page6 = ({ formState, updateFormState, handleContinue }: Page6Props) => {
  const { tastingSessions, businessLicenses, foodSafety,termsAndConditions,clientTestimonials,cancellationPolicy,portfolio } = formState;

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden overflow-x-hidden scrollbar-hide lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center overflow-y-scroll bg-[#F7F6F9] p-2 scrollbar-hide md:p-3">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[95%] md:p-6">
          <h1 className="text-3xl font-semibold">Additional Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[45%] flex-col gap-7">
                <p className="text-lg">Tasting Sessions</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="tastingSessionsYes"
                      type="radio"
                      name="tastingSessions"
                      value="true"
                      checked={tastingSessions}
                      onChange={() =>
                        updateFormState({ tastingSessions: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="tastingSessionsNo"
                      type="radio"
                      name="tastingSessions"
                      value="false"
                      checked={!tastingSessions}
                      onChange={() =>
                        updateFormState({ tastingSessions: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="tastingSessionsNo">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[45%] flex-col gap-7">
                <p className="text-lg">Business Licenses</p>
                <div className="flex gap-9">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessLicenseYes"
                      type="radio"
                      name="businessLicense"
                      value="true"
                      checked={businessLicenses}
                      onChange={() =>
                        updateFormState({ businessLicenses: true })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="businessLicenseYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="businessLicenseNo"
                      type="radio"
                      name="businessLicense"
                      value="false"
                      checked={!businessLicenses}
                      onChange={() =>
                        updateFormState({ businessLicenses: false })
                      }
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="businessLicenseNo">No</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex w-[45%] flex-col">
                <p className="text-lg">Food Safety Certificates</p>
                <div className="flex">
                  <div className="flex min-w-[50%] gap-4">
                    <input
                      id="foodSafetyYes"
                      type="radio"
                      name="foodSafety"
                      value="true"
                      checked={!!foodSafety}
                      onChange={() => updateFormState({ foodSafety: true })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="foodSafetyYes">Yes</label>
                  </div>
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="foodSafetyNo"
                      type="radio"
                      name="foodSafety"
                      value="false"
                      checked={!foodSafety}
                      onChange={() => updateFormState({ foodSafety: false })}
                      className="h-4 w-4 accent-[#2E3192]"
                    />
                    <label htmlFor="foodSafetyNo">No</label>
                  </div>
                </div>
                <FileInput
                  label="foodSafety"
                  onFileSelect={(file) => {
                    updateFormState({ foodSafety: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
                <div className="mt-6 flex min-w-[50%] flex-col items-start justify-center">
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
                    rows={7}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ termsAndConditions: e.target.value })
                    }
                    className="mt-5 w-full rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
                <div className="mt-6 flex min-w-[45%] flex-col items-start justify-center">
                  <p className="text-lg">Client Testimonials</p>
                  <FileInput
                    label="clientTestimonials"
                    onFileSelect={(file) => {
                      updateFormState({ clientTestimonials: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className="mt-5 text-lg">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={7}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ clientTestimonials: e.target.value })
                    }
                    className="mt-5 w-full rounded-xl border-2 border-gray-300"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[45%] flex-col gap-7">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-lg">Portfolio</p>
                  <FileInput
                    label="portfolio"
                    onFileSelect={(file) => {
                      updateFormState({ portfolio: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
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
                    className="mt-5 w-full rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-4"></div>
              <div className="flex flex-col gap-4 xs:min-w-[40%]"></div>
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

export default Page6;
