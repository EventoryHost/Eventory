import React from 'react'


type Props = {};
const Faq = (props: Props) => {
  return (
    <>

      <div className="justify-between items-center lg:py-10 md:py-10 sm:py-10 lg:mx-16 sm:mx-10 sm:gap-0 lg:gap-40 md:gap-20 mt-16">
        <div className="justify-center">
          <h2 className="font-semibold text-4xl text-[rgba(0,0,0,1)] lg:mb-14 sm:mb-10">Frequently askesd questions</h2>
        </div>
        <div className="">
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-md font-Inter ">
            What types of events do you specialize in?
            </div>
            <div className="collapse-content text-sm font-Inter font-extralight">
              <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-md font-Inter ">
            What is your process for planning and executing an event?
            </div>
            <div className="collapse-content text-sm font-Inter font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-md font-Inter ">
            Do you have established relationships with reliable vendors?
            </div>
            <div className="collapse-content text-sm font-Inter font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-md font-Inter ">
            Can you help us find and coordinate with vendors such as caterers, florists, and entertainers?
            </div>
            <div className="collapse-content text-sm font-Inter font-extralight">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-1 border-[rgba(209,213,219,1)]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-md font-Inter ">
            How often will we receive updates during the planning process?
            </div>
            <div className="collapse-content text-sm font-Inter font-extralight">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Faq;