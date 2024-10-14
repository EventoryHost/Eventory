"use client";
import React, { useState } from "react";
import "../../globals.css";
import { sendReachoutQuery } from "@/services/reachoutquary"; // Use your service
import { useToast } from "@/components/hooks/use-toast";

const ReachoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileno: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!formData.fullName || !formData.mobileno || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "All fields are required.",
      });
      return;
    }

    setLoading(true);

    try {
      // Call the service instead of axios directly
      const response = await sendReachoutQuery(formData);

      // Assuming your service returns a Promise with the response in this structure
      if (response && typeof response === "object" && "status" in response) {
        if (response.status === 200) {
          toast({
            title: "Success",
            description: "Your message has been sent successfully!",
          });

          // Clear the form after successful submission
          setFormData({
            fullName: "",
            mobileno: "",
            message: "",
          });
        } else {
          throw new Error("Failed to send the message");
        }
      } else {
        throw new Error("Invalid response from the server");
      }
    } catch (error: any) {
      // console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.toString() || "Failed to send the message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

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

        <form
          className="w-[100%] max-w-[100%] rounded-lg bg-white p-3 shadow-lg md:max-w-xl md:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="fullName"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Enter your full name"
              disabled={loading}
            />
          </div>
          <div>
            <label
              htmlFor="mobileno"
              className="mt-3 block text-sm font-medium text-gray-700"
            >
              Mobile number
            </label>
            <input
              type="text"
              id="mobileno"
              value={formData.mobileno}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Enter your phone number"
              disabled={loading}
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
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-md border border-gray-200 p-3 text-sm"
              placeholder="Write a message"
              disabled={loading}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full rounded-md p-3 text-sm font-medium text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachoutForm;
