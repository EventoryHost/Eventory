"use client";
import React from "react";

// Define the props type
interface LoaderProps {
  width?: string; // width can be optional and specified as a string
}

const Loadingeanimation: React.FC<LoaderProps> = ({ width = "w-56" }) => {
  // Default width
  return (
    <div className="flex h-screen items-center justify-center bg-white bg-opacity-80">
      <img
        src="https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/ezgif-3-19f3ab10a0.gif"
        alt="Loading..."
        className={`${width} h-auto`} // Use the width prop
      />
    </div>
  );
};

export default Loadingeanimation;
