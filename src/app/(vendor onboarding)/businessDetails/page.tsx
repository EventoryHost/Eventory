"use client";
import Dropdown2 from "./(componets)/Dropdown2";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { addBusinessDetails } from "@/services/auth";
import tajmahal from "/public/tajmahal.png";
import { useToast } from "@/components/hooks/use-toast";
import MultipleDropdown from "@/components/MultiDropdown";

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
  { value: "0-3", label: "1-5 Lakh" },
  { value: "3-7", label: "6-15 Lakh" },
  { value: "7-12", label: "16-30 Lakh" },
  { value: "12-18", label: "31-50 Lakh" },
  { value: "18+", label: "More then 18 Lakhs" },
];

const yearsInOperation = [
  { value: "1-2", label: "1-2 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "6-10", label: "6-10 years" },
  { value: "10+", label: "10+ years" },
];

const teamSize = [
  { value: "Individual", label: "Individual" },
  { value: "6-15", label: "6-15 years" },
  { value: "16-30", label: "16-30 years" },
  { value: "31-50", label: "31-50 years" },
  { value: "50+", label: "More than 50" },
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
  pinCode: number;
  cities: string[];
  years: string;
  annualrevenue: string;
};

const BusinessDetails = () => {
  const [loading, setloading] = useState(false);
  const { toast } = useToast();
  const [businessDetails, setBusinessDetails] = useState<businessDetails>({
    businessName: "",
    category: "",
    gstin: "",
    years: "",
    businessAddress: "",
    pinCode: 0,
    cities: [],
    teamsize: "",
    annualrevenue: "",
  } as businessDetails);
  const refs = useRef(
    {} as Record<
      keyof businessDetails,
      HTMLInputElement | HTMLButtonElement | null
    >,
  );
  const [error, setError] = useState(false);

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
      console.log("User ID:", userId);
      console.log("Email:", email);
    }
  }, []);

  useEffect(() => {
    // Reset error state when any input changes
    setError(false);
  }, [businessDetails]);

  const handleBizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newDetails: businessDetails = {
      businessName: refs.current.businessName!.value,
      category: businessDetails.category,
      gstin: refs.current.gstin!.value,
      years: businessDetails.years,
      businessAddress: refs.current.businessAddress!.value,
      pinCode: Number(refs.current.pinCode!.value),
      cities: businessDetails.cities,
      teamsize: businessDetails.teamsize,
      annualrevenue: businessDetails.annualrevenue,
    };
    // Validation: check if all required fields have data
    if (
      !newDetails.businessName ||
      !newDetails.category ||
      newDetails.gstin.length !== 15 ||
      !newDetails.years ||
      !newDetails.businessAddress ||
      !newDetails.pinCode ||
      !newDetails.teamsize ||
      !newDetails.annualrevenue ||
      newDetails.cities.length === 0
    ) {
      setError(true);
      return;
    }

    try {
      setloading(true);
      console.log(newDetails);
      toast({
        title: "Redirecting",
        description: ` Redirecting ${newDetails.businessName} To ${newDetails.category}`,
      });
      // Update business details state
      setBusinessDetails(newDetails);
      // console.log("Business Details:", newDetails);
      // Retrieve user information from token
      const token = localStorage.getItem("token")!;
      const { userId, email } = jwt.decode(token) as {
        userId: string;
        email: string;
      };

      // Submit business details to the backend
      await addBusinessDetails(userId, newDetails);
      // Redirect to the category page after successful submission
      router.push(`/${businessDetails.category}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There was a problem with your request. Check internet",
      });
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex min-h-[91vh] w-full flex-col overflow-y-scroll lg:flex-row">
      <div className="flex h-[91vh] flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[35%] lg:max-w-[30%]">
        <div className="flex max-h-fit flex-col items-center justify-center gap-3 lg:mt-[5rem]">
          <p className="text-xl text-gray-900">Step 2 of 2</p>
          <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11">
            <button className="h-[0.4rem] w-[3rem] rounded-xl bg-[#2E3192]"></button>
            <button className="h-[0.4rem] w-[3rem] rounded-xl bg-gray-300"></button>
          </div>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="font-Helvetica font-normal text-[#797878] xs:text-lg">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={tajmahal}
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-[91vh] min-w-[65%] flex-col items-center justify-start overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Business Details</h1>
          <form onSubmit={handleBizSubmit}>
            <div className="flex min-h-full flex-col items-center gap-5">
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Business Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter your business name"
                    ref={(el) => {
                      refs.current.businessName = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="category">
                    Type Of Service<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={categories}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        category: value,
                      })
                    }
                    placeholder="Select Your Service"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="gstin">
                    GSTIN <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="gstin"
                    type="text"
                    minLength={15}
                    maxLength={15}
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter your GSTIN"
                    ref={(el) => {
                      refs.current.gstin = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="years">
                    Team Size<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={teamsize}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        teamsize: value,
                      })
                    }
                    placeholder="Provide Year Of Operations"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="businessAddress">
                    Business Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessAddress"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter your business address"
                    ref={(el) => {
                      refs.current.businessAddress = el;
                    }}
                    required
                  />
                </div>
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="revenue">
                    Annual Revenue <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="revenue"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    placeholder="Enter Annual Revenue"
                    ref={(el) => {
                      refs.current.annualrevenue = el;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[40%] flex-col gap-4">
                  <label htmlFor="pinCode">
                    Pin Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="pinCode"
                    type="number"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="Enter pin code"
                    ref={(el) => {
                      refs.current.pinCode = el;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="cities">
                    Operational City(s)<span className="text-red-600">*</span>
                  </label>
                  <MultipleDropdown
                    options={operationalCities}
                    onSelect={(value: string[]) =>
                      setBusinessDetails((prevDetails) => ({
                        ...prevDetails,
                        cities: value, // You don't need to spread value, it's already an array
                      }))
                    }
                    placeholder="Provide Cities Where You Operate"
                  />
                </div>
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="years">
                    Years in Operation <span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={yearsInOperation}
                    onSelect={(value: string) =>
                      setBusinessDetails({ ...businessDetails, years: value })
                    }
                    placeholder="Provide Year Of Oprations"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="cities">
                    Annual Revenue<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={annualrevenue}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        annualrevenue: value,
                      })
                    }
                    placeholder="Select The Range of your revenue"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] flex-col gap-4">
                  <label htmlFor="cities">
                    Annual Revenue<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={annualrevenue}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        annualrevenue: value,
                      })
                    }
                    placeholder="Select The Range of your revenue"
                  />
                </div>
              </div>
            </div>
              {error && (
                <p className="text-md flex flex-col items-start self-start font-poppins font-medium text-red-600">
                  Fill All The Req&apos; Field&apos;s
                </p>
              )}
              <div className="flex flex-col items-start self-end">
                <button
                  type="submit"
                  className="rounded-2xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                >
                  Register
                </button>
              {error && (
                <p className="text-md flex flex-col items-start self-start font-poppins font-medium text-red-600">
                  Fill All The Req&apos; Field&apos;s
                </p>
              )}
              <div className="flex flex-col items-start self-end">
                <button
                  disabled={loading}
                  type="submit"
                  className="rounded-2xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                >
                  {loading ? "Loading" : "Continue"}
                  {loading ? "Loading" : "Continue"}
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
