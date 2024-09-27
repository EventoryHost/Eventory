import React, { useState } from "react";
import { Upload, PlusCircle } from "lucide-react";

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
      : `Upload ${multiple ? "files" : "file"}`;

  return (
    <div
      className={`flex w-fit items-center justify-center gap-2 rounded-xl border-2 border-dashed p-3 px-6 transition-all ${
        fileNames.length > 0
          ? "border-green-500 bg-green-100"
          : "border-gray-400 bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <Upload
        className={fileNames.length > 0 ? "text-green-500" : "text-[#2E3192]"}
      />
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
