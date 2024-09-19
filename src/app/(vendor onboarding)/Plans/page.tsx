"use client";

import jwt from "jsonwebtoken";
import Script from "next/script";
import { handlePayment } from "@/services/payment";
import { getvendor } from "@/services/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation'
import Link from "next/link";
interface PlanDetails {
    title: string;
    price: number;
    details: string[];
}

type Pagechangetype = {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    handleformSubmit: () => void;
};


const Plans = ({ setCurrentPage,handleformSubmit }: Pagechangetype) => {
    const plan: PlanDetails = {
        title: "Basic",
        price: 99,
        details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
    };
    const [error,setError] = useState(false);
    const router = useRouter();
    const [vendorId, setVendorId] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        gstinNumber: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(false)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Exclude 'gstinNumber' field from validation of form
        const { gstinNumber, ...fieldsToCheck } = formData;
        const isFormValid = Object.values(fieldsToCheck).every(value => value.trim() !== "");
    
        if (isFormValid) {
            // Proceed with handling payment if the form is valid
            handlePayment(plan.price.toString(), plan.title, vendorId, formData.fullName, setCurrentPage , handleformSubmit);
        } else {
            // Optionally, handle invalid form (e.g., show an error message)
           setError(true)
        }
    };
    const fetchVendor = async (
        userId: string,
        email: string,
        mobile: string
    ) => {
        const res = await getvendor(userId, email, mobile);
        return res;
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    const { userId, email } = jwt.decode(token) as {
                        userId: string;
                        email: string;
                    };

                    if (userId && email) {
                        const user = await fetchVendor(userId, email, "");
                        //console.log(user);
                        setVendorId(user.id);
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            email: user?.email,
                            fullName : user?.name,
                            gstinNumber : user?.businessDetails.gstin,
                            address : user?.businessDetails.businessAddress,
                        }));
                        //console.log(user?.name);
                    } else {
                        console.error("Token does not contain expected data.");
                    }
                } catch (error) {
                    console.error("Failed to decode token:", error);
                }
            } else {
                console.log("No token found in localStorage.");
            }
        };

        fetchData();

    }, []);


    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
            <div className="bg-[#F7F6F9] py-[3.5rem] h-max w-screen">
                <div className="flex flex-col h-max justify-center pl-[72px] gap-6 w-[264px]">

                    <div onClick={() => setCurrentPage((prevPage) => prevPage - 1)} className="flex gap-3 justify-start">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.35 9.55L8.71317 12.1868C8.26407 12.6359 8.26407 13.3641 8.71317 13.8132L11.35 16.45M9.05 13H17.1M12.5 1.5C6.14873 1.5 1 6.64873 1 13C1 19.3513 6.14873 24.5 12.5 24.5C18.8513 24.5 24 19.3513 24 13C24 6.64873 18.8513 1.5 12.5 1.5Z" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <h2 className="font-poppins font-normal text-[rgba(55, 65, 81, 1)] text-xl">Back To T&Cs</h2>
                    </div>

                    <div className=" w-screen  h-max">
                        <h4 className="font-poppins mb-4 text-[32px]  font-medium text-[rgba(19, 47, 65, 1)]">Payment Details</h4>
                    </div>
                </div>
                <div className="flex justify-start gap-4 px-[72px]">
                    <div className="custom-shadow w-[792px] h-max rounded-2xl pt-3 pb-5 px-5 bg-[#ffffff] ">
                        <div onClick={() => setCurrentPage(1)} className="flex relative z-15 m-0 right-0 p-0 justify-end">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                            </svg>
                        </div>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col w-[50%] gap-[6px]">
                                    <label htmlFor="fullName" className="font-poppins font-medium text-md">
                                        Full Name<span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="Enter Your Full Name"
                                        className="w-full border-1 border-[#DBDBDB] rounded-lg p-4"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[6px]">
                                    <label htmlFor="email" className="font-poppins font-medium text-md">
                                        Email<span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your E-mail"
                                        className="w-full border-1 border-[#DBDBDB] rounded-lg p-4"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-6">
                                <div className="flex flex-col w-[50%] gap-[6px]">
                                    <label htmlFor="phoneNumber" className="font-poppins font-medium text-md">
                                        Phone Number<span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        required
                                        placeholder="Enter Your Mobile Number"
                                        className="w-full border-1 border-[#DBDBDB] rounded-lg p-4"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[6px]">
                                    <label htmlFor="gstinNumber" className="font-poppins font-medium text-md">
                                        GSTIN Number
                                    </label>
                                    <input
                                        type="text"
                                        name="gstinNumber"
                                        placeholder="GSTIN Number"
                                        className="w-full border-1 border-[#DBDBDB] rounded-lg p-4"
                                        value={formData.gstinNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[6px]">
                                <label htmlFor="address" className="font-poppins font-medium text-md">
                                    Address<span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    name="address"
                                    required
                                    placeholder="Enter Your Address"
                                    className="w-2/4 border-1 border-[#DBDBDB] rounded-lg p-4"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            {error && <p className="font-poppins text-red-600 font-medium text-md">Fill All The Req* Field's</p> }
                        </form>
                    </div>
                    <div className="w-[418px] flex flex-col gap-4 h-[513px] ">
                        <div className="custom-shadow w-[418px] gap-4 rounded-2xl p-4 bg-[#ffffff] ">
                            <div className="flex gap-[14px] mb-3 justify-start items-center h-10">
                                <h4 className="font-poppins  text-2xl font-semibold">Review Details</h4>
                            </div>
                            <div className="h-[227px] w-[386px] mt-2 flex flex-col justify-start items-left rounded-xl p-4 bg-[#F7F7FC]">
                                <div className="flex h-[51px] mb-4 w-[352px] justify-between items-center">
                                    <div>
                                        <p className="font-poppins font-medium text-lg ">Registration Fee</p>
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">one time for 3 months</p>
                                    </div>
                                    <div>
                                        <p className="font-poppins font-medium text-center text-2xl text-[#553cf7] ">₹{plan.price}</p>
                                        <p className="font-poppins font-medium text-[10px] text-[#6F6C90] ">includes taxes & fees</p>
                                    </div>
                                </div>
                                <div className="gap-4 flex flex-col justify-between h-[128px]">
                                    {
                                        plan.details.map((data, i) => (
                                            <div key={i} className="flex justify-left gap-3 items-center h-5">
                                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4505_21018)">
                                                        <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="#4A3AFF" />
                                                        <path d="M5.47461 10.6466L8.06062 13.2326L14.5257 6.76758" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4505_21018">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <h3 className="font-helvetica  w-max font-normal font-[#170F49] text-sm">{data}</h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="h-[58px] mt-4  px-2">
                                <div className="h-[51px] gap-4 flex flex-col justify-between ">
                                    <div className="flex  justify-between">
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">Booking Fee</p>
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">₹ {Math.ceil(plan.price * 0.95).toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">GST</p>
                                        <p className="font-poppins font-medium text-xs text-[#6F6C90] ">₹{Math.floor(plan.price * 0.05).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3 px-2 flex justify-between items-center h-[36px]">
                                <p className="font-poppins font-medium text-xl ">Grand Total</p>
                                <p className="font-poppins font-medium text-2xl text-right text-[#2E3192] ">₹{plan.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className=" text-white bg-[rgba(46,49,146,1)] rounded-2xl p-4 font-poppins flex justify-center items-center h-[48px] w-[100%]">
                            Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plans;

/*



<div className="grid gap-3 grid-cols-1 md:grid-cols-3 mt-[3rem] px-[72px]  rounded-2xl  h-[450px]">
                    {
                        planDetails.map((plan) => (
                            <div key={plan.title} className="custom-shadow flex flex-col h-[450px] rounded-2xl p-4   bg-[#ffffff] gap-3 justify-start">
                                <div className="flex gap-[14px] justify-start items-center h-10">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="10" fill="#ECEBFF" />
                                        <path d="M19.9989 9.44531C17.1994 9.44531 14.5146 10.5574 12.535 12.537C10.5555 14.5165 9.44336 17.2014 9.44336 20.0009C9.44336 22.8004 10.5555 25.4852 12.535 27.4648C14.5146 29.4443 17.1994 30.5564 19.9989 30.5564L19.9989 20.0009V9.44531Z" fill="#4A3AFF" />
                                        <path d="M20.0011 30.5547C22.8006 30.5547 25.4854 29.4426 27.465 27.463C29.4445 25.4835 30.5566 22.7986 30.5566 19.9991C30.5566 17.1996 29.4445 14.5148 27.465 12.5352C25.4854 10.5557 22.8006 9.44358 20.0011 9.44358L20.0011 19.9991L20.0011 30.5547Z" fill="#B8B1FF" />
                                    </svg>
                                    <h4 className="font-poppins  text-2xl font-semibold text-[rgba(19, 47, 65, 1)]">{plan.title}</h4>
                                </div>
                                <div className="flex static flex-col gap-[14px] justify-start">
                                    <h4 className="font-poppins text-base font-normal text-[#6F6C90]">{plan.description}</h4>
                                    <div className=" flex gap-1 h-14 justify-start items-center">
                                        <h2 className="font-poppins font-semibold text-[#170F49] text-4xl">₹{plan.price}</h2>
                                        <h2 className="font-helcetica font-normal h-[22px] text-[#6F6C90] text-xl"> / {plan.period}</h2>
                                    </div>
                                    <button onClick={() => {
                                        handlePayment(plan.price.toString(), plan.title, vendorId, vendorName, navigateToSuccess, navigateToFailure)

                                    }} className=" text-white bg-[rgba(46,49,146,1)] rounded-2xl p-4 font-poppins flex justify-center items-center h-[48px] w-[100%]">Buy Now</button>
                                </div>
                                <div className="h-[166px] mt-2 flex flex-col justify-start items-left rounded-2xl p-4 bg-[#F7F7FC]">
                                    {
                                        plan.details.map((data, i) => (
                                            <div key={i} className="flex gap-[14px] justify-left items-center md:h-10">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_4505_21018)">
                                                        <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="#4A3AFF" />
                                                        <path d="M5.47461 10.6466L8.06062 13.2326L14.5257 6.76758" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4505_21018">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <h3 className="font-helvetica mb-2 w-max font-normal md:h-5 font-[#170F49] text-lg">{data}</h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

    /*
    const fetchVendor = async (
        userId: string,
        email: string,
        mobile: string
    ) => {
        const res = await getvendor(userId, email, mobile);
        return res;
    };

    useEffect(() => {
         const fetchData = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    const { userId, email } = jwt.decode(token) as {
                        userId: string;
                        email: string;
                    };

                    if (userId && email) {
                        const user = await fetchVendor(userId, email, "");
                        //console.log(user);
                        setVendorId(user.id);
                        setVendorName(user.name);
                        //console.log(user.id);
                        //console.log(user?.name);
                    } else {
                        console.error("Token does not contain expected data.");
                    }
                } catch (error) {
                    console.error("Failed to decode token:", error);
                }
            } else {
                console.log("No token found in localStorage.");
            }
        };

        fetchData();
        
    }, []);


    const navigateToSuccess = () => {
        router.push('/Registration-Completed');
    };

    const navigateToFailure = () => {
        router.push('/Payment-Failed');
    };

*/
