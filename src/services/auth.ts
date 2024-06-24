import axios from "axios";
import { api } from "./apiConfig";

export const authWithGoogle = async () => {
  try {
    await api.get("/auth/google-auth");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};
