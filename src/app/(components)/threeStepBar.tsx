import React from "react";

const ThreeStepBar = (
  { currentStep }: { currentStep: number },
  onStepChange: (step: number) => void,
) => {
  return (
    <div className="ml-4 mt-9 flex h-[50%] flex-col items-start justify-center gap-3 px-9 xs:pl-5 md:px-11 lg:p-8">
      <p className="mr-2 text-3xl font-medium text-gray-900">
        Step {currentStep} of 3
      </p>
      <div className="flex items-center space-x-2">
        {[1, 2, 3].map((step) => (
          <button
          key={step}
          onClick={() => onStepChange(step)}
          className={`h-2 w-14 rounded-full ${currentStep >= step ? "bg-[#252775]" : "bg-gray-300"} opacity-100 first:ml-0 ml-2`}
        />
        ))}
      </div>
    </div>
  );
};

export default ThreeStepBar;
