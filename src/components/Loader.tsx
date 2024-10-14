"use client";
import React from "react";

// Define the props type
interface LoaderProps {
  width?: string; // width can be optional and specified as a string
}

const Loadingeanimation: React.FC<LoaderProps> = ({ width = "w-64" }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white/5 bg-opacity-80 text-white shadow-md shadow-black/10 backdrop-blur-sm transition-transform duration-500">
      <img
        src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/output-onlinegiftools.gif"
        alt="Loading..."
        className={`${width} h-auto rounded-lg`} // Use the width prop
      />
    </div>
  );
};

export default Loadingeanimation;
