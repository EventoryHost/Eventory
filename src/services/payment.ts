import axios from "axios";
import { useRouter } from "next/navigation"; // Adjusted import

// import Razorpay from "razorpay";

const createOrder = async (amount: string, plan: string, id: string) => {
  try {
    const orderResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/create-order/`,
      {
        amount: amount,
        currency: "INR",
        receipt: `payement-${id}-${plan}-${amount}`,
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

const verifyPayment = async (
  order_id: string,
  payment_id: string,
  signature: string,
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/verify-payment/`,
      {
        order_id,
        payment_id,
        signature,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
};

const handlePayment = async (
  amount: string, // amt of plans
  plan: string, // vendor plans name
  id: string, // vendor id
  name: string, // vendor name from flow
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  handleSubmit: () => void,
) => {
  try {
    const orderResponse = await createOrder(amount, plan, id);

    const { id: order_id } = orderResponse;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY as string,
      image:
        "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/Logo.png",
      amount: parseFloat(amount) * 100,
      currency: "INR",
      name: "Eventory",
      description: `Payment of ${amount} INR for ${plan} plan by ${id}`,
      handler: async function (response: any) {
        const payment_id = response.razorpay_payment_id;
        const order_id = response.razorpay_order_id;
        const signature = response.razorpay_signature;
        const verifyResponse = await verifyPayment(
          order_id,
          payment_id,
          signature,
        );
        handleSubmit();
        setCurrentPage((prevPage) => prevPage + 1)
        console.log(verifyResponse);
      },
      order_id: order_id,
      prefill: {
        name,
      },
      theme: {
        color: "#2E3192",
      },

    };

    let rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment error:", error);
  }
};

export { createOrder, handlePayment };
