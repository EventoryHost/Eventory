"use client";
import React from "react";

// Define the props type
interface LoaderProps {
  width?: string; // width can be optional and specified as a string
}

const Loadingeanimation: React.FC<LoaderProps> = ({ width = "w-64" }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white/5 bg-opacity-80 text-white shadow-md shadow-black/10 backdrop-blur-sm transition-transform duration-500">
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/loader/output-onlinegiftools.gif"
        alt="Loading..."
        className={`${width} h-auto rounded-lg`} // Use the width prop
      />
    </div>
  );
};

export default Loadingeanimation;
