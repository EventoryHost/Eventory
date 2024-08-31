import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import auth from "@/services/auth";

type Props = {
  mobileNo: number| string;
  notYouRedirect: () => void;
  verifyFunction: (e: React.FormEvent) => void;
  onChangeFunction: (value: string) => void;
  resendOtpRedirect: string;
  renderError: () => [boolean, string];
};

const OtpModal = (props: Props) => {
  const resendOtp = () => {
    auth.signUp(props.mobileNo.toString());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-9 backdrop-brightness-50">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-semibold">Enter OTP</h1>
        <p>Please enter OTP recieved at your mobile number {props.mobileNo}</p>
        <a
          onClick={props.notYouRedirect}
          className="mb-9 cursor-pointer font-semibold underline"
        >
          a Not you?
        </a>
        <InputOTP maxLength={6} className="" onChange={props.onChangeFunction}>
          <InputOTPGroup className="gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="rounded-md border-1 border-gray-400"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <p className="mt-5">Didn&apos;t recieve an OTP? </p>
        <a
          onClick={resendOtp}
          className="cursor-pointer font-semibold underline"
        >
          Resend OTP
        </a>
        {props.renderError()[0] && (
          <p className="text-red-500">{props.renderError()[1]}</p>
        )}
        <button
          type="button"
          className="w-[60%] rounded-xl bg-[#2E3192] px-4 py-3 text-white"
          onClick={props.verifyFunction}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
