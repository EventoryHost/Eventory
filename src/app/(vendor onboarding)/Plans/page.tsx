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
    description: string;
    price: number;
    period: string;
    details: string[];
}

const Plans = () => {
    const [vendorName, setVendorName] = useState(""); // Adjust this as needed
    const [vendorId, setVendorId] = useState(""); // Adjust this as needed
    const router = useRouter();

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

    const planDetails: PlanDetails[] = [
        {
            title: "Basic",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 99,
            period: "one time",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
        {
            title: "Medium",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 999,
            period: "month",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
        {
            title: "Annual",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 9999,
            period: "year",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
    ];

    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
            <div className="bg-[#F7F6F9] py-[3.5rem] w-screen">
                <div className="flex flex-col  justify-center pl-[72px] gap-6 w-[264px]">
                    <Link href="/agreement">
                        <div className="flex gap-3 justify-start">
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.35 9.55L8.71317 12.1868C8.26407 12.6359 8.26407 13.3641 8.71317 13.8132L11.35 16.45M9.05 13H17.1M12.5 1.5C6.14873 1.5 1 6.64873 1 13C1 19.3513 6.14873 24.5 12.5 24.5C18.8513 24.5 24 19.3513 24 13C24 6.64873 18.8513 1.5 12.5 1.5Z" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <h2 className="font-poppins font-normal text-[rgba(55, 65, 81, 1)] text-xl">Back To T&Cs</h2>
                        </div>
                    </Link>
                    <div className=" w-screen  h-[20px]">
                        <h4 className="font-poppins mb-4 text-[32px]  font-medium text-[rgba(19, 47, 65, 1)]">Select a Plans</h4>
                    </div>
                </div>
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
            </div>
        </>
    );
};

export default Plans;