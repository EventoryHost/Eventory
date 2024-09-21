import { useState } from "react";
import { Upload, CheckCircle, PlusCircle } from "lucide-react";

type FileInputProps = {
  label: string;
  onFileSelect: (file: File[]) => void;
  acceptedFileTypes: string;
};

const MultipleFileInput = ({
  label,
  onFileSelect,
  acceptedFileTypes,
}: FileInputProps) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onFileSelect(Array.from(event.target.files));
    }
  };

  return (
    <div
      className={` flex w-fit items-center justify-center rounded-xl border-2 border-dashed p-3 px-6 gap-2 transition-all ${
        fileName
          ? "border-green-500 bg-green-100"
          : "border-gray-400 bg-gray-200 hover:bg-gray-300"
      }`}
    >
      <Upload
        className={` ${fileName ? "text-green-500" : "text-[#2E3192]"}`}
      />
      <input
        type="file"
        name={label}
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        className="hidden"
        id={label.replace(" ", "-").toLowerCase()}
        multiple
      />
      <label
        htmlFor={label.replace(" ", "-").toLowerCase()}
        className="cursor-pointer  text-[#2E3192]"
      >
        {fileName ? fileName : `Upload `}
      </label>
      {fileName && <PlusCircle className="ml-2 text-green-500" />}
    </div>
  );
};

export default MultipleFileInput;
