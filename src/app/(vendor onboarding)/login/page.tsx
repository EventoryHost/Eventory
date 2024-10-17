"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import auth from "@/services/auth";
import Loadingeanimation from "@/components/Loader";
import OtpModal from "@/components/ui/otp-modal";
import tajmahal from "/public/tajmahal.png";
import jwt from "jsonwebtoken";
type loginDetails = {
  mobile: string;
  otp?: string;
  session?: string;
};
import { useToast } from "@/components/hooks/use-toast";
const Login = () => {
  const { toast } = useToast();
  const [Loading, setloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginDetails, setLoginDetails] = useState<loginDetails>(
    {} as loginDetails,
  );
  const [formError, setFormError] = useState<string | null>(null);

  const refs = useRef(
    {} as Record<keyof loginDetails, HTMLInputElement | null>,
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // called when login button is clicked
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const mobileNumber = refs.current["mobile"]!.value;

    // validate mobile number
    if (mobileNumber === "") {
      setFormError(`Please fill in the mobile number`);
      return;
    } else if (mobileNumber.length !== 10 || mobileNumber[0] === "0") {
      setFormError(`Enter a valid 10 digit mobile number`);
      return;
    }

    setloading(true);
    setFormError(null);

    try {
      const res = await auth.login(mobileNumber);

      if (res && res.data && res.data.data.Session) {
        setLoginDetails((prevDetails) => ({
          ...prevDetails,
          mobile: mobileNumber, // Update the mobile in state
          session: res.data.data.Session, // Set the session
        }));

        toggleModal(); // Show the OTP modal
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: error ? "Error" : "Something went wrong.",
        description:
          String(error) ||
          "There was a problem with your request. Check internet",
      });
      setFormError("Something went wrong");
    } finally {
      setloading(false);
    }
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    const inputOtp = loginDetails.otp!;

    // validate OTP length
    if (inputOtp.length !== 6) {
      setFormError(`Please fill in the OTP correctly`);
      return;
    }

    const mobileNumber = loginDetails.mobile;
    setFormError(null);
    setloading(true);
    console.log(mobileNumber);
    try {
      const response = await auth.verifyLoginOtp(
        mobileNumber, // use mobile from loginDetails
        inputOtp,
        loginDetails.session!,
      );
      console.log(response?.data.data.user);
      if (response && response.data.data.user) {
        // Generate JWT token with an expiration time
        const token = jwt.sign(
          response.data.data.user,
          process.env.NEXT_PUBLIC_JWT_SECRET as string,
        );
        localStorage.setItem("token", token);
        console.log("Generated Token:", token);

        const decoded = jwt.decode(token) as {
          name: string;
          email: string;
          mobile: string;
          id: string;
        } | null;

        if (decoded) {
          const { id, email, mobile, name } = decoded;
          console.log("User ID:", id);
          console.log("Email:", email);
          console.log("Mobile:", mobile);
          console.log("Name:", name);
        } else {
          console.error("Failed to decode token");
        }

        console.log("OTP verified successfully");
        toast({
          title: "Logged-In Successfully",
          description: `Logged-In Successfully`,
        });
        toggleModal();
        // Router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: response?.data?.error ? "Error" : "Something went wrong.",
          description:
            String(response?.data?.error) ||
            "There was a problem with your request. Check internet",
        });
        console.error(`OTP verification failed${response?.data}`);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: error ? "Error" : "Something went wrong.",
        description:
          String(error) ||
          "There was a problem with your request. Check internet",
      });
      setFormError(`OTP verification failed ${String(error) || "Error"}`);
    } finally {
      setloading(false);
    }
  }

  const renderError = (): [boolean, string] => {
    return formError ? [true, formError] : [false, ""];
  };

  const fields: {
    id: keyof loginDetails;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    {
      id: "mobile",
      label: "Mobile No.",
      type: "number",
      placeholder: "Enter your mobile no.",
    },
  ];

  return (
    <div className="flex min-h-[88vh] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex h-[80%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-9 lg:p-8">
          <h1 className="w-full text-3xl font-bold md:text-4xl lg:text-5xl">
            Welcome back to <span className="text-[#2E3192]">Eventory</span>
          </h1>
          <p className="md:max-w-[90%] md:text-xl">
            We are happy to see you back. Please log in to access additional
            features.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <Image
            src={tajmahal}
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[2.2rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="grid grid-cols-2 gap-5">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className="col-span-2 flex min-w-[40%] flex-col gap-4 md:col-span-1"
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      placeholder={field.placeholder}
                      ref={(el) => {
                        refs.current[field.id] = el;
                      }}
                    />
                  </div>
                ))}
              </div>
              {formError && (
                <div className="pl-5 text-red-500">{formError}</div>
              )}
              <div className="mb-9 mt-5">
                <p className="xs:text-md self-start text-gray-500 xs:mt-5">
                  To verify it&apos;s you, we will send you an OTP to your
                  mobile number.
                </p>
              </div>
              <div className="h-[1px] w-[80%] self-start bg-gray-300" />
              <div className="mt-5 flex flex-col items-start self-start">
                or continue with
                <div
                  className="google mt-5 flex cursor-pointer gap-5"
                  onClick={auth.authWithGoogle}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0753 13.388H28.0013V13.3327H16.0013V18.666H23.5366C22.4373 21.7707 19.4833 23.9993 16.0013 23.9993C11.5833 23.9993 8.0013 20.4173 8.0013 15.9993C8.0013 11.5813 11.5833 7.99935 16.0013 7.99935C18.0406 7.99935 19.896 8.76868 21.3086 10.0253L25.08 6.25402C22.6986 4.03468 19.5133 2.66602 16.0013 2.66602C8.63797 2.66602 2.66797 8.63602 2.66797 15.9993C2.66797 23.3627 8.63797 29.3327 16.0013 29.3327C23.3646 29.3327 29.3346 23.3627 29.3346 15.9993C29.3346 15.1053 29.2426 14.2327 29.0753 13.388Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M4.20312 9.79335L8.58379 13.006C9.76912 10.0713 12.6398 7.99935 15.9991 7.99935C18.0385 7.99935 19.8938 8.76868 21.3065 10.0253L25.0778 6.25402C22.6965 4.03468 19.5111 2.66602 15.9991 2.66602C10.8778 2.66602 6.43646 5.55735 4.20312 9.79335Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M15.9989 29.3338C19.4429 29.3338 22.5722 28.0158 24.9382 25.8725L20.8116 22.3805C19.4279 23.4327 17.7372 24.0018 15.9989 24.0005C12.5309 24.0005 9.58624 21.7891 8.47691 18.7031L4.12891 22.0531C6.33557 26.3711 10.8169 29.3338 15.9989 29.3338Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M29.074 13.3893H28V13.334H16V18.6673H23.5353C23.0095 20.1449 22.0622 21.4361 20.8107 22.3813L20.8127 22.38L24.9393 25.872C24.6473 26.1373 29.3333 22.6673 29.3333 16.0007C29.3333 15.1067 29.2413 14.234 29.074 13.3893Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <div className="flex min-w-[56vw] flex-col justify-between gap-9 md:flex-row">
                  <div className="xs:text-md mt-5 flex gap-2 text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link
                      href={"/signup"}
                      className="font-semibold text-[#2E3192]"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 xs:text-sm md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <OtpModal
          mobileNo={loginDetails.mobile}
          notYouRedirect={toggleModal}
          verifyFunction={handleVerify}
          onChangeFunction={(value) =>
            setLoginDetails({ ...loginDetails, otp: value })
          }
          resendOtpRedirect="/login"
          renderError={renderError}
        />
      )}
      {Loading && <Loadingeanimation width="w-64" />}
    </div>
  );
};

export default Login;
