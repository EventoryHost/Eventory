"use client";
import Link from "next/link";

const Agreement = () => {
  return (
    <div className="flex w-screen justify-center bg-[#F7F6F9] lg:h-[calc(100vh-10.2rem)]">
      <div className="w-[68.75rem] rounded-2xl bg-[#ffffff] pl-4 pr-8 pt-8">
        <div>
          <h2 className="mb-2 mt-2 font-poppins text-2xl font-bold text-[rgba(46,49,146,1)]">
            Vendor Agreement
          </h2>
          <h4 className="text-[rgba(19, 47, 65, 1)] mb-4 font-poppins font-bold">
            Your Agreement
          </h4>
        </div>
        <div className="w-[66.06rem] lg:h-[calc(100vh-26.2rem)]">
          <div className="scrollbar-rounded-xl absolute w-[66.06rem] overflow-y-scroll pl-12 pr-6 text-left text-gray-500 lg:h-[calc(100vh-26.2rem)]"></div>
        </div>

        <div className="flex items-center justify-start px-12 py-4 text-left">
          <div>
            <input id={"checker"} type="checkbox" className="peer hidden" />
            <label
              htmlFor="checker"
              className="relative mr-3 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border bg-[#2E3192] p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full fill-white"
                viewBox="0 0 520 520"
              >
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" />
              </svg>
            </label>
          </div>
          <h2>
            i agree with{" "}
            <Link
              className="font-poppins text-[rgba(46,49,146,1)] underline"
              href="/"
            >
              Terms & Conditions
            </Link>
            <span className="text-red-600">*</span>
          </h2>
        </div>
        <div className="relative bottom-0 flex w-[66.06rem] items-end justify-end gap-3 p-4">
          <button className="flex h-[48px] w-[164px] items-center justify-center rounded-2xl border-1 border-[rgba(46,49,146,1)] p-4 font-poppins text-[rgba(46,49,146,1)]">
            <h2>Cancel</h2>
          </button>
          <button className="flex h-[48px] w-[164px] items-center justify-center rounded-2xl bg-[rgba(46,49,146,1)] p-4 font-poppins text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
