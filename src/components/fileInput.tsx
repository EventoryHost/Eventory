import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

type FileInputProps = {
  label: string;
  onFileSelect: (files: File | File[]) => void;
  acceptedFileTypes: string;
  multiple?: boolean;
};

const FileInput = ({
  label,
  onFileSelect,
  acceptedFileTypes,
  multiple = false,
}: FileInputProps) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);
      const names = fileList.map((file) => file.name);
      setFileNames(names);

      // Call the onFileSelect callback with the correct file list
      onFileSelect(multiple ? fileList : fileList[0]);
    }
  };

  const displayText =
    fileNames.length > 0
      ? fileNames.join(", ")
      : `Upload`;

  return (
    <div
      className={`flex w-fit items-center justify-center gap-2 rounded-xl border-2 border-dashed p-3 px-6 transition-all ${fileNames.length > 0
        ? "border-green-500 bg-green-100"
        : "border-gray-400 bg-gray-200 hover:bg-gray-300"
        }`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 8.5L18.5 8.5C20.7091 8.5 22.5 10.2909 22.5 12.5L22.5 17.5C22.5 19.7091 20.7091 21.5 18.5 21.5L6.5 21.5C4.29086 21.5 2.5 19.7091 2.5 17.5L2.5 12.5C2.5 10.2909 4.29086 8.5 6.5 8.5L8.5 8.5" stroke="#2E3192" stroke-width="1.5" stroke-linecap="round" />
        <path d="M15.5 5.5L13.2071 3.20711C12.8166 2.81658 12.1834 2.81658 11.7929 3.20711L9.5 5.5" stroke="#2E3192" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5 3.5L12.5 15.5" stroke="#2E3192" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <input
        type="file"
        name={label}
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        className="hidden"
        id={label.replace(" ", "-").toLowerCase()}
        multiple={multiple}
      />
      <label
        htmlFor={label.replace(" ", "-").toLowerCase()}
        className="cursor-pointer text-[#2E3192]"
      >
        {displayText}
      </label>
      {fileNames.length > 0 && <PlusCircle className="ml-2 text-green-500" />}
    </div>
  );
};

export default FileInput;
