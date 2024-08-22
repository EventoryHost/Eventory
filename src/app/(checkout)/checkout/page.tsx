"use client";

import { useState } from "react";
import axios from "axios";
import Razorpay from "razorpay";
import { loadScript } from "@/utils/loadscript";
import { redirect } from "next/dist/server/api-utils";
import Script from "next/script";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post("http://localhost:4000/api/payment/create-order/", {
        amount: 500, // amount in INR
        currency: "INR",
        receipt: "order_rcptid_11",
      });

      

      const { amount, id: order_id, currency } = orderResponse.data;

      const options = {
        key: "rzp_test_2UfXSDtSQh5E3F",
        amount: parseFloat(amount) * 100,
        currency: currency,
        name: "name",
        description: "description",
        order_id: order_id,
        // handler: async function (response: any) {
        //   const data = {
        //     orderCreationId: order_id,
        //     razorpayPaymentId: response.razorpay_payment_id,
        //     razorpayOrderId: response.razorpay_order_id,
        //     razorpaySignature: response.razorpay_signature,
        //   };

        //   const result = await fetch("/api/verify", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: { "Content-Type": "application/json" },
        //   });
        //   const res = await result.json();
        //   if (res.isOk) alert("payment succeed");
        //   else {
        //     alert(res.message);
        //   }
        // },
        prefill: {
          name: "name",
          email: "email",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // var razorpay = new Razorpay(
      //   {
      //     key_id: "rzp_test_2UfXSDtSQh5E3F",
      //     key_secret:"3FTXRlrELRTXwsCIxN5YoDi3"
      //   }
      // );
      let rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <h1>Custom Payment UI</h1>
      <div>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI
        </label>
      </div>

      <>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </>

      <input
        type="text"
        placeholder="UPI ID"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
