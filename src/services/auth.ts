import axios from "axios";

export const authWithGoogle = async () => {
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-auth`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

export const signUp = async (mobile: String) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      {
        mobile,
      },
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

export const verifySignUpOtp = async (mobile: String, otp: String) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp-signup`,
      { mobile, otp },
    );

    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

export const verifyLoginOtp = async (
  mobile: String,
  code: String,
  session: String,
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp-login`,
      { mobile, code, session },
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

export const login = async (mobile: String) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      {
        mobile,
      },
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};
