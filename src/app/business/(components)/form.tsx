"use client";
import React, { useState, useEffect, useRef } from "react";
import { sendQuery } from "@/services/query";

type Props = {};

const Form = (props: Props) => {
  // State variables to store form data
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    services: [] as string[],
    message: "",
  });

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    Decorator: false,
    Caterer: false,
    VenueProvider: false,
    Transportation: false,
    Decorators: false,
    Gifts: false,
    Invitation: false,
    MakeupArtist: false,
    "Photo-And-Videography": false,
    PropRentals: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle input change for text fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox state change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [id]: checked,
    }));
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update formData.service when checkedItems change
  useEffect(() => {
    const selectedCheckboxes = Object.entries(checkedItems)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    setFormData((prevData) => ({
      ...prevData,
      services: selectedCheckboxes,
    }));
  }, [checkedItems]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Start loading

    try {
      // Call both APIs within the same try block
      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/email/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        },
      );

      if (!emailResponse.ok) {
        throw new Error("Failed to send email.");
      }

      const queryResponse = await sendQuery({ ...formData });

      if (queryResponse && queryResponse.status === 200) {
        alert("Your message has been sent successfully!");
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
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message.");
    } finally {
      setLoading(false); // Stop loading
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
            disabled={loading} // Disable input during loading
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

          <div
            ref={dropdownRef}
            className="relative w-full max-w-full rounded-lg bg-white"
          >
            <button
              type="button"
              id="dropdownToggle"
              onClick={toggleDropdown}
              className="flex h-max w-full max-w-full justify-between overflow-hidden rounded-lg border bg-white p-4 text-left"
              disabled={loading} // Disable during loading
            >
              {formData.services.length > 0 ? (
                formData.services.length > 3 ? (
                  <div className="">
                    {`${formData.services.slice(0, 3).join(", ")}...`}
                  </div>
                ) : (
                  <div className="">{formData.services.join(", ")}</div>
                )
              ) : (
                "Select Service"
              )}
            </button>

            {isOpen && (
              <ul className="absolute z-50 mt-2 max-h-96 w-full overflow-auto rounded-lg bg-white p-4 shadow-lg">
                {Object.entries(checkedItems).map(([key, isChecked]) => (
                  <li
                    key={key}
                    className="cursor-pointer rounded px-4 py-2.5 text-sm text-black hover:bg-blue-50"
                    onClick={() =>
                      setCheckedItems((prevItems) => ({
                        ...prevItems,
                        [key]: !prevItems[key],
                      }))
                    }
                  >
                    <div className="flex items-center">
                      <input
                        id={key}
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="peer hidden"
                        disabled={loading} // Disable during loading
                      />
                      <label
                        htmlFor={key}
                        className="relative mr-3 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded border bg-[#2E3192] p-1 before:absolute before:block before:h-full before:w-full before:bg-white peer-checked:before:hidden"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full fill-white"
                          viewBox="0 0 520 520"
                        >
                          <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" />
                        </svg>
                      </label>
                      {key === "Decorator"
                        ? "Decorator"
                        : key === "Caterer"
                          ? "Caterer"
                          : key === "VenueProvider"
                            ? "Venue Provider"
                            : key === "Transportation"
                              ? "Transportation"
                              : key === "Decorators"
                                ? "Decorators"
                                : key === "Gifts"
                                  ? "Gifts"
                                  : key === "Invitation"
                                    ? "Invitation"
                                    : key === "MakeupArtist"
                                      ? "Makeup Artist"
                                      : key === "Photo-And-Videography"
                                        ? "Photo And Videography"
                                        : key === "PropRentals"
                                          ? "Prop Rentals"
                                          : ""}
                    </div>
                  </li>
                ))}
              </ul>
            )}
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
            disabled={loading} // Disable during loading
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
