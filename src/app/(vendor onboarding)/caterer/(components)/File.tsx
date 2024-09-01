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
    <div className="flex items-center space-x-2 rounded-lg border p-2">
      <FiFile className="text-blue-500" /> {/* File icon */}
      <div className="flex flex-col">
        {/* Check if file and file.name exist before rendering */}
        <span className="font-semibold">
          {file?.name || "No file selected"}
        </span>
        {/* Check if file.size exists before formatting and rendering */}
        {file?.size !== undefined && (
          <span className="text-sm text-gray-500">{formatSize(file.size)}</span>
        )}
      </div>
    </div>
  );
};

export default FileDisplay;
