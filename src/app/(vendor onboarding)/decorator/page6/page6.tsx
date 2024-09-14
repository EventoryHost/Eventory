"use client";

import FileInput from "@/components/fileInput";

interface FormState {
  portfolio: string | File;
  ratings_reviews: string | File;
  clientTestimonials: string | File;
  certificates_awards: string | File;
}

interface Page6Props {
  handleContinue: () => void;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
}

const Page6: React.FC<Page6Props> = ({ formState, updateFormState,handleContinue }) => {
  const {
    portfolio,
    ratings_reviews,
    clientTestimonials,
    certificates_awards,
  } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Ratings and Reviews</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Portfolio </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="portfolio"
                  onFileSelect={(file) => {
                    updateFormState({ portfolio: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Online Ratings and Reviews</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="ratings reviews"
                  onFileSelect={(file) => {
                    updateFormState({ ratings_reviews: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ portfolio: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ ratings_reviews: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Client Testimonials </label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="client testimonials"
                  onFileSelect={(file) => {
                    updateFormState({ clientTestimonials: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Certificate or award</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <FileInput
                  label="certificates awards"
                  onFileSelect={(file) => {
                    updateFormState({ certificates_awards: file });
                  }}
                  acceptedFileTypes="image/png, .pdf, image/jpg"
                />
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ clientTestimonials: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  onChange={(e) =>
                    updateFormState({ certificates_awards: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleContinue}
              >
                Skip
              </button>
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
    </div>
  );
};

export default Page6;
