// src/services/decoratorService.ts
import axios from 'axios';

export const savePavData = async (userId: string, pavData: any) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/pav-details`, {
      userId,
      pavData,
    });
    return response.data;
  } catch (error) {
    console.error('Error saving pav data:', error);
    throw error;
  }
};

export const getPavData = async (userId: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/pav-details/${userId}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: response.data.message || 'Failed to fetch pav details.' };
    }
  } catch (error: any) {
    console.error('Error fetching pav data:', error);
    return { success: false, message: error.message || 'Error fetching pav data.' };
  }
};
