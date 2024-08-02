// Page3 component
"use client";
import StepBar from "@/app/(components)/stepBar";
import React from "react";
import AddBtn from "@/app/(components)/addBtn";

interface FormState {
  vehicleCheckbox: boolean;
  vehicleTypePage3: string;
  vehicleMinRate: string;
  vehicleMaxRate: string;
  serviceCheckbox: boolean;
  serviceType: string;
  serviceMinRate: string;
  serviceMaxRate: string;
  cargoCheckbox: boolean;
  cargoType: string;
  cargoMinRate: string;
  cargoMaxRate: string;
  advancedPaymentCheckbox: boolean;
  percentageValue: number;
};


type HandleChange = (field: keyof FormState, value: any) => void;


type Page3Props = {
  formState: FormState;
  handleChange: HandleChange;
  navigateToPage: (pageIndex: number) => void;
} 

// interface Page3Props {
//     formState: any; 
// }

const Page3 = ({
    formState,
    handleChange,
    navigateToPage,
}: Page3Props) => {

    return (
        <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col lg:flex-row">
            <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
                <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
                    <StepBar currentStep={3} />
                </div>
                <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
                    <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                        Fill out your Pricing rates
                    </h1>
                    <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
                        Please provide the details of the vehicles offered by your company.
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
                <form onSubmit={(e) => {e.preventDefault(); navigateToPage(4);}} className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
                    <span className="font-semibold">Pricing Structure</span>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                            checked={formState.vehicleCheckbox}
                            onChange={(e) => handleChange("vehicleCheckbox", e.target.checked)}
                        />
                        <span className="semi-bold">Type of Vehicles</span>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col">
                            <label>Name</label>
                            <input
                                value={formState.vehicleTypePage3}
                                onChange={(e) => handleChange("vehicleTypePage3", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter vehicle type"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Min. Rate</label>
                            <input
                                value={formState.vehicleMinRate}
                                onChange={(e) => handleChange("vehicleMinRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter minimum rate"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Max. Rate</label>
                            <input
                                value={formState.vehicleMaxRate}
                                onChange={(e) => handleChange("vehicleMaxRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter maximum rate"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                            checked={formState.serviceCheckbox}
                            onChange={(e) => handleChange("serviceCheckbox", e.target.checked)}
                        />
                        <span className="semi-bold">Type of Services</span>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col">
                            <label>Name</label>
                            <input
                                value={formState.serviceType}
                                onChange={(e) => handleChange("serviceType", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter service type"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Min. Rate</label>
                            <input
                                value={formState.serviceMinRate}
                                onChange={(e) => handleChange("serviceMinRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter minimum rate"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Max. Rate</label>
                            <input
                                value={formState.serviceMaxRate}
                                onChange={(e) => handleChange("serviceMaxRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter maximum rate"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                            checked={formState.cargoCheckbox}
                            onChange={(e) => handleChange("cargoCheckbox", e.target.checked)}
                        />
                        <span className="semi-bold">Type of Cargo</span>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col">
                            <label>Name</label>
                            <input
                                value={formState.cargoType}
                                onChange={(e) => handleChange("cargoType", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter cargo type"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Min. Rate</label>
                            <input
                                value={formState.cargoMinRate}
                                onChange={(e) => handleChange("cargoMinRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter minimum rate"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Max. Rate</label>
                            <input
                                value={formState.cargoMaxRate}
                                onChange={(e) => handleChange("cargoMaxRate", e.target.value)}
                                type="text"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter maximum rate"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
                            checked={formState.advancedPaymentCheckbox}
                            onChange={(e) => handleChange("advancedPaymentCheckbox", e.target.checked)}
                        />
                        <span className="semi-bold">Advanced Payment</span>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col">
                            <label>Percentage Value</label>
                            <input
                                value={formState.percentageValue}
                                onChange={(e) => handleChange("percentageValue", e.target.value)}
                                type="number"
                                className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                                placeholder="Enter percentage value"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page3;
