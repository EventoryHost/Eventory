import React from "react";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { on } from "events";

type Props = {
  link: string;
  toggleFunction: () => void;
  onChangeFunction: (value: string) => void;
  changeNoLink: string;
};

const OtpModal = (props: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-9 backdrop-brightness-50">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-semibold">Enter OTP</h1>
        <p>Please enter OTP recieved at your mobile number 9*****455</p>
        <Link href={props.link} className="mb-9 font-semibold underline">
          Not you?
        </Link>
        <InputOTP
          maxLength={6}
          className=""
          onChange={(value) => props.onChangeFunction(value)}
        >
          <InputOTPGroup className="gap-3">
            <InputOTPSlot
              index={0}
              className="rounded-md border-1 border-gray-400"
            />
            <InputOTPSlot
              index={1}
              className="rounded-md border-1 border-gray-400"
            />
            <InputOTPSlot
              index={2}
              className="rounded-md border-1 border-gray-400"
            />
            <InputOTPSlot
              index={3}
              className="rounded-md border-1 border-gray-400"
            />
            <InputOTPSlot
              index={4}
              className="rounded-md border-1 border-gray-400"
            />
            <InputOTPSlot
              index={5}
              className="rounded-md border-1 border-gray-400"
            />
          </InputOTPGroup>
        </InputOTP>
        <p className="mt-5">Didn&apos;t recieve an OTP? </p>
        <Link href={props.changeNoLink} className="font-semibold underline">
          Resend OTP
        </Link>
        <button
          className="w-[60%] rounded-xl bg-[#2E3192] px-4 py-3 text-white"
          onClick={props.toggleFunction}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
