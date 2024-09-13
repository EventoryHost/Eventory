"use client";
import { sendReachout } from "@/services/reachout";
import React, { useState } from "react";

const ReachoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await sendReachout(formData);
      if (response?.status === 200) {
        setSuccess(true);
        setFormData({
          fullName: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Failed to send email.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 items-center justify-between sm:mx-10 sm:gap-0 sm:py-10 md:gap-20 md:py-10 lg:mx-16 lg:gap-40 lg:py-10">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8 rounded-lg p-8 md:flex-row md:items-start md:space-x-8 md:space-y-0">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-0 text-2xl font-bold md:mb-20 md:text-3xl">
              Your Dream Event Awaits – Reach Out Today!
            </h1>
            <p className="mt-4 text-left text-xs md:text-lg">
              Let's Create Unforgettable Memories Together! At{" "}
              <span className="font-bold text-indigo-600">Eventory</span>, we
              bring your event dreams to life with creativity and precision.
              Whether it's a wedding, corporate event, or celebration, our
              expert team ensures every moment is memorable. Contact us today to
              start planning your extraordinary event.
            </p>
          </div>
          <div className="w-full flex-1 justify-center align-middle sm:w-[300px] md:w-[400px] md:translate-y-0">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="md:text-md block text-gray-700 xs:text-sm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="md:text-md block text-gray-700 xs:text-sm"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="md:text-md block text-gray-700 xs:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Write a message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="md:text-md rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 xs:text-sm"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              {success && <p className="text-green-500">Email sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachoutForm;
