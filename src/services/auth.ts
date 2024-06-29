import axios from "axios";
import { log } from "console";

const authWithGoogle = async () => {
  console.log("in");
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-auth`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

const signUp = async (mobile: String) => {
  try {
    let data = JSON.stringify({ "mobile": mobile });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    const res = await axios(config);
    console.log(res);
    // console.log(JSON.stringify(res.data));
    return res;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

const verifySignUpOtp = async (mobile: String, otp: String) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp-signup`,
      { mobile, otp },
    );

    return res;  // expect refresh token in response - localhost ?? store for persitence
    // cors issue - need to set up cors in server 3000 into 4000
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

const verifyLoginOtp = async (
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

const login = async (mobile: String) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
      {
        mobile,
      },
    );
    return res;   // expect session id in response 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

const auth = { authWithGoogle, signUp, verifySignUpOtp, verifyLoginOtp, login };
export default auth;
