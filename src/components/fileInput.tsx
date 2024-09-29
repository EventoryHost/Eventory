import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";

type FileInputProps = {
  label: string;
  onFileSelect: (file: File) => void;
  acceptedFileTypes: string;
  multiple?: boolean;
};

const FileInput = ({
  label,
  onFileSelect,
  acceptedFileTypes,
}: FileInputProps) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      className={`mt-5 flex w-fit items-center justify-center rounded-xl border-2 border-dashed p-3 transition-all ${
        fileName
          ? "border-green-500 bg-green-100"
          : "border-gray-400 bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <Upload
        className={`mr-2 ${fileName ? "text-green-500" : "text-gray-500"}`}
      />
      <input
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        className="hidden"
        id={label.replace(" ", "-").toLowerCase()}
      />
      <label
        htmlFor={label.replace(" ", "-").toLowerCase()}
        className="cursor-pointer"
      >
        {fileName ? fileName : `Upload ${label}`}
      </label>
      {fileName && <CheckCircle className="ml-2 text-green-500" />}
    </div>
  );
};

export default FileInput;
