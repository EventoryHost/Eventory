"use client";

import jwt from "jsonwebtoken";
import Script from "next/script";
import { handlePayment } from "@/services/payment";
import { getvendor } from "@/services/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation'
import { useToast } from "@/components/hooks/use-toast";
import Link from "next/link";
import vendorpricecalculations from "@/services/vendorpricecalculation";
import Loadingeanimation from "@/components/Loader";
interface PlanDetails {
  title: string;
  price: number;
  details: string[];
}

type Pagechangetype = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleformSubmit: () => void;
};
interface BusinessDetails {
  annualrevenue: "0-3" | "3-7" | "7-12" | "12-18" | "18+";
  teamsize: "1-5" | "6-15" | "16-30" | "31-50" | "51+";
  years: "1-2" | "3-5" | "6-10" | "10+";
}
/*
Register your business and start showcasing your services.
Manage your profile and service offerings easily.
Portfolio management for your business (photos, videos, etc.).
Receive real-time notifications on new bookings.
Organize your bookings and leads with a calendar and leads management system.
Get a summary of payments with an overview of received and outstanding amounts.
*/
const Plans = ({ setCurrentPage, handleformSubmit }: Pagechangetype) => {
  const { toast } = useToast();
  const plan: PlanDetails = {
    title: "Basic",
    price: 0,
    details: [
      "Register your business and start showcasing your services.",
      "Manage your profile and service offerings easily.",
      "Portfolio management for your business (photos, videos, etc.).",
      "Receive real-time notifications on new bookings.",
      "Organize your bookings and leads with a calendar and leads management system.",
      "Get a summary of payments with an overview of received and outstanding amounts.",
    ],
  };
  const [loader, setloader] = useState(true);
  const [disabled, setdisabled] = useState(true);
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [vendorId, setVendorId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gstinNumber: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlepaymentfailed = () => {
    router.push("/Payment-Failed");
  };
  // Utility functions to convert string values to numbers
  const convertTeamSizeToNumber = (teamSize: string): number => {
    switch (teamSize) {
      case "1-5":
        return 5;
      case "6-15":
        return 15;
      case "16-30":
        return 30;
      case "31-50":
        return 50;
      case "51+":
        return 51;
      default:
        return 0; // Default value in case of an unknown input
    }
  };

  const convertAnnualRevenueToNumber = (annualRevenue: string): number => {
    switch (annualRevenue) {
      case "0-3":
        return 3;
      case "3-7":
        return 7;
      case "7-12":
        return 12;
      case "12-18":
        return 18;
      case "18+":
        return 18;
      default:
        return 0;
    }
  };

  const convertYearsToNumber = (years: string): number => {
    switch (years) {
      case "1-2":
        return 2;
      case "3-5":
        return 5;
      case "6-10":
        return 10;
      case "10+":
        return 10; // Similar to above, maximum cap
      default:
        return 0;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Exclude 'gstinNumber' field from validation of form
    const { gstinNumber, ...fieldsToCheck } = formData;
    const isFormValid = Object.values(fieldsToCheck).every(
      (value) => value.trim() !== "",
    );
    const isgstvaild = gstinNumber.length === 15;
    if (isFormValid && isgstvaild) {
      // Proceed with handling payment if the form is valid
      handlePayment(
        price.toString(),
        plan.title,
        vendorId,
        formData.fullName,
        setCurrentPage,
        handleformSubmit,
        handlepaymentfailed,
      );
    } else {
      // Optionally, handle invalid form (e.g., show an error message)
      setError(true);
    }
  };
  const fetchVendor = async (userId: string, email: string, mobile: string) => {
    const res = await getvendor(userId, email, mobile);
    return res;
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      setloader(true);
      if (token) {
        try {
          const { id, email, name, mobile } = jwt.decode(token) as {
            id: string;
            email: string;
            name: string;
            mobile: string;
          };

          if (id && (email || mobile)) {
            const user = await fetchVendor(id, email, mobile);
            // console.log(user);
            setVendorId(user.id);
            setFormData((prevFormData) => ({
              ...prevFormData,
              email: user?.email || "",
              phoneNumber: user?.mobile || "",
              fullName: user?.name,
              gstinNumber: user?.businessDetails.gstin,
              address: user?.businessDetails.businessAddress,
            }));
            const revenueValue = convertAnnualRevenueToNumber(
              user.businessDetails.annualrevenue,
            );
            const teamSizeValue = convertTeamSizeToNumber(
              user.businessDetails.teamsize,
            );
            const yearsValue = convertYearsToNumber(user.businessDetails.years);

            // Call the function with the numeric values
            const price = vendorpricecalculations(
              revenueValue,
              teamSizeValue,
              yearsValue,
            );
            setPrice(price);
          } else {
            toast({
              variant: "destructive",
              title: "Error Something went wrong.",
              description:
                "There was a problem with your request. Pls Login Again",
            });
            console.error("Token does not contain expected data.");
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error Something went wrong.",
            description:
              "There was a problem with your request. Pls Login Again",
          });
          console.error("Failed to decode token:", error);
        } finally {
          setloader(false);
        }
      } else {
        toast({
          variant: "destructive",
          title: "Error Something went wrong.",
          description: "There was a problem with your request. Pls Login Again",
        });
        console.log("No token found in localStorage.");
      }
      setloader(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="w-screen bg-[#F7F6F9] py-[0.5rem]">
        <div className="flex h-max w-[264px] flex-col justify-center gap-6 pl-[72px]">
          <div
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            className="flex justify-start gap-3"
          >
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.35 9.55L8.71317 12.1868C8.26407 12.6359 8.26407 13.3641 8.71317 13.8132L11.35 16.45M9.05 13H17.1M12.5 1.5C6.14873 1.5 1 6.64873 1 13C1 19.3513 6.14873 24.5 12.5 24.5C18.8513 24.5 24 19.3513 24 13C24 6.64873 18.8513 1.5 12.5 1.5Z"
                stroke="#2B3F6C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <h2 className="text-[rgba(55, 65, 81, 1)] font-poppins text-xl font-normal">
              Back To T&Cs
            </h2>
          </div>

          <div className="h-max w-screen">
            <h4 className="text-[rgba(19, 47, 65, 1)] mb-4 font-poppins text-[32px] font-medium">
              Payment Details
            </h4>
          </div>
        </div>
        <div className="flex justify-start gap-4 px-[72px]">
          <div className="custom-shadow h-max w-[792px] rounded-2xl bg-[#ffffff] px-5 pb-5 pt-3">
            <div
              onClick={() => setdisabled(false)}
              className="z-15 relative right-0 m-0 flex justify-end p-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                  fill="#2B3F6C"
                />
              </svg>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between gap-6">
                <div className="flex w-[50%] flex-col gap-[6px]">
                  <label
                    htmlFor="fullName"
                    className="text-md font-poppins font-medium"
                  >
                    Full Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    disabled={disabled}
                    required
                    placeholder="Enter Your Full Name"
                    className="w-full rounded-lg border-1 border-[#DBDBDB] p-4"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex w-[50%] flex-col gap-[6px]">
                  <label
                    htmlFor="email"
                    className="text-md font-poppins font-medium"
                  >
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={disabled}
                    required
                    placeholder="Enter your E-mail"
                    className="w-full rounded-lg border-1 border-[#DBDBDB] p-4"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-6">
                <div className="flex w-[50%] flex-col gap-[6px]">
                  <label
                    htmlFor="phoneNumber"
                    className="text-md font-poppins font-medium"
                  >
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    disabled={disabled}
                    required
                    placeholder="Enter Your Mobile Number"
                    className="w-full rounded-lg border-1 border-[#DBDBDB] p-4"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex w-[50%] flex-col gap-[6px]">
                  <label
                    htmlFor="gstinNumber"
                    className="text-md font-poppins font-medium"
                  >
                    GSTIN Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    disabled={disabled}
                    name="gstinNumber"
                    placeholder="GSTIN Number"
                    minLength={15}
                    required
                    maxLength={15}
                    className="w-full rounded-lg border-1 border-[#DBDBDB] p-4"
                    value={formData.gstinNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label
                  htmlFor="address"
                  className="text-md font-poppins font-medium"
                >
                  Address<span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={4}
                  name="address"
                  disabled={disabled}
                  required
                  placeholder="Enter Your Address"
                  className="w-2/4 rounded-lg border-1 border-[#DBDBDB] p-4"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              {error && (
                <p className="text-md font-poppins font-medium text-red-600">
                  Fill All The Req* Field`&apos;`s
                </p>
              )}
            </form>
          </div>
          <div className="flex w-[418px] flex-col gap-4">
            <div className="custom-shadow w-[418px] gap-7 rounded-2xl bg-[#ffffff] p-4">
              <div className="mb-3 flex h-10 items-center justify-start gap-[14px]">
                <h4 className="font-poppins text-2xl font-semibold">
                  Review Details
                </h4>
              </div>
              <div className="items-left mt-2 flex w-[386px] flex-col justify-start rounded-xl bg-[#F7F7FC] p-4">
                <div className="mb-4 flex h-[51px] w-[352px] items-center justify-between">
                  <div>
                    <p className="font-poppins text-lg font-medium">
                      Registration Fee
                    </p>
                    <p className="font-poppins text-xs font-medium text-[#6F6C90]">
                      one time for 3 months
                    </p>
                  </div>
                  <div>
                    <p className="text-center font-poppins text-2xl font-medium text-[#553cf7]">
                      ₹{price}
                    </p>
                    <p className="font-poppins text-[10px] font-medium text-[#6F6C90]">
                      includes taxes & fees
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  {plan.details.map((data, i) => (
                    <div
                      key={i}
                      className="justify-left flex items-center gap-3"
                    >
                      <svg
                        className="max-h-5 min-h-5 min-w-5 max-w-5" // Ensure both width and height are set to the same size
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4505_21018)">
                          <path
                            d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                            fill="#4A3AFF"
                          />
                          <path
                            d="M5.47461 10.6466L8.06062 13.2326L14.5257 6.76758"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4505_21018">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <h3 className="font-helvetica text-sm font-normal leading-tight text-[#170F49]">
                        {data}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-3 flex h-[36px] items-center justify-between px-2">
                <div className="flex flex-col">
                  <p className="font-poppins text-xl font-medium">
                    Grand Total
                  </p>
                  <p className="font-poppins text-xs font-medium text-[#6F6C90]">
                    {" "}
                    inclusive of All taxes & Fees
                  </p>
                </div>
                <p className="text-right font-poppins text-2xl font-medium text-[#2E3192]">
                  ₹{price}
                </p>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="flex h-[48px] w-[100%] items-center justify-center rounded-2xl bg-[rgba(46,49,146,1)] p-4 font-poppins text-white"
            >
              Pay ₹{price}
            </button>
          </div>
        </div>
      </div>
      {loader && <Loadingeanimation width="w-64" />}
    </>
  );
};

export default Plans;
/*
                               
                            <div className="h-[58px] mt-4  px-2">
                                <div className="h-[51px] gap-4 flex flex-col justify-between ">
                                    <div className="flex  justify-between">
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">Booking Fee</p>
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">₹ {Math.ceil(price * 0.95).toFixed(2)}</p>
                                    </div>

                                </div>
                            </div>

*/
