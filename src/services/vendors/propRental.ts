import axios from "axios";

async function addPropRental(data: any) {
  try {
    console.log("Sending request..."); // Log the request being sent
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/add-prop-rental`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log("Response data:", response.data); // Log the response data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

export { addPropRental };
