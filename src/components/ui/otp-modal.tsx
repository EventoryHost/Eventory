import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import auth from "@/services/auth";

type Props = {
  mobileNo: number | string;
  notYouRedirect: () => void;
  verifyFunction: (e: React.FormEvent) => void;
  onChangeFunction: (value: string) => void;
  resendOtpRedirect: string;
  renderError: () => [boolean, string];
};

const OtpModal : React.FC<Props> = ({
  mobileNo,
  notYouRedirect,
  verifyFunction,
  onChangeFunction,
  resendOtpRedirect,
  renderError
}) => {
  const resendOtp = () => {
    auth.signUp(mobileNo.toString());
  };
  const [isError, errorMessage] = renderError();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-9 backdrop-brightness-50">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-semibold">Enter OTP</h1>
        <p>Please enter OTP recieved at your mobile number {mobileNo}</p>
        <a
          onClick={notYouRedirect}
          className="mb-9 cursor-pointer font-semibold underline"
        >
          Not you?
        </a>
        <InputOTP maxLength={6} className="" onChange={onChangeFunction}>
          <InputOTPGroup className="gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className={`rounded-md ${isError ? 'border-red-500 border-2' : 'border-gray-400 border-1'}`}
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
        {renderError()[0] && (
          <p className="text-red-500">{renderError()[1]}</p>
        )}
        <button
          type="button"
          className="w-[60%] rounded-xl bg-[#2E3192] px-4 py-3 text-white"
          onClick={verifyFunction}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
