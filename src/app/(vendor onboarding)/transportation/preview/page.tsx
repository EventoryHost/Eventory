"use client";
// Make a preview page for the transportation form

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StepBar from "@/app/(components)/stepBar";
import { Check, EditIcon } from "lucide-react";

const page = () => {
    const router = useRouter();
    const name = "Vijay Mallya";
    const [contactName, setcontactName] = useState("");
    const [desc, setDesc] = useState("");
    const [workers, setWorkers] = useState("");
    const [url, seturl] = useState("");
    // sedan coupe suv crosover minivan
    const vehicleTypes = [
        "Sedan",
        "Coupe",
        "SUV",
        "Crossover",
        "Minivan",
    ];
    // maruti suzuki tata motors mahindra honda 
    const brands = [
        "Maruti Suzuki",
        "Tata Motors",
        "Mahindra",
        "Honda",
    ];

    // swift scorpio tata punch mahindra thar
    const models = [
        "Swift",
        "Scorpio",
        "Tata Punch",
        "Mahindra",
        "Thar",
    ];


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Business Name:", contactName);
        console.log("Category:", workers);
        console.log("Description:", desc);
        console.log("URL:", url);
        router.push("/transportation/page2");
    };

    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <span className="p-4 flex justify-start align-center font-semibold text-3xl">
                    {name} / Transportation
                </span>

                <div className="ml-8 font-semibold rounded-xl flex justify-between  text-3xl p-2 pl-4 mr-4 bg-gray-200">
                    1. Basic Venue Details
                    <div className="flex justify-center align-center p-1">
                        <a href="">
                            <EditIcon size={32} />
                        </a>
                    </div>
                </div>

                <div className="flex gap-16 mx-8 mt-6 ">
                    <div className="flex flex-col w-1/2">
                        <span className="text-xl ">
                            Contact Person Name
                        </span>
                        <span className="mt-4 font-semibold">
                            {name}
                        </span>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <span className="text-xl ">
                            Total Workers
                        </span>
                        <span className="font-semibold">
                            0-2 Members
                        </span>
                    </div>
                </div>

                <div className="flex gap-16 mx-8 mt-6">
                    <div className="flex flex-col w-1/2">
                        <span className="text-xl ">
                            Description of your past work
                        </span>
                        <span className="mt-4 font-semibold">
                            Desc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad. Perspiciatis, expedita accusantium quas quia itaque id saepe maxime voluptatem commodi eos delectus.
                        </span>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <span className="text-xl ">
                            Portfolio of past work
                        </span>
                        <span className="mt-4 font-semibold flex">

                            <span>Doc1.pdf</span>
                            <Check size={24} />
                        </span>
                    </div>
                </div>

                <div className="mt-4 ml-8 font-semibold rounded-xl flex justify-between  text-3xl p-2 pl-4 mr-4 bg-gray-200">
                    2. Equipment Details
                    <div className="flex justify-center align-center p-1">
                        <a href="">
                            <EditIcon size={32} />
                        </a>
                    </div>
                </div>

                <div className="flex gap-16 mx-8 mt-6 ">
                    <div className="flex flex-col w-1/2">
                        <span className="text-lg ">
                            Do You have any heavy vehicles?
                        </span>
                        <span className="font-semibold  mt-4">
                            Yes
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="p-4 pl-8 ">
                        <span className="text-xl ">
                            Heavy Vehicles Details
                        </span>
                    </div>
                    <span className=" ml-8 mt-2 font-semibold flex">
                        <span>Doc1.pdf</span>
                        <Check size={24} />
                    </span>
                </div>

                <div>
                    <div className="p-4 pl-8 ">
                        <span className="text-xl ">
                            Vehicle Types
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2 ml-8">
                        {vehicleTypes.map((type) => (
                            <button
                                key={type}
                                className=" rounded-3xl border border-[#605ED8] text-[#605ED8] bg-white min-w-[6rem] p-2 text-sm text-center shadow-md hover:bg-[#252775] hover:text-white"
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                </div>

                <div>
                    <div className="p-4 pl-8">
                        <span className="text-xl">Brands</span>
                    </div>

                    <div className="flex flex-wrap gap-2 ml-8">
                        {brands.map((type) => (
                            <button
                                key={type}
                                className=" rounded-3xl border border-[#605ED8] text-[#605ED8] bg-white min-w-[6rem] p-2 text-sm text-center shadow-md hover:bg-[#252775] hover:text-white"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="p-4 pl-8">
                        <span className="text-xl">Models</span>
                    </div>

                    <div className="flex flex-wrap gap-2 ml-8">
                        {models.map((type) => (
                            <button
                                key={type}
                                className=" rounded-3xl border border-[#605ED8] text-[#605ED8] bg-white min-w-[6rem] p-2 text-sm text-center shadow-md hover:bg-[#252775] hover:text-white"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-4 ml-8 mb-4 font-semibold rounded-xl flex justify-between  text-3xl p-2 pl-4 mr-4 bg-gray-200">
                    3. Package Rates
                    <div className="flex justify-center align-center p-1">
                        <a href="">
                            <EditIcon size={32} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col ml-8">
                    <div className="font-semibold text-xl">
                        Types of Vehicles
                    </div>
                    <div className="flex   mt-4">
                        <div className="w-1/2 flex flex-col">
                            <span>Small Vehicles</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div className=" w-1/2 flex flex-col">
                            <span>Big Vehicles</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col ml-8 mt-4">
                    <div className="font-semibold text-xl">
                        Types of Service
                    </div>
                    <div className="flex flex-row mt-4">
                        <div className="w-1/2 flex flex-col">
                            <span>Standard Delivery</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div className=" w-1/2 flex flex-col">
                            <span>Fast Delivery</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col ml-8 mt-4">
                    <div className="font-semibold text-xl">
                        Types of Cargo
                    </div>
                    <div className="flex   mt-4">
                        <div className="w-1/2 flex flex-col">
                            <span>General Cargo</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div className=" w-1/2 flex flex-col">
                            <span>Big Cargo</span>
                            <span className="font-semibold">
                                ₹ 800 - ₹ 1600
                            </span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 ml-8 font-semibold rounded-xl flex justify-between  text-3xl p-2 pl-4 mr-4 bg-gray-200">
                    4. Policy
                    <div className="flex justify-center align-center p-1">
                        <a href="">
                            <EditIcon size={32} />
                        </a>
                    </div>
                </div>

                <div className="flex w-1/2">
                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <div className="p-4 pl-8 ">
                                <span className="text-xl ">Terms and Conditions</span>
                            </div>
                            <span className="ml-8 mt-2 font-semibold flex">
                                <span>Doc1.pdf</span>
                                <Check size={24} />
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <div className="p-4 pl-8 ">
                                <span className="text-xl ">Cancellation Policy</span>
                            </div>
                            <span className="ml-8 mt-2 font-semibold flex">
                                <span>Doc1.pdf</span>
                                <Check size={24} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="items-strech mr-8 mt-9 flex flex-row gap-7 self-end">
                    <button
                        className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                        onClick={handleSubmit}
                    >
                        Skip
                    </button>
                    <button
                        className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                        onClick={handleSubmit}
                    >
                        Continue
                    </button>
                </div>


            </div>
        </>
    );
}


export default page;