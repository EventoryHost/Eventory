// app/gifts/page.tsx

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import preview from "./preview/page";

const Pages = [Page1, Page2, preview];

const RootPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const navigateToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    router.push(`/gifts/page${pageIndex + 1}`);
  };

  const CurrentPageComponent = Pages[currentPage];

  return (
    <div>
      <CurrentPageComponent />
      <div className="my-9 mr-[5%] flex flex-row justify-end gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 5 && (
          <button
            // onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default RootPage;
