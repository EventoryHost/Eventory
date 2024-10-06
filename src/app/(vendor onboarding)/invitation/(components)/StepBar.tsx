import React from "react";

interface StepBarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const StepBar: React.FC<StepBarProps> = ({ currentStep, onStepClick }) => {
  return (
    <div className="ml-4 mt-9 flex h-[50%] flex-col items-start justify-center gap-3 px-9 xs:pl-5 md:px-11 lg:p-8">
      <p className="mr-2 text-3xl font-medium text-gray-900">
        Step {currentStep} of 5
      </p>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            onClick={() => onStepClick(step)} // Update the step when clicked
            className={`h-2 w-14 cursor-pointer rounded-full ${
              currentStep >= step ? "bg-[#252775]" : "bg-gray-300"
            } opacity-100 ml-${step > 1 ? "2" : "0"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepBar;
