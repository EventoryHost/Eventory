import { useState } from "react";
import { Upload, CheckCircle, X } from "lucide-react";

type FileInputProps = {
  label: string;
  onFileSelect: (files: File[]) => void;
  acceptedFileTypes: string;
};

const FileInput = ({
  label,
  onFileSelect,
  acceptedFileTypes,
}: FileInputProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(e.target.files || []);
    const updatedFiles = [...selectedFiles, ...filesArray];
    setSelectedFiles(updatedFiles);
    onFileSelect(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFileSelect(updatedFiles);
  };

  return (
    <div className="mt-5 flex w-fit flex-col items-center justify-start">
      <div
        className={`flex w-fit items-center justify-end self-start rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 p-3 transition-all hover:bg-gray-300`}
      >
        <Upload className="mr-2 text-indigo-500" />
        <input
          type="file"
          accept={acceptedFileTypes}
          multiple
          onChange={handleFileChange}
          className="hidden"
          id={label.replace(" ", "-").toLowerCase()}
        />
        <label
          htmlFor={label.replace(" ", "-").toLowerCase()}
          className="cursor-pointer"
        >
          Upload
        </label>
      </div>

      <div className="mt-2 flex max-w-full flex-wrap gap-2 overflow-hidden">
        {selectedFiles.map((file, index) => (
          <div
            key={index}
            className="flex max-w-[200px] items-center truncate rounded-lg bg-gray-300 px-2 py-1"
          >
            <span className="truncate">
              {file.name.length > 15
                ? file.name.slice(0, 15) + "..."
                : file.name}
            </span>
            <X
              className="ml-2 cursor-pointer text-red-500"
              onClick={() => removeFile(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileInput;
