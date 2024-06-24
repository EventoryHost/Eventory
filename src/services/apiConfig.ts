import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const api = axios.create({
  baseURL: process.env.BASE_URL, 
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

