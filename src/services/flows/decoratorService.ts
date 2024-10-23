// src/services/decoratorService.ts
import axios from "axios";

export const saveDecoratorData = async (userId: string, decoratorData: any) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/decorator-details`,
      {
        userId,
        decoratorData,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error saving decorator data:", error);
    throw error;
  }
};

export const getDecoratorData = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/decorator-details/${userId}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      },
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return {
        success: false,
        message: response.data.message || "Failed to fetch decorator details.",
      };
    }
  } catch (error: any) {
    console.error("Error fetching decorator data:", error);
    return {
      success: false,
      message: error.message || "Error fetching decorator data.",
    };
  }
};
