// src/services/catererService.ts
import axios from "axios";

export const saveCateringData = async (userId: string, cateringData: any) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/catering-details`,
      {
        userId,
        cateringData,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error saving catering data:", error);
    throw error;
  }
};

export const getCateringData = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/catering-details/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return {
        success: false,
        message: response.data.message || "Failed to fetch catering details.",
      };
    }
  } catch (error: any) {
    console.error("Error fetching catering data:", error);
    return {
      success: false,
      message: error.message || "Error fetching catering data.",
    };
  }
};
