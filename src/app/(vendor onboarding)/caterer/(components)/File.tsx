import React from "react";

interface FileDisplayProps {
  file?: File; // Single File object
  files?: File[]; // Array of File objects
}

const FileDisplay: React.FC<FileDisplayProps> = ({ file, files }) => {
  // Format the file size to a readable format (e.g., KB, MB)
  const formatSize = (size: number): string => {
    if (size < 1024) return `${size} bytes`;
    else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / 1048576).toFixed(2)} MB`;
  };

  // If there's a single file, display it
  if (file) {
    return (
      <div className="flex w-full items-center justify-between gap-10 space-x-2 rounded-3xl border p-2 px-6">
        <div className="flex items-center gap-4">
          <img
            src={
              "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/fileicon.svg"
            }
            className="h-8 w-8"
            alt="file"
          />
          <div className="flex flex-col">
            <span className="font-semibold">
              {file.name || "No file selected"}
            </span>
            {file.size !== undefined && (
              <span className="text-sm text-gray-500">
                {formatSize(file.size)}
              </span>
            )}
          </div>
        </div>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2.5"
            width="20"
            height="20"
            rx="5"
            stroke="#2B3F6C"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 12L11.5 14L15.5 10"
            stroke="#2B3F6C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // If there's an array of files, map over and display each
  if (files && files.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        {files.map((f, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between gap-10 space-x-10 rounded-3xl border p-2 px-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/fileicon.svg"
                }
                className="h-8 w-8"
                alt="file"
              />
              <div className="justify-left flex h-14 w-[100%] flex-col items-start">
                <span className="h-7 overflow-hidden font-semibold">
                  {f.name || "No file selected"}
                </span>
                {f.size !== undefined && (
                  <span className="h-5 text-sm text-gray-500">
                    {formatSize(f.size)}
                  </span>
                )}
              </div>
            </div>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2.5"
                width="20"
                height="20"
                rx="5"
                stroke="#2B3F6C"
                strokeWidth="1.5"
              />
              <path
                d="M9.5 12L11.5 14L15.5 10"
                stroke="#2B3F6C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  return <div>No files to display</div>;
};

export default FileDisplay;
