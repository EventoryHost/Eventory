import React from "react";
import "../../globals.css";

const ReachoutForm = () => {
  return (
    <div
      className="mt-16 flex items-center bg-indigo-600  justify-center py-10 md:w-[80%] mx-3 rounded-xl md:mx-auto my-9"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dlofupmx3/image/upload/v1727966208/Memphis_Mini_Pattern_qvwylg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="w-full md:max-w-xl rounded-lg md:p-8 p-3">
        <h1 className="text-center md:text-4xl text-[9vw] font-semibold text-white mb-4">
          Your Dream Event Awaits – Reach Out Today!
        </h1>
        <p className="text-center md:text-lg text-sm text-white mb-8">
          Let&apos;s Create Unforgettable Memories Together! At{" "}
          <span className="font-bold ">Eventory</span>. Whether
          it&apos;s a wedding, corporate event, or celebration, our expert team
          ensures every moment is memorable. Contact us today to start planning
          your extraordinary event.
        </p>

        <form className="md:max-w-xl w-[100%] max-w-[100%] rounded-lg md:p-8 p-3 shadow-lg bg-white">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-3">
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-3">
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-3">
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
