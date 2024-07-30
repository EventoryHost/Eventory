"use client";
import StepBar from "@/app/(components)/stepBar";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddBtn from "@/app/(components)/addBtn";


const vehicleTypes = [
    'Sedan',
    'Hatchback',
    'Coupe',
    'Convertible',
    'SUV',
    'Bus',
    'Van',
    'Crossover',
    'Minivan',
    'Wagon',
    'Sports Cars',
    'Luxury Cars',
    'Minibus',
    'Hybrid',
    'Limousine',
    'Others',
];
const brands = [
    'Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Honda', 'Skoda', 'Volkswagen AG', 'Renault', 'Nissan', 'Mg Motors', 'BYD', 'Toyota', 'Kia', 'Audi', 'Bmw', 'Mercedes', 'Others'
];

const models = [
    'Swift', 'Scorpio', 'Tata Punch', 'Mahindra', 'Thar', 'Ciaz', 'Nexon', 'Creta', 'Brezza', 'Sonet', 'Innova Crysta', 'Innova', 'Kia Carens', 'Xuv300', 'Baleno', 'Ertiga', 'Others'
];


const page = () => {
    const [value, setValue] = useState(50);

    const handleChange = (event: { target: { value: React.SetStateAction<number>; }; }) => {
        setValue(event.target.value);
    };
    const router = useRouter();
    const [contactName, setcontactName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.push("/transportation/page3");
    };

    return (
        <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
            <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
                <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
                    <StepBar currentStep={3} />
                </div>
                <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Fill out your Basic details
                    </h1>
                    <p className="text-black xs:text-sm md:w-[90%]">
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
            <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
                <div >
                    <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
                        <span className="font-semibold">
                            Pricing Structure
                        </span>
                        <div className="flex gap-2">
                            <input type="checkbox" name="heavy_vehicles" id="" />
                            <span className="semi-bold">Type of Vehicles</span>
                        </div>
                        <div className="gap-6 flex-row flex">
                            <div className="flex flex-col">

                                <label >Name</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Min.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="  w-[140px]  rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Max.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className=" w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                        </div>
                        <AddBtn />
                        <div className="flex gap-2">
                            <input type="checkbox" name="heavy_vehicles" id="" />
                            <span className="semi-bold">Type of Service</span>
                        </div>
                        <div className="gap-6 flex-row flex">
                            <div className="flex flex-col">

                                <label >Name</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Min.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="  w-[140px]  rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Max.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className=" w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                        </div>
                        <AddBtn />
                        <div className="flex gap-2">
                            <input type="checkbox" name="heavy_vehicles" id="" />
                            <span className="semi-bold">Type of Cargo</span>
                        </div>
                        <div className="gap-6 flex-row flex">
                            <div className="flex flex-col">

                                <label >Name</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Min.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className="  w-[140px]  rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                            <div className="flex flex-col">

                                <label >Max.</label>
                                <input
                                    onChange={(e) => setcontactName(e.target.value)}
                                    id="contactName"
                                    type="text"
                                    className=" w-[140px] rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                    placeholder="Rs 200"
                                />
                            </div>
                        </div>
                        <AddBtn />

                        <div className="flex gap-2">
                            <input type="checkbox" name="heavy_vehicles" id="" />
                            <span className="semi-bold">Advanced Payment</span>
                        </div>

                        Set Percentage

                        <div className="flex flex-col items-center w-full">
            <div className="relative w-full">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={handleChange}
                    className="w-full appearance-none bg-gray-300 h-1 rounded-full cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, #1D4ED8 ${value}%, #E5E7EB ${value}%)`,
                    }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-transparent rounded-full"
                    style={{
                        left: `${value}%`,
                        transform: 'translateX(-50%)',
                    }}
                >
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
            </div>
            <div className="mt-2 text-center">
                <p className="text-lg font-medium">{value}%</p>
            </div>
        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;
