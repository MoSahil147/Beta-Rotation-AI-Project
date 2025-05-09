import axios from "axios";

// This function sends the analysis request to the Flask backend
export const analyzeBetaRotation = async (payload) => {
  try {
    const response = await axios.post("http://localhost:5000/analyze", payload);
    return response.data;
  } catch (error) {
    console.error("API error during analysis:", error);
    throw error;
  }
};