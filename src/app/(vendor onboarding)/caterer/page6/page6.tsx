"use client";

import { FormState } from "../page";
import FileInput from "@/components/fileInput";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
}

const Page6 = ({ formState, updateFormState, handleContinue }: Page6Props) => {
  const { tastingSessions, businessLicenses, foodSafety } = formState;

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden overflow-x-hidden lg:flex-row">
      <div className="flex min-w-[100%] flex-col items-center overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Additional Details</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[40%] flex-col gap-7">
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
                    />
                    <label htmlFor="tastingSessionsNo">No</label>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-7">
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
                    />
                    <label htmlFor="businessLicenseNo">No</label>
                  </div>
                </div>
              </div>
              {/* <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Catering Service Images</label>
                <FileInput
                  label="catering images"
                  onFileSelect={(file) => {
                    updateFormState({ cateringServiceImages: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div> */}
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">

              {/* <div className="flex min-w-[40%] flex-col items-start justify-center">
                <label htmlFor="category">Videos of Event Setups</label>
                <FileInput
                  label="event videos"
                  onFileSelect={(file) => {
                    updateFormState({ videoEvent: file });
                  }}
                  acceptedFileTypes=".mp4, .avi, .mov, .wmv"
                />
              </div> */}
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex flex-col ">
                <p className="text-lg">Food Safety Certificates</p>
                <div className="flex ">
                  <div className="flex min-w-[40%] gap-4">
                    <input
                      id="foodSafetyYes"
                      type="radio"
                      name="foodSafety"
                      value="true"
                      checked={!!foodSafety}
                      onChange={() => updateFormState({ foodSafety: true })}
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
                <div className="flex min-w-[40%] flex-col items-start justify-center mt-6">
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
                    className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
                <div className="flex min-w-[40%] flex-col items-start justify-center mt-6">
                  <p className="text-lg">Client Testimonials</p>
                  <FileInput
                    label="testimonials"
                    onFileSelect={(file) => {
                      updateFormState({ testimonials: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className="mt-5 text-lg">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={7}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ testimonials: e.target.value })
                    }
                    className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-7">
                <div className="flex  flex-col items-start justify-center">
                  <p className="text-lg">Portfolio</p>
                  <FileInput
                    label="portfolio"
                    onFileSelect={(file) => {
                      updateFormState({ portfolio: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />

                </div>
                <div className="flex  flex-col items-start justify-center">
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
                    className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
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
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={(e) => {
                  e.preventDefault();
                  handleContinue();
                }}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
