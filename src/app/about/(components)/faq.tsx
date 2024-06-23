import React from "react";
import "../../globals.css"
type Props = {};
const Faq = (props: Props) => {
  return (
    <>
      <div className="mt-16 items-center justify-between sm:mx-10 sm:gap-0 sm:py-10 md:gap-20 md:py-10 lg:mx-16 lg:gap-40 lg:py-10">
        <div className="justify-center">
          <h2 className=" text-2xl  md:text-4xl mx-5 font-semibold text-[rgba(0,0,0,1)] sm:mb-10 lg:mb-14">
            Frequently askesd questions
          </h2>
        </div>
        <div className="">
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="md:text-md text-sm font-Inter collapse-title">
              What types of events do you specialize in?
            </div>
            <div className="font-Inter collapse-content text-sm font-extralight">
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="md:text-md text-sm font-Inter collapse-title">
              What is your process for planning and executing an event?
            </div>
            <div className="font-Inter collapse-content text-sm font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="md:text-md text-sm text-smfont-Inter collapse-title">
              Do you have established relationships with reliable vendors?
            </div>
            <div className="font-Inter collapse-content text-sm font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="md:text-md text-sm font-Inter collapse-title">
              Can you help us find and coordinate with vendors such as caterers,
              florists, and entertainers?
            </div>
            <div className="font-Inter collapse-content text-sm font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="md:text-md text-sm font-Inter collapse-title">
              How often will we receive updates during the planning process?
            </div>
            <div className="font-Inter collapse-content text-sm font-extralight">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
