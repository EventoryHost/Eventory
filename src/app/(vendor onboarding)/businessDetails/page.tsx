"use client";
import Dropdown2 from "./(componets)/Dropdown2";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { addBusinessDetails } from "@/services/auth";
import tajmahal from "/public/tajmahal.png";
import { useToast } from "@/components/hooks/use-toast";
import MultipleDropdown from "./(componets)/MultiDropdown2";

const categories = [
  { value: "caterer", label: "Caterers" },
  { value: "decorator", label: "Decorator" },
  { value: "prop-rental", label: "Prop Rental" },
  { value: "pav", label: "Photo & Videography" },
  { value: "venue-provider", label: "Venue Provider" },
];

const teamsize = [
  { value: "1-5", label: "1-5 persons" },
  { value: "6-15", label: "6-15 persons" },
  { value: "16-30", label: "16-30 persons" },
  { value: "31-50", label: "31-50 persons" },
  { value: "51+", label: "More then 51+" },
];

const annualrevenue = [
  { value: "0-3", label: "0-3 Lakh" },
  { value: "3-7", label: "3-7 Lakh" },
  { value: "7-12", label: "7-12 Lakh" },
  { value: "12-18", label: "12-18 Lakh" },
  { value: "18+", label: "More then 18+ Lakhs" },
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

  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // New state for tracking open dropdown

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
      const { id, email } = jwt.decode(token) as {
        id: string;
        email: string;
      };
      console.log("User ID:", id);
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
      const { id, email } = jwt.decode(token) as {
        id: string;
        email: string;
      };
      console.log(token);
      console.log(id);
      console.log(email);
      // Submit business details to the backend
      await addBusinessDetails(id, newDetails);
      // Redirect to the category page after successful submission
      router.push(`/${businessDetails.category}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: error ? "Error" : "Something went wrong.",
        description:
          String(error) ||
          "There was a problem with your request. Check internet",
      });
    } finally {
      setloading(false);
    }
  };

  // Function to manage dropdown open/close behavior
  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName,
    );
  };

  return (
    <div className="flex h-max w-full flex-col overflow-y-scroll lg:h-[calc(100vh-4.2rem)] lg:flex-row">
      <div className="flex h-max flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[35%] lg:h-[calc(100vh-4.2rem)] lg:max-w-[30%]">
        <div className="flex h-[100%] flex-col items-center justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="font-Helvetica font-normal text-[#797878] xs:text-lg">
            Fill out your Business details to get verified and proceed to
            onboarding process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/vendor_onboarding/tajmahal.png"
            }
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch flex h-max min-w-[65%] flex-col items-center justify-start overflow-y-scroll bg-[#F7F6F9] p-2 scrollbar-hide md:p-[1rem] lg:h-[calc(100vh-4.2rem)]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Business Details</h1>
          <form onSubmit={handleBizSubmit}>
            <div className="flex min-h-full flex-col items-center gap-5">
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="businessName">
                    Business Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    ref={(el) => {
                      refs.current.businessName = el;
                    }}
                    placeholder="Business Name"
                    required
                  />
                </div>
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="category">
                    Type Of Service<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={categories}
                    isOpen={openDropdown === "category"}
                    onToggle={() => toggleDropdown("category")}
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
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="gstin">
                    GSTIN<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="gstin"
                    type="text"
                    minLength={15}
                    maxLength={15}
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    ref={(el) => {
                      refs.current.gstin = el;
                    }}
                    required
                    placeholder="Your 15 Digit GSTIN"
                  />
                </div>
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="teamsize">
                    Team Size<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={teamsize}
                    isOpen={openDropdown === "teamsize"}
                    onToggle={() => toggleDropdown("teamsize")}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        teamsize: value,
                      })
                    }
                    placeholder="Select Team Size"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="businessAddress">
                    Business Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessAddress"
                    type="text"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    ref={(el) => {
                      refs.current.businessAddress = el;
                    }}
                    placeholder="Business Address"
                    required
                  />
                </div>
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="pinCode">
                    Pin Code<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="pinCode"
                    type="number"
                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                    ref={(el) => {
                      refs.current.pinCode = el;
                    }}
                    required
                    placeholder="Pin-Code"
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
                    isOpen={openDropdown === "cities"}
                    onToggle={() => toggleDropdown("cities")}
                    onSelect={(value: string[]) =>
                      setBusinessDetails((prevDetails) => ({
                        ...prevDetails,
                        cities: value,
                      }))
                    }
                    placeholder="Cities Where You Operate"
                  />
                </div>
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="years">
                    Years in Operation<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={yearsInOperation}
                    isOpen={openDropdown === "yearsInOperation"}
                    onToggle={() => toggleDropdown("yearsInOperation")}
                    onSelect={(value: string) =>
                      setBusinessDetails({ ...businessDetails, years: value })
                    }
                    placeholder="Provide Year Of Operations"
                  />
                </div>
              </div>
              <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                <div className="flex min-w-[45%] max-w-[45%] flex-col gap-4">
                  <label htmlFor="annualrevenue">
                    Annual Revenue<span className="text-red-600">*</span>
                  </label>
                  <Dropdown2
                    options={annualrevenue}
                    isOpen={openDropdown === "annualrevenue"}
                    onToggle={() => toggleDropdown("annualrevenue")}
                    onSelect={(value: string) =>
                      setBusinessDetails({
                        ...businessDetails,
                        annualrevenue: value,
                      })
                    }
                    placeholder="Range of your revenue"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-9 self-end md:flex-row">
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
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
