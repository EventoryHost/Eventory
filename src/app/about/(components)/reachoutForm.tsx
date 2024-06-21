import React from 'react'

type Props = {};
const ReachoutForm = () => {
  return (
    <div className="justify-between items-center  md:py-1 sm:py-1  ">
      <div className=" flex items-center justify-center">
        <div className=" p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center md:text-left ">
            <h1 className="text-3xl font-bold mb-20">Your Dream Event Awaits – Reach Out Today!</h1>
            <p className="mt-4">
              Let's Create Unforgettable Memories Together! At{' '}
              <span className="text-indigo-600 font-bold">Eventory</span> we bring your event dreams to life with
              creativity and precision. Whether it's a wedding, corporate event, or celebration, our expert team ensures
              every moment is memorable. Contact us today to start planning your extraordinary event.
            </p>
          </div>
          <div className="flex-1 w-full md:w-[400px] sm:w-[300px]">
            <form className="flex flex-col space-y-4 ">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Write a message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReachoutForm