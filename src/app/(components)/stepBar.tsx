import React from 'react';

const StepBar = ({ currentStep }: { currentStep: number }) => {
    return (
        <div className="flex h-[50%] flex-col items-start justify-center gap-3 px-9 mt-9 xs:pl-5 md:px-11 lg:p-8 ">
            <p className="text-3xl text-gray-900 font-medium mr-2">Step {currentStep} of 4</p>
            <div className="flex">
                <div
                    className={`w-14 h-2 rounded-full ${currentStep >= 1 ? 'bg-[#252775]' : 'bg-gray-300'} opacity-100`}
                />
                <div
                    className={`w-14 h-2 rounded-full ml-2 ${currentStep >= 2 ? 'bg-[#252775]' : 'bg-gray-300'} opacity-100`}
                />
                <div
                    className={`w-14 h-2 rounded-full ml-2 ${currentStep >= 3 ? 'bg-[#252775]' : 'bg-gray-300'} opacity-100`}
                />
                <div
                    className={`w-14 h-2 rounded-full ml-2 ${currentStep >= 4 ? 'bg-[#252775]' : 'bg-gray-300'} opacity-100`}
                />
            </div>
        </div>
    );
};

export default StepBar;
