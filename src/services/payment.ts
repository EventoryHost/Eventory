import axios from "axios";

const createOrder = async (amount: string, plan: string, id: string) => {
  try {
    const orderResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/create-order/`,
      {
        amount: amount,
        currency: "INR",
        receipt: `payement of ${amount} INR for ${plan} plan by ${id}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return orderResponse.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
};

export { createOrder };
