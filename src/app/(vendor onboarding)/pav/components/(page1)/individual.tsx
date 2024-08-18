import React from "react";
import { Upload } from "lucide-react";

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
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: (value: string | File) => void,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setState(file);
    }
  };

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
            <input
              id="portfolio"
              type="file"
              className="hidden"
              onChange={(e) => handleFileUpload(e, setPortfolio)}
            />
            <button
              className="mt-5 flex w-fit items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white"
              onClick={() => document.getElementById("portfolio")?.click()}
            >
              <Upload />
              Upload
            </button>
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
            <input
              id="clientTestimonials"
              type="file"
              className="hidden"
              onChange={(e) => handleFileUpload(e, setClientTestimonials)}
            />
            <button
              className="mt-5 flex w-fit items-center justify-center gap-5 rounded-xl border-2 border-dashed border-gray-400 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white"
              onClick={() =>
                document.getElementById("clientTestimonials")?.click()
              }
            >
              <Upload />
              Upload
            </button>
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
