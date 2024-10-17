"use client";
import React from "react";

// Define the props type
interface LoaderProps {
  width?: string; // width can be optional and specified as a string
}

const Loadingeanimation: React.FC<LoaderProps> = ({ width = "w-64" }) => {
  // Default width
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-lg bg-white/5 bg-opacity-80 text-white shadow-md shadow-black/10 backdrop-blur-sm transition-transform duration-500">
      <img
        src="https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/loader/output-onlinegiftools.gif"
        alt="Loading..."
        className={`${width} h-auto rounded-lg`} // Use the width prop
      />
    </div>
  );
};

export default Loadingeanimation;
// https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/ezgif-3-19f3ab10a0.gif
