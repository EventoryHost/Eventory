"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";

const _religiousAndCulturalInvitations = [
  "Diwali invitations",
  "Ganesh chaturthi cards",
  "Christmas invitation",
  "Halloween invitation",
];

const _experience = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "other", label: "Other" },
];
interface FormState {
  termsandConditions: string;
  cancellationPolicy: string;
  clienttestimonials: string;
  extracharges: boolean;
  deposit: boolean;
}

interface Page4Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Page: React.FC<Page4Props> = ({ formState, updateFormState, 
  currentPage,
  setCurrentPage, }) => {
  const {
    termsandConditions,
    cancellationPolicy,
    extracharges,
    deposit,
    clienttestimonials,
  } = formState;

  // const [termdandConditions, setTermsAndConditions] = useState("");
  // const [cancellationPolicy, setCancelationPolicy] = useState("");

  // const [extracharges, setExtraCharges] = useState(false);
  // const  [deposit, setDeposit] = useState(false);
  // const [clienttestimonials, setClientTestimonials] = useState("");

  

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button onClick={()=> setCurrentPage(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button onClick={()=> setCurrentPage(2)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
          <button onClick={()=> setCurrentPage(3)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button onClick={()=> setCurrentPage(4)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button onClick={()=> setCurrentPage(5)} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
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
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Policies</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Terms and Conditions</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Cancellation Policy</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
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
                  value={termsandConditions}
                  onChange={(e) =>
                    updateFormState({ termsandConditions: e.target.value })
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
                  value={cancellationPolicy}
                  onChange={(e) =>
                    updateFormState({ cancellationPolicy: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do you charge extra for customizable <br /> invitation designs
                  ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={extracharges === true}
                    onChange={() => updateFormState({ extracharges: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={extracharges === false}
                    onChange={() => updateFormState({ extracharges: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Client Testimonials</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-4">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label>
                  Do they require a deposit to book their <br /> design services
                  ?
                </label>
                <div className="flex flex-row items-center gap-2">
                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={deposit === true}
                    onChange={() => updateFormState({ deposit: true })}
                  />
                  <p>Yes</p>

                  <input
                    className="h-4 w-4 bg-[#2E3192] text-[#2E3192]"
                    type="radio"
                    checked={deposit === false}
                    onChange={() => updateFormState({ deposit: false })}
                  />
                  <p>No</p>
                </div>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  value={clienttestimonials}
                  onChange={(e) =>
                    updateFormState({ clienttestimonials: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Button container */}
          <div className="w-full flex justify-end gap-[32px] mr-[5%]">
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
    </div>
  );
};

export default Page;
