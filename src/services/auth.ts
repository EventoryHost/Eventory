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
