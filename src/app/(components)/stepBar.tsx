import React from "react";

const StepBar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="mt-9 flex h-[50%] flex-col items-start justify-center gap-3 px-9 xs:pl-5 md:px-11 lg:p-8">
      <p className="mr-2 text-3xl font-medium text-gray-900">
        Step {currentStep} of 4
      </p>
      <div className="flex">
        <div
          className={`h-2 w-14 rounded-full ${currentStep >= 1 ? "bg-[#252775]" : "bg-gray-300"} opacity-100`}
        />
        <div
          className={`ml-2 h-2 w-14 rounded-full ${currentStep >= 2 ? "bg-[#252775]" : "bg-gray-300"} opacity-100`}
        />
        <div
          className={`ml-2 h-2 w-14 rounded-full ${currentStep >= 3 ? "bg-[#252775]" : "bg-gray-300"} opacity-100`}
        />
        <div
          className={`ml-2 h-2 w-14 rounded-full ${currentStep >= 4 ? "bg-[#252775]" : "bg-gray-300"} opacity-100`}
        />
      </div>
    </div>
  );
};

export default StepBar;
