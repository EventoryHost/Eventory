"use client";
import React, { useState } from "react";
import { sendQuery } from "@/services/query";
import MultipleDropdown from "@/components/MultiDropdown";
import { useToast } from "@/components/hooks/use-toast";
import axios from "axios";

const serviceslist = [
  { value: "decorator", label: "Decorator" },
  { value: "caterer", label: "Caterer" },
  { value: "venueProvider", label: "Venue Provider" },
  { value: "transportation", label: "Transportation" },
  { value: "gifts", label: "Gifts" },
  { value: "invitation", label: "Invitation" },
  { value: "makeupArtist", label: "Makeup Artist" },
  { value: "photoAndVideography", label: "Photo And Videography" },
  { value: "propRentals", label: "Prop Rentals" },
];

const Form = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    services: [] as string[],
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // console.log(formData);
    try {
      // Send email using Axios
      const emailResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/email/send-email`,
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (emailResponse.status !== 200) {
        throw new Error("Failed to send email.");
      }

      // Send query using the sendQuery service
      const queryResponse = await sendQuery({ ...formData });

      if (queryResponse && queryResponse.status === 200) {
        toast({
          title: "Message Sent",
          description: "Your message has been successfully sent!",
        });

        // Clear form fields
        setFormData({
          fullName: "",
          email: "",
          city: "",
          services: [],
          message: "",
        });
      } else {
        throw new Error("Failed to send query.");
      }
    } catch (error) {
      // console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="mx-3 my-9 mt-16 flex items-center justify-center rounded-xl bg-indigo-600 py-10 text-white md:mx-auto md:w-[80%]"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dlofupmx3/image/upload/v1727966208/Memphis_Mini_Pattern_qvwylg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center px-4 py-5 md:px-0">
        <div className="flex flex-col gap-6 md:w-[50%]">
          <h1 className="text-center text-4xl font-bold">
            Let&apos;s address your concerns
          </h1>
          <p className="text-center">
            Got questions or concerns? Let us help you out! We&apos;re here to
            clear up any doubts and provide the answers you need.
          </p>
        </div>
        <form
          className="mt-7 flex min-w-[90%] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 text-black md:min-w-[50%] lg:min-w-[40%]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="fullName" className="self-start">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full rounded-lg border p-4"
            disabled={loading}
          />
          <label htmlFor="email" className="self-start">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-lg border p-4"
            disabled={loading}
          />
          <label htmlFor="city" className="self-start">
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full rounded-lg border p-4"
            disabled={loading}
          />
          <label htmlFor="services" className="self-start">
            Services
          </label>
          <div className="flex min-w-[100%] max-w-96 flex-col gap-4">
            <MultipleDropdown
              options={serviceslist}
              onSelect={(value: string[]) =>
                setFormData((prevDetails) => ({
                  ...prevDetails,
                  services: value,
                }))
              }
            />
          </div>

          <label htmlFor="message" className="self-start">
            Message
          </label>
          <textarea
            name="message"
            rows={7}
            placeholder="Type your message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full resize-none rounded-lg border p-4"
            disabled={loading}
          />

          <button
            type="submit"
            className={`w-full rounded-lg p-4 text-white ${
              loading ? "bg-gray-400" : "bg-[#2E3192]"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
