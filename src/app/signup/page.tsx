import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
      <div className="flex flex-col items-start justify-between lg:max-w-[30%] xs:gap-7 xs:pt-4 md:min-w-[30%] bg-[#FFFFFF]">
        <div className="flex items-center gap-1 md:px-11 xs:pl-5 lg:mt-[5rem] justify-start xs:self-start">
          <button className="rounded-full p-5 w-10 h-10 flex shadow-xl items-center justify-center bg-[#2E3192] text-white">
            1
          </button>
          <div className="bg-indigo-600 h-[0.3rem] w-[4rem] rounded-xl"></div>
          <button className="rounded-full p-5 w-10 h-10 flex shadow-xl items-center justify-center bg-[#2E3192] text-white">
            2
          </button>
        </div>
        <div className="flex flex-col items-start justify-center gap-9 lg:p-8 h-[50%] md:px-11 px-9 xs:pl-5">
          <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl">
            Tell us about you
          </h1>
          <p className="md:w-[90%] text-black xs:text-sm">
            Fill out your personal details to get verified and proceed to the
            registration process.
          </p>
        </div>
        <div className="lg:w-full relative h-[10rem]">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col min-w-[70%] items-center justify-center bg-[#F7F6F9] md:p-[2.2rem] p-2">
        <div className="flex flex-col gap-7 md:p-6 p-3 xs:min-w-[90%] bg-white rounded-xl">
          <h1 className="text-3xl font-semibold">Basic Details</h1>
          <div className="flex flex-col items-center gap-5 min-w-full min-h-full">
            <div className="flex items-center md:flex-row flex-col justify-between gap-5 min-w-full">
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="flex items-center md:flex-row flex-col justify-between gap-5 min-w-full">
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="phoneNumber">Mobile No.</label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                  placeholder="Enter your mobile no."
                />
              </div>
              <div className="flex flex-col gap-4 min-w-[40%]">
                <label htmlFor="dob">Create Password</label>
                <input
                  id="dob"
                  type="text"
                  className="w-full p-5 py-3 bg-white border-2 rounded-xl outline-none"
                  placeholder="Create your password"
                />
              </div>
            </div>
            <div className="flex md:items-center md:flex-row flex-col-reverse md:mt-0 mt-9 md:px-0 justify-between w-full gap-3 self-start">
              <div className="flex md:gap-3 xs:text-sm gap-2">
                <input type="checkbox" id="tc" placeholder="t&c" />I agree with{" "}
                <span className="underline text-[#2E3192]">
                  Terms & Conditions
                </span>
              </div>
            </div>
            <p className="self-start text-gray-500 xs:text-sm xs:mt-5">
              To verify it’s you, we will send you an OTP to your mobile number.
            </p>
            <div className="self-start w-[80%] h-[1px] bg-gray-300"></div>
            <div className="flex flex-col items-start self-start">
              or continue with
              <div className="flex gap-5 mt-5">
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0013 2.7207C8.66797 2.7207 2.66797 8.70737 2.66797 16.0807C2.66797 22.7474 7.54797 28.2807 13.9213 29.2807V19.9474H10.5346V16.0807H13.9213V13.134C13.9213 9.78737 15.908 7.94737 18.9613 7.94737C20.4146 7.94737 21.9346 8.2007 21.9346 8.2007V11.494H20.2546C18.6013 11.494 18.0813 12.5207 18.0813 13.574V16.0807H21.788L21.188 19.9474H18.0813V29.2807C21.2232 28.7845 24.0842 27.1814 26.1479 24.7608C28.2115 22.3402 29.3418 19.2616 29.3346 16.0807C29.3346 8.70737 23.3346 2.7207 16.0013 2.7207Z"
                    fill="#1877F2"
                  />
                </svg>
              </div>
              <div className="flex min-w-[56vw] gap-9 md:flex-row flex-col justify-between">
                <div className="flex gap-2 mt-5 xs:text-sm">
                  already have an account ?{" "}
                  <Link href={"/"} className="text-[#2E3192] font-semibold">
                    LogIn
                  </Link>
                </div>
                <button className="bg-[#2E3192] md:min-w-[10rem] xs:px-3 xs:py-2 xs:w-fit md:px-4 md:py-3 md:w-fit rounded-xl text-white">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
