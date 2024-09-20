import React from "react";
import { FiFile } from "react-icons/fi";

interface FileDisplayProps {
  file?: {
    name?: string;
    size?: number; // Size in bytes
  };
}

const FileDisplay: React.FC<FileDisplayProps> = ({ file }) => {
  // Format the file size to a readable format (e.g., KB, MB)
  const formatSize = (size: number): string => {
    if (size < 1024) return `${size} bytes`;
    else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / 1048576).toFixed(2)} MB`;
  };

  return (
    <div className="flex items-center justify-between space-x-2 rounded-3xl border p-2 px-6">
      <div className="flex items-center gap-4">
        <img src={"/selection/fileicon.svg"} className="h-8 w-8" />
        {/* File icon */}
        <div className="flex flex-col">
          {/* Check if file and file.name exist before rendering */}
          <span className="font-semibold">
            {file?.name || "No file selected"}
          </span>
          {/* Check if file.size exists before formatting and rendering */}
          {file?.size !== undefined && (
            <span className="text-sm text-gray-500">
              {formatSize(file.size)}
            </span>
          )}
        </div>
      </div>
      <div className="m-2">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2.5" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
        <path d="M9.5 12L11.5 14L15.5 10" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </div>
    </div>
  );
};

export default FileDisplay;
