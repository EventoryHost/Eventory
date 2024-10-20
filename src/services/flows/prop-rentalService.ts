import axios from 'axios';

// Function to save prop rental data
export const saveRentalData = async (userId: string, propRentalData: any) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/prop-rental-details`, {
      userId,
      propRentalData,
    });
    return response.data;
  } catch (error) {
    console.error('Error saving rental data:', error);
    throw error;
  }
};

// Function to get prop rental data by user ID
export const getRentalData = async (userId: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/prop-rental-details/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: response.data.message || 'Failed to fetch rental details.' };
    }
  } catch (error: any) {
    console.error('Error fetching rental data:', error);
    return { success: false, message: error.message || 'Error fetching rental data.' };
  }
};
