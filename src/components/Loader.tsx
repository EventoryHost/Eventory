"use client";
import React from "react";

// Define the props type
interface LoaderProps {
  width?: string; // width can be optional and specified as a string
}

const Loadingeanimation: React.FC<LoaderProps> = ({ width = "w-64" }) => {
  // Default width
  return (
    <div className="flex absolute bg-white/5 backdrop-blur-sm shadow-md shadow-black/10 rounded-lg  transition-transform duration-500 text-white  items-center justify-center bg-opacity-80  inset-0 z-50  ">
      <img
        src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/output-onlinegiftools.gif"
        alt="Loading..."
        className={`${width}  rounded-lg h-auto`} // Use the width prop
      />
    </div>
  );
};

export default Loadingeanimation;
// https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/ezgif-3-19f3ab10a0.gif