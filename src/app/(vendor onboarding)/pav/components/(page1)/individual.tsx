import React from "react";
import FileInput from "@/components/fileInput"; // Import the reusable FileInput component

type Page1Props = {
  fullname: string;
  setFullname: (fullname: string) => void;
  portfolio: string | File;
  setPortfolio: (portfolio: string | File) => void;
  clientTestimonials: string | File;
  setClientTestimonials: (clientTestimonials: string | File) => void;
  handleContinue: () => void;
};

const Individual = ({
  fullname,
  setFullname,
  portfolio,
  setPortfolio,
  clientTestimonials,
  setClientTestimonials,
  handleContinue,
}: Page1Props) => {
  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    setState: (value: string) => void,
  ) => {
    setState(event.target.value);
  };

  return (
    <>
      <div className="flex min-w-[100%] items-center justify-between gap-9">
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-4">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              className="w-fit rounded-xl border-2 bg-white p-5 py-3 outline-none"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="portfolio">Portfolio of Past Work</label>
            <FileInput
              label="Portfolio"
              onFileSelect={setPortfolio}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={40}
              rows={1}
              placeholder="enter url"
              className="mt-5 w-fit resize-none rounded-xl border-2 border-gray-300 p-3"
              value={typeof portfolio === "string" ? portfolio : ""}
              onChange={(e) =>
                handleTextChange(e, setPortfolio as (value: string) => void)
              }
            ></textarea>
          </div>
        </div>
        <div className="flex h-[100%] w-[50%] flex-col items-start justify-between gap-9">
          <div className="flex w-[100%] flex-col gap-1">
            <label htmlFor="clientTestimonials">Client Testimonials</label>
            <FileInput
              label="Client Testimonials"
              onFileSelect={setClientTestimonials}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
            <p className="text-md mt-5">or Provide Via</p>
            <textarea
              cols={30}
              rows={5}
              placeholder="enter url"
              className="mt-5 resize-none rounded-xl border-2 border-gray-300 p-3"
              value={
                typeof clientTestimonials === "string" ? clientTestimonials : ""
              }
              onChange={(e) =>
                handleTextChange(
                  e,
                  setClientTestimonials as (value: string) => void,
                )
              }
            ></textarea>
          </div>
        </div>
      </div>
      <button
        className="flex w-fit items-center justify-center self-end rounded-xl bg-[#2E3192] p-5 text-white xs:text-[4vw] md:text-[2vw] lg:w-[10vw] lg:text-[1vw]"
        onClick={handleContinue}
      >
        Continue
      </button>
    </>
  );
};

export default Individual;
