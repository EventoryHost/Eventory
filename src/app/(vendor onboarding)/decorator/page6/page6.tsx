"use client";

import FileInput from "@/components/fileInput";
import { ArrowLeft, XCircle } from "lucide-react";

interface FormState {
  portfolio: string | File;
  ratings_reviews: string | File;
  clientTestimonials: string | File;
  certificates_awards: string | File;
}

interface Page6Props {
  handleContinue: () => void;
  portLinks: File[];
  setPortLinks: React.Dispatch<React.SetStateAction<File[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page6: React.FC<Page6Props> = ({
  formState,
  currentPage,
  setCurrentPage,
  updateFormState,
  handleContinue,
  portLinks,
  setPortLinks,
}) => {
  const {
    portfolio,
    ratings_reviews,
    clientTestimonials,
    certificates_awards,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Handle file select
  const handleFileSelect = (file: File) => {
    setPortLinks((prevLinks) => [...prevLinks, file]); // Append the new file to the array
  };

  // Handle file removal
  const handleFileRemove = (index: number) => {
    setPortLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  return (
    <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-3 md:p-6">
        <div className="flex items-center gap-4">
          <ArrowLeft
            className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
            aria-hidden="true"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <h1 className="text-2xl font-semibold">Rating and Review</h1>
        </div>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-start justify-between gap-8">
            <div className="flex min-w-[50%] flex-col gap-2">
              <label className="text-base font-medium" htmlFor="category">
                Online Ratings and Reviews
              </label>
              <p className="text-small font-light">PNG, PDF, JPG</p>
              <FileInput
                label="ratings reviews"
                onFileSelect={(file) => {
                  if (!Array.isArray(file)) {
                    updateFormState({ ratings_reviews: file });
                  }
                }}
                acceptedFileTypes="image/png, .pdf, image/jpg"
              />
              <input
                id="businessName"
                type="text"
                className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                placeholder="Enter url here"
                onChange={(e) =>
                  updateFormState({ ratings_reviews: e.target.value })
                }
              />
            </div>
            <div className="flex min-w-[50%] flex-col gap-2">
              <label htmlFor="category" className="text-base font-medium">
                Portfolio{" "}
              </label>
              <span className="text-small font-light">PNG,JPG,PDF</span>
              {/* <FileInput
                    label="portfolio"
                    onFileSelect={handleFileSelect
                    }
                    acceptedFileTypes="image/png, .pdf, image/jpg"
                  /> */}
              {/* Styled portfolio list */}
              {/* {portLinks.length > 0 && (
                    <ul className="mt-4">
                      {portLinks.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mb-2 shadow-md"
                        >
                          <a
                            href={URL.createObjectURL(file)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline truncate"
                          >
                            {file.name}
                          </a>

                          <button
                            onClick={() => handleFileRemove(index)}
                            className="ml-4 p-1 rounded-full text-red-500 hover:bg-red-200"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )} */}

              <input
                id="businessName"
                type="text"
                className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                placeholder="Enter url here"
                onChange={(e) => updateFormState({ portfolio: e.target.value })}
              />
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Client Testimonials{" "}
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="client testimonials"
                  onFileSelect={(file) => {
                    if (!Array.isArray(file)) {
                      updateFormState({ clientTestimonials: file });
                    }
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
                <label htmlFor="category" className="text-base font-medium">
                  Or provide Via
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Description of your client testimonials"
                  onChange={(e) =>
                    updateFormState({ clientTestimonials: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[50%] flex-col gap-2">
                <label htmlFor="category" className="text-base font-medium">
                  Certificate or award
                </label>
                <span className="text-small font-light">PNG,JPG,PDF</span>
                <FileInput
                  label="certificates awards"
                  onFileSelect={(file) => {
                    if (!Array.isArray(file)) {
                      updateFormState({ certificates_awards: file });
                    }
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
                <label htmlFor="category" className="text-base font-medium">
                  Or provide Via
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  className="w-[95%] rounded-xl border-2 border-gray-300 p-3"
                  placeholder="Description in detail"
                  onChange={(e) =>
                    updateFormState({ certificates_awards: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="items-strech flex flex-row gap-7 self-end">
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
