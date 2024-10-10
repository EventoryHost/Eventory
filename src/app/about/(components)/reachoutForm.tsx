import React from "react";
import "../../globals.css";

const ReachoutForm = () => {
  return (
    <div
      className="mx-3 my-9 mt-16 flex items-center justify-center rounded-xl bg-indigo-600 py-10 md:mx-auto md:w-[80%]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dlofupmx3/image/upload/v1727966208/Memphis_Mini_Pattern_qvwylg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="w-full rounded-lg p-3 md:max-w-xl md:p-8">
        <h1 className="mb-4 text-center text-[9vw] font-semibold text-white md:text-4xl">
          Your Dream Event Awaits – Reach Out Today!
        </h1>
        <p className="mb-8 text-center text-sm text-white md:text-lg">
          Let&apos;s Create Unforgettable Memories Together! At{" "}
          <span className="font-bold">Eventory</span>. Whether it&apos;s a
          wedding, corporate event, or celebration, our expert team ensures
          every moment is memorable. Contact us today to start planning your
          extraordinary event.
        </p>

        <form className="w-[100%] max-w-[100%] rounded-lg bg-white p-3 shadow-lg md:max-w-xl md:p-8">
          <div>
            <label
              htmlFor="name"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Mobile number
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Write a message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 p-3 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachoutForm;
