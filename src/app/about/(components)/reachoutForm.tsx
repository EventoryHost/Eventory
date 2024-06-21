import React from "react";

type Props = {};
const ReachoutForm = () => {
  return (
    <div className="items-center justify-between sm:py-1 md:py-1">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8 rounded-lg p-8 md:flex-row md:items-start md:space-x-8 md:space-y-0">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-20 text-3xl font-bold">
              Your Dream Event Awaits – Reach Out Today!
            </h1>
            <p className="mt-4">
              Let&apos;s Create Unforgettable Memories Together! At{" "}
              <span className="font-bold text-indigo-600">Eventory</span> we
              bring your event dreams to life with creativity and precision.
              Whether it&aposs; a wedding, corporate event, or celebration, our
              expert team ensures every moment is memorable. Contact us today to
              start planning your extraordinary event.
            </p>
          </div>
          <div className="w-full flex-1 sm:w-[300px] md:w-[400px]">
            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Mobile number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Write a message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachoutForm;
