"use client";
import Dropdown2 from "./(componets)/Dropdown2";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateBusinessField, setBusinessDetails } from "@/redux/businessDetailsSlice";
import type { BusinessDetails as BusinessDetailsType } from '@/redux/businessDetailsSlice';
import { RootState } from "@/redux/store";

import tajmahal from "/public/tajmahal.png";
import Image from "next/image";
import jwt, { JwtPayload } from "jsonwebtoken";

import { getBusinessDetails, addBusinessDetails2 } from "@/services/auth";
import { Combobox } from "@/components/ui/combobox";


const categories = [
  { value: "venue-provider", label: "Venue Provider" },
  { value: "pav", label: "Photo & Videography" },
  { value: "pav", label: "Photo & Videography" },
  { value: "caterer", label: "Caterers" },
  { value: "decorator", label: "Decorator" },
  { value: "prop-rental", label: "Prop Rental" },
  { value: "makeup-artist", label: "Makeup Artist" },
];

const teamsize = [
  { value: "1-5", label: "1-5 persons" },
  { value: "6-15", label: "6-15 persons" },
  { value: "16-30", label: "16-30 persons" },
  { value: "31-50", label: "31-50 persons" },
  { value: "51+", label: "More then 50" },
];

const annualrevenue = [
  { value: "0-3", label: "0-3 Lakh" },
  { value: "3-7", label: "3-7 Lakh" },
  { value: "7-12", label: "7-12 Lakh" },
  { value: "12-18", label: "12-18 Lakh" },
  { value: "18+", label: "More then 18 Lakhs" },
];

const yearsInOperation = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "6-10", label: "6-10 years" },
  { value: "10+", label: "10+ years" },
];

const operationalCities = [
  { value: "del", label: "Delhi" },
  { value: "kol", label: "Kolkata" },
  { value: "mum", label: "Mumbai" },
  { value: "ban", label: "bangalore" },
  { value: "grm", label: "Gurugram" },
  { value: "cng", label: "Chandigarh" },
  { value: "noi", label: "Noida" },
  { value: "Agr", label: "Agraa" },
];

export type businessDetails = {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  businessAddress: string;
  landmark: string;
  pinCode: string;
  cities: string[];
  years: string;
  annualrevenue: string;
};

const BusinessDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const businessDetails = useSelector((state: RootState) => state.businessDetails);
  const refs = useRef({} as Record<keyof businessDetails, HTMLInputElement | HTMLButtonElement | null>);


  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) return;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("session_token");
    if (token) {
      localStorage.setItem("token", token);
      const { userId, email } = jwt.decode(token) as {
        userId: string;
        email: string;
      };
    }
  }, []);

  // Fetch business details when the component mounts
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { userId } = jwt.decode(token) as { userId: string };

          // Fetch business details from the backend
          const response = await getBusinessDetails(userId);
          if (response.success) {
            dispatch(setBusinessDetails(response.data));
          }
        }
      } catch (error) {
        console.error("Failed to fetch business details", error);
      }
    };

    fetchBusinessDetails();
  }, [dispatch]);

  const saveBusinessDetailsToBackend = async (userId: string, newDetails: businessDetails) => {
    try {
      const response = await addBusinessDetails2(userId, newDetails);
      if (response && !response.data.success) {
        console.error("Failed to save business details to backend");
      }
    } catch (error) {
      console.error("Error saving business details to backend:", error);
    }
  };

  interface MyTokenPayload extends JwtPayload {
    userId: string;
  }

  const handleSaveBusinessDetails = () => {
    const token = localStorage.getItem('token'); // Replace with the actual way you retrieve your token
  
    if (token) {
      // Decode the token
      const decodedToken = jwt.decode(token) as MyTokenPayload | null;
  
      if (decodedToken && typeof decodedToken !== 'string' && decodedToken.userId) {
        const userId = decodedToken.userId; 
  
        saveBusinessDetailsToBackend(userId, businessDetails);
      } else {
        console.error("User ID not found in the token.");
      }
    } else {
      console.error("User is not logged in.");
    }
  };
  

      const handleBizSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if any required field is empty
        for (const key in refs.current) {
          const refElement = refs.current[key as keyof businessDetails];
          if (!refElement || !refElement.value.trim()) {
            return;
          }
        }

        if (!businessDetails.category) {
          return;
        }

        const newDetails: businessDetails = {
          businessName: refs.current.businessName!.value,
          category: businessDetails.category,
          gstin: refs.current.gstin!.value,
          years: businessDetails.years,
          businessAddress: refs.current.businessAddress!.value,
          landmark: refs.current.landmark!.value,
          pinCode: (refs.current.pinCode!.value),
          cities: businessDetails.cities,
        };

        dispatch(setBusinessDetails(newDetails));

        const token = localStorage.getItem("token")!;
        const { userId, email } = jwt.decode(token) as {
          userId: string;
          email: string;
        };

        // Redirect to the selected category's page
        router.push(`/${businessDetails.category}`);
      };


      return (
        <div className="flex h-full min-h-screen w-full flex-col overflow-hidden lg:flex-row">
          <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
            <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[5rem]">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
                1
              </button>
              <div className="h-[0.3rem] w-[4rem] rounded-xl bg-[#2E3192]"></div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
                2
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
              <Image
                src={tajmahal}
                alt="Image of Indian monuments"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
            <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
              <h1 className="text-3xl font-semibold">Business Details</h1>
              <form onSubmit={handleBizSubmit}>
                <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                  <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="businessName">Business Name</label>
                      <input
                        id="businessName"
                        type="text"
                        className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                        placeholder="Enter your business name"
                        ref={(el) => {
                          refs.current.businessName = el;
                        }}
                        required
                        value={businessDetails.businessName}
                        onChange={(e) => dispatch(updateBusinessField({ key: "businessName", value: e.target.value }))}
                      />
                    </div>
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="category">Category</label>
                      <Combobox
                        options={categories}
                        placeholder={businessDetails.category || "Select Category"}
                        setFunction={(val) => {
                          dispatch(updateBusinessField({ key: "category", value: val }));
                        }}
                        className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                      />
                    </div>
                  </div>
                  <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="gstin">GSTIN</label>
                      <input
                        id="gstin"
                        type="text"
                        className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                        placeholder="Enter your GSTIN"
                        ref={(el) => {
                          refs.current.gstin = el;
                        }}
                        required
                        value={businessDetails.gstin}
                        onChange={(e) => dispatch(updateBusinessField({ key: "gstin", value: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-4 xs:min-w-[40%]">
                      <label htmlFor="years">Years in Operation</label>
                      <Combobox
                        options={yearsInOperation}
                        placeholder={businessDetails.years || "Select Years"}
                        setFunction={(val) => {
                          dispatch(updateBusinessField({ key: "years", value: val }));
                        }}
                        className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                      />
                    </div>
                  </div>
                  <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="businessAddress">Business Address</label>
                      <input
                        id="businessAddress"
                        type="text"
                        className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                        placeholder="Enter your business address"
                        ref={(el) => {
                          refs.current.businessAddress = el;
                        }}
                        required
                        value={businessDetails.businessAddress}
                        onChange={(e) => dispatch(updateBusinessField({ key: "businessAddress", value: e.target.value }))}
                      />
                    </div>
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        id="landmark"
                        type="text"
                        className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                        placeholder="Enter landmark"
                        ref={(el) => {
                          refs.current.landmark = el;
                        }}
                        required
                        value={businessDetails.landmark}
                        onChange={(e) => dispatch(updateBusinessField({ key: "landmark", value: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="pinCode">Pin Code</label>
                      <input
                        id="pinCode"
                        type="number"
                        className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="Enter pin code"
                        ref={(el) => {
                          refs.current.pinCode = el;
                        }}
                        required
                        value={businessDetails.pinCode}
                        onChange={(e) => dispatch(updateBusinessField({ key: "pinCode", value: e.target.value }))}
                      />
                    </div>
                    <div className="flex min-w-[40%] flex-col gap-4">
                      <label htmlFor="cities">Operational Cities</label>
                      <Combobox
                        options={operationalCities}
                        placeholder={businessDetails.cities[0] || "Select Operational Cities"}
                        setFunction={(val) => {
                          dispatch(updateBusinessField({ key: "cities", value: val }));
                        }}
                        className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-start">
                    <button
                      type="submit"
                      onClick={handleSaveBusinessDetails}
                      className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

    export default BusinessDetails;
