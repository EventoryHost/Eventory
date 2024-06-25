import axios from "axios";
import dotenv from "dotenv"

dotenv.config()

export const authWithGoogle = async () => {
  try {
    await axios.get(`${process.env.BASE_URL}/auth/google-auth`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};
