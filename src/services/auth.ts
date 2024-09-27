import axios from "axios";

import { businessDetails } from "@/app/(vendor onboarding)/businessDetails/page";
import { log } from "console";

const authWithGoogle = async () => {
  const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI!);
  const responseType = "code";
  const clientId = process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID;
  const scope = "openid email profile";

  const authUrl = `${cognitoDomain}/oauth2/authorize?identity_provider=Google&redirect_uri=${redirectUri}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;
  window.location.href = authUrl;
};

const signUp = async (mobile: String) => {
  try {
    let data = JSON.stringify({ mobile: mobile });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    return await axios(config);
  } catch (error) {
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

    return res; // expect refresh token in response - localhost ?? store for persitence
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
  name?: String,
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp-login`,
      { mobile, code, session, name },
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
    console.log(res.data.data.Session);
    return res; // expect session id in response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};

export const addBusinessDetails = async (
  id: string,
  details: businessDetails,
  // id: string,
  // details: businessDetails,
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/add-business-details`,
      {
        id,
        details,
      },
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};
export const getvendor = async (
  vendorId: string,
  email: string,
  phone: string,
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/get-vendor`,
      {
        vendorId,
        email,
        phone,
      },
    );
    //console.log(res.data);
    return res.data; // expect user in reponse
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};
const auth = {
  authWithGoogle,
  signUp,
  verifySignUpOtp,
  verifyLoginOtp,
  login,
  addBusinessDetails,
  getvendor,
};
export default auth;
