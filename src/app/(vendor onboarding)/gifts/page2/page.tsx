"use client";
import ThreeStepBar from "@/app/(components)/threeStepBar";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Appetizers from "../../decorators/(components)/Appetizers";

const _buttonTexts = [
    'Books and Media Gifts',
    'Charitable Gifts',
    'Consumable Gifts',
    'Occasional Gifts',
    'Personalized Gifts',
    'Functional Gifts',
    'Luxury Gifts',
    'Surprise Gifts',
    'Traditional Gifts',
    'Home and Kitchenware Gifts',
    'Experiential Gifts',
    'Tech and Gadgets Gifts',
    'Subscription Services Gifts',
    'Fashion and Apparel Gifts',
    'Sports and Fitness Gifts',
    'Other',
];

const Page = () => {
    const router = useRouter();
    const [typesOfInvitationsYouDesign, setTypesOfInvitationsYouDesign] = useState([]);

    function handleSubmit() {
        router.push("/gifts/preview");
    }

    return (
        <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
            <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%] overflow-hidden">
                <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
                    <ThreeStepBar currentStep={2} />
                </div>
                <div className="ml-8 flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
                    <h1 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
                        Fill out your Basic details
                    </h1>
                    <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
                        Please provide the details of the business offered by your company.
                    </p>
                </div>
                <div className="relative h-[10rem] lg:w-full">
                    <img
                        src={"/tajmahal.png"}
                        alt="Taj Mahal"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9]">
                <div className="flex flex-col gap-7 rounded-xl bg-white p-12 w-[95%]">
                    <h2 className="text-3xl font-semibold">Catalog Details</h2>
                    <h3 className="text-xl font-medium">List of Gifts</h3>
                    <div className="flex min-h-full min-w-full flex-col items-center gap-5">
                        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
                            <Appetizers
                                appetizers={_buttonTexts}
                                selectedAppetizers={typesOfInvitationsYouDesign}
                                setSelectedAppetizers={setTypesOfInvitationsYouDesign as React.Dispatch<React.SetStateAction<string[]>>}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center bg-[#F7F6F9] p-2">
                    <div className="flex flex-col gap-7 rounded-xl bg-white p-12 w-[95%]">
                        <h2 className="text-3xl font-semibold">Pricing and Policies</h2>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded-lg"
                            />
                            <label className="ml-2 text-gray-700 font-semibold">
                                Select Price Range
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700 font-medium">Min</label>
                                <input
                                    type="text"
                                    placeholder="Per plate rate , Eg : Rs 200"
                                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Max</label>
                                <input
                                    type="text"
                                    placeholder="Per plate rate , Eg : Rs 200"
                                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded-xl"
                            />
                            <label className="ml-2 text-gray-700 font-semibold">
                                Delivery Charges(If available)
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700 font-medium">Min</label>
                                <input
                                    type="text"
                                    placeholder="Per plate rate , Eg : Rs 200"
                                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Max</label>
                                <input
                                    type="text"
                                    placeholder="Per plate rate , Eg : Rs 200"
                                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-medium text-xl">Terms and Conditions</h2>
                                <p className="text-sm text-gray-500">PNG, PDF, JPG</p>
                                <button className="flex items-center mt-2 w-48 justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                                    <Upload size={24} />
                                    Upload
                                </button>
                            </div>
                        </div>
                        <h2 className="font-medium text-xl">Or continue via</h2>
                        <input
                            type="text"
                            placeholder="Select your category"
                            className="w-1/3 px-3 py-2 border-2 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-[#2E3192]"
                        />
                        <div className="items-stretch mt-9 flex flex-row gap-7 self-end">
                            <button
                                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                                onClick={handleSubmit}
                            >
                                Skip
                            </button>
                            <button
                                className="rounded-xl bg-[rgb(46,49,146)] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                                onClick={handleSubmit}
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

export default Page;
