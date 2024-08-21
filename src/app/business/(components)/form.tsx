"use client"
import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:4000/api/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        // Clear form fields
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="my-7 flex w-full flex-col items-center justify-center">
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
          onSubmit={handleSubmit}
          className="mt-7 flex min-w-[90%] flex-col items-center justify-center gap-5 rounded-xl bg-[#D5D6E9] px-4 py-5 md:min-w-[50%] lg:min-w-[35%]"
        >
          <label htmlFor="fullName" className="self-start">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full rounded-lg p-4"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email" className="self-start">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message" className="self-start">
            Message
          </label>
          <textarea
            id="message"
            rows={7}
            className="w-full rounded-lg p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#2E3192] p-4 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
