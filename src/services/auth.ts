import axios from "axios";
import { env } from "process";

export const authWithGoogle = async () => {
  try {
    console.log(env.BASE_URL);
    await axios.get(`http://localhost:4000/auth/google-auth`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error(error.message);
    }
  }
};
