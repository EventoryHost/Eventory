import axios from "axios";

// Function to save venue data
export const saveVenueData = async (userId: string, venueData: any) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/venue-provider-details`,
      {
        userId,
        venueData,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error saving venue data:", error);
    throw error;
  }
};

// Function to get venue data
export const getVenueData = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/venue-provider-details/${userId}`,
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
        message: response.data.message || "Failed to fetch venue details.",
      };
    }
  } catch (error: any) {
    console.error("Error fetching venue data:", error);
    return {
      success: false,
      message: error.message || "Error fetching venue data.",
    };
  }
};
