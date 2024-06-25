import React from "react";
import "../../globals.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {};
const Faq = (props: Props) => {
  return (
    <>
      <div className="mt-16 items-center justify-between sm:mx-10 sm:gap-0 sm:py-10 md:gap-20 md:py-10 lg:mx-16 lg:gap-40 lg:py-10">
        <div className="justify-center">
          <h2 className=" text-center md:text-start mx-5 text-2xl font-semibold text-[rgba(0,0,0,1)] sm:mb-10 md:text-4xl lg:mb-14">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-8 grid xs:max-w-[250px] sm:max-w-xl md:max-w-full divide-y divide-[rgba(209,213,219,1)]">
          <div className="py-5">
            <details className="group">
              <summary className=" flex cursor-pointer list-none items-center justify-between font-medium">
                <span className=" font-inter"> What types of events do you specialize in?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" font-light text-xs md:text-sm group-open:animate-fadeIn mt-3 text-neutral-600">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className=" flex cursor-pointer list-none items-center justify-between font-medium">
                <span className=" font-inter">What is your process for planning and executing an event?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" font-light text-xs md:text-sm group-open:animate-fadeIn mt-3 text-neutral-600">
                 coming soon...
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className=" flex cursor-pointer list-none items-center justify-between font-medium">
                <span className=" font-inter">Do you have established relationships with reliable vendors?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" font-light text-xs md:text-sm group-open:animate-fadeIn mt-3 text-neutral-600">
                 coming soon...
               
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className=" flex cursor-pointer list-none items-center justify-between font-medium">
                <span className=" font-inter"> Can you help us find and coordinate with vendors such as caterers, florists, and entertainers?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" font-light text-xs md:text-sm group-open:animate-fadeIn mt-3 text-neutral-600">coming soon...
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className=" flex cursor-pointer list-none items-center justify-between font-medium">
                <span className=" font-inter"> How often will we receive updates during the planning process?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className=" font-light text-xs md:text-sm group-open:animate-fadeIn mt-3 text-neutral-600">coming soon...
              </p>
            </details>
          </div>

        </div>
      </div>
    </>
  );
};

export default Faq;
