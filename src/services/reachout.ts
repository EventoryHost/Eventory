import axios from "axios";

async function sendReachout(data: any) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/about-email/send-about-email`, 
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

export { sendReachout };
