"use client";

import { ArrowLeft } from "lucide-react";
import { FormState } from "../page";
import FileInput from "@/components/fileInput";
import { useEffect } from "react";

interface Page6Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage:number
}

const Page6 = ({ formState, updateFormState, handleContinue ,currentPage, setCurrentPage}: Page6Props) => {
  const { tastingSessions, businessLicenses, foodSafety, termsAndConditions, clientTestimonials, cancellationPolicy, portfolio } = formState;
useEffect(()=>{
  console.log(formState.foodSafety)
},[formState.foodSafety])
  return (
    <div className="flex h-full w-full flex-col overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex  w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9]  scrollbar-hide">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 md:p-6">
        <div className="flex gap-4 items-center">
            <ArrowLeft className="mr-1 ml-2 h-6 w-6 text-[#2E3192] cursor-pointer" aria-hidden="true" onClick={()=>setCurrentPage(currentPage-1)}/>
            <h1 className=" text-2xl font-semibold">Menu Details</h1>
          </div>
                    <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-start justify-between  md:flex-row">
              <div className="flex min-w-[50%]  flex-col gap-8">
                <div className="flex flex-col  gap-2">
                  <p className="text-base font-medium">Tasting Sessions <span className="text-red-500 ">*</span></p>
                  <div className="flex gap-6">
                    <div className="flex  gap-4 items-center">
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
                      <label htmlFor="tastingSessionsYes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex  gap-4 items-center">
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
                      <label htmlFor="tastingSessionsNo" className="text-sm">No</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  gap-2">
                  <p className="text-base font-medium">Food Safety Certificates <span className="text-red-500 ">*</span></p>
                  <div className="flex gap-6">
                    <div className="flex  gap-4 items-center">
                      <input
                        id="foodSafetyYes"
                        type="radio"
                        name="foodSafety"
                        value="true"
                        checked={!!foodSafety}
                        onChange={() => updateFormState({ foodSafety:true })}
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="foodSafetyYes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex  gap-4 items-center">
                      <input
                        id="foodSafetyNo"
                        type="radio"
                        name="foodSafety"
                        value="false"
                        checked={!foodSafety}
                        onChange={() => updateFormState({ foodSafety: false })}
                        className="h-4 w-4 accent-[#2E3192]"
                      />
                      <label htmlFor="foodSafetyNo" className="text-sm">No</label>
                    </div>

                  </div>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  { formState.foodSafety&&<FileInput
                    label="foodSafety"
                    onFileSelect={(file) => {
                      updateFormState({ foodSafety: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />}
                </div>
                <div className="flex flex-col  gap-2">
                  <p className="text-base font-medium">Terms & Conditions</p>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  <FileInput
                    label="tnc"
                    onFileSelect={(file) => {
                      updateFormState({ termsAndConditions: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className=" text-lg">or Provide Via</p>
                  <textarea
                  cols={10}
                    rows={5}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ termsAndConditions: e.target.value })
                    }
                    className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium">Client Testimonials</p>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  <FileInput
                    label="clientTestimonials"
                    onFileSelect={(file) => {
                      updateFormState({ clientTestimonials: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className=" text-lg">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={5}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ clientTestimonials: e.target.value })
                    }
                    className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
              <div className="flex min-w-[50%]  flex-col gap-8">
                <div className="flex flex-col  gap-2">

                  <p className="text-base font-medium">Buisness Licenses <span className="text-red-500 ">*</span></p>
                  <div className="flex gap-6">
                    <div className="flex  gap-4 items-center">
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
                      <label htmlFor="businessLicenseYes" className="text-sm">Yes</label>
                    </div>
                    <div className="flex  gap-4 items-center">
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
                      <label htmlFor="businessLicenseNo" className="text-sm">No</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  gap-2">

                <p className="text-base font-medium">Portfolio <span className="text-red-500 ">*</span></p>
                <span className="text-small font-light">PNG,JPG,PDF</span>

                <FileInput
                    label="portfolio"
                    onFileSelect={(file) => {
                      updateFormState({ portfolio: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                </div>
                <div className="flex gap-2 flex-col">
                  <p className="text-base font-medium">Cancellation Policies</p>
                  <span className="text-small font-light">PNG,JPG,PDF</span>

                  <FileInput
                    label="cancellation policy"
                    onFileSelect={(file) => {
                      updateFormState({ cancellationPolicy: file });
                    }}
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  />
                  <p className="text-lg">or Provide Via</p>
                  <textarea
                    cols={30}
                    rows={5}
                    placeholder="Enter your venue details"
                    onChange={(e) =>
                      updateFormState({ cancellationPolicy: e.target.value })
                    }
                    className="  w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  ></textarea>
                </div>
              </div>
            </div>


            <div className="items-strech  flex flex-row gap-7 self-end">

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
