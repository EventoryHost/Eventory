"use client";
import Loadingeanimation from "@/components/Loader";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import jwt from "jsonwebtoken";
import auth from "@/services/auth";
import OtpModal from "@/components/ui/otp-modal";
import tajmahal from "/public/tajmahal.png";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "@/components/hooks/use-toast";
const fields: {
  id: keyof basicDetails;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: "mobile",
    label: "Mobile No.",
    type: "number",
    placeholder: "Enter your mobile no.",
  },
];

type basicDetails = {
  name: string;
  mobile: number;
  otp: number;
};

const SignUp = () => {
  const { toast: toast2 } = useToast();
  const [loading, setloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [basicDetails, setBasicDetails] = useState<basicDetails>(
    {} as basicDetails,
  );
  const [session, setSession] = useState<string>("");
  const [formError, setFormError] = useState<string | null>(null);
  const refs = useRef(
    {} as Record<keyof basicDetails, HTMLInputElement | null>,
  );
  const router = useRouter();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const mobileNumber = refs.current["mobile"]!.value;

    const errorMessage: { [key: string]: string } = {
      name: "name",
      mobile: "mobile number",
    };

    // Check if any required field is empty
    for (const key in refs.current) {
      if (refs.current[key as keyof basicDetails]?.value.trim() === "") {
        setFormError(`Please fill in your ${errorMessage[key]}`);
        return;
      }
    }
    // validate mobile number
    if (mobileNumber.length !== 10 || mobileNumber[0] === "0") {
      setFormError(`Enter a valid 10 digit mobile number`);
      return;
    }
    setloading(true);
    setFormError(null);
    try {
      // Store the form data
      const newDetails: basicDetails = {
        name: refs.current.name!.value,
        mobile: Number(mobileNumber),
        otp: 0,
      };
      setBasicDetails(newDetails);

      const res = await auth.signUp(newDetails.mobile.toString());
      if (res) {
        setSession(res.data.data.Session);
        toggleModal();
      }
    } catch (error) {
      setFormError(String(error) || "Something goes wrong");
      console.log(error);
      setloading(false);
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputOtp = basicDetails.otp.toString();

    // Check if OTP is 6 digits long
    if (inputOtp.length !== 6) {
      setFormError(`Please fill in the OTP correctly`);
      toast.error("OTP must be 6 digits");
      return;
    }

    setFormError(null); // Reset error message
    setloading(true);
    try {
      const response = await auth.verifyLoginOtp(
        basicDetails.mobile!.toString(),
        inputOtp,
        session,
        basicDetails!.name,
      );

      if (response) {
        // Generate JWT token with an expiration time
        const token = jwt.sign(
          response.data.data.userData,
          process.env.NEXT_PUBLIC_JWT_SECRET!,
        );
        // Store token in local storage
        localStorage.setItem("token", token);
        console.log("OTP verification successful");
        toast.success("OTP verification successful");
        toast2({
          title: "Redirecting",
          description: `Signup Successfull Redirecting To BusinessDetails`,
        });
        router.push("/businessDetails");
      } else {
        console.error("OTP verification failed or response is invalid");
        toast.error("Incorrect OTP, please try again");
      }
    } catch (error) {
      console.error("Failed to verify OTP", error);
      setFormError("Failed to verify OTP. Please try again.");
    } finally {
      setloading(false);
      toast.error("Failed to verify OTP. Please try again.");
    }
  };

  const renderError = (): [boolean, string] => {
    return formError ? [true, formError] : [false, ""];
  };
  const notYouRedirect = () => {
    setloading(false);
    toggleModal();
  };

  return (
    <div className="flex max-h-[100vh] w-full flex-col overflow-hidden lg:h-[calc(100vh-4.2rem)] lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:h-[91vh] md:min-w-[35%] lg:max-w-[30%]">
        <div className="flex h-[90%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Vendor Sign Up
          </h1>
          <p className="text-sm text-gray-700 md:text-lg">
            Fill out your personal details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[14rem] lg:w-full">
          <Image
            src={tajmahal}
            alt="Image of Indian monuments"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center bg-[#F7F6F9] p-2 md:max-h-[100vh] md:p-[2.2rem]">
        <div className="flex flex-col rounded-xl bg-white p-5 xs:min-w-[90%] md:p-6">
          {loading ? (
            <div className="my-24">
              <Loadingeanimation width="w-56 " />
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-semibold">Basic Details</h1>
              <div className="flex min-h-full min-w-full flex-col items-center gap-3">
                <form onSubmit={handleSignUp}>
                  <div
                    className={`mt-9 flex flex-col items-center justify-between xs:gap-7 md:flex-row`}
                  >
                    {fields.map((field) => (
                      <div
                        key={field.id}
                        className="col-span-2 flex min-w-[45%] flex-col gap-2 md:col-span-1"
                      >
                        <label htmlFor={field.id}>
                          {field.label}
                          <span className="text-red-600">*</span>
                        </label>
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
                  {formError && !isModalOpen && (
                    <div className="pl-4 text-red-500">{formError}321</div>
                  )}
                  <div className="mt-5 flex w-full flex-col-reverse justify-between gap-3 self-start p-2 md:mt-0 md:flex-row md:items-center md:px-0">
                    <div className="xs:text-md mt-5 flex gap-1">
                      <h2>
                        By continueing. You agree with{" "}
                        <span className="text-[#2E3192] underline">
                          Privacy Policy
                        </span>
                      </h2>
                    </div>
                  </div>
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
                        Already have an account?{" "}
                        <Link
                          href={"/login"}
                          className="font-semibold text-[#2E3192]"
                        >
                          Log In
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <OtpModal
          mobileNo={basicDetails.mobile}
          notYouRedirect={notYouRedirect}
          verifyFunction={handleVerify}
          onChangeFunction={(value) =>
            setBasicDetails({ ...basicDetails, otp: Number(value) })
          }
          resendOtpRedirect="/signup"
          renderError={renderError}
        />
      )}
    </div>
  );
};

export default SignUp;
