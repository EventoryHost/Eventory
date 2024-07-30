import React from 'react';
import { useState } from 'react';

const StepBar = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleStepChange = () => {
        setCurrentStep(currentStep);
    };

    return (
        <div className="flex h-[50%] flex-col items-start justify-center gap-3 px-9 mt-9 xs:pl-5 md:px-11 lg:p-8 ">
            <p className="text-3xl text-gray-900  font-medium mr-2">Step {currentStep} of 4</p>
            <div className="flex">
                <div
                    className={`w-14 h-2 rounded-full bg-[#252775] ${currentStep === 1 ? 'opacity-100' : 'opacity-50'
                        }`}
                />
                <div
                    className={`w-14 h-2 rounded-full bg-gray-300 ml-2 ${currentStep === 2 ? 'opacity-100' : 'opacity-50'}`}
                        
                />
                <div
                    className={`w-14 h-2 rounded-full bg-gray-300 ml-2 ${currentStep === 3 ? 'opacity-100' : 'opacity-50'
                        }`}
                />
                <div
                    className={`w-14 h-2 rounded-full bg-gray-300 ml-2 ${currentStep === 4 ? 'opacity-100' : 'opacity-50'
                        }`}
                />
            </div>
        </div>
    );
};

export default StepBar;