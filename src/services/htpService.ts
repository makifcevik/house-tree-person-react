import { axiosHTPInstance } from "./axiosInstance";
import API_ROUTES from "../routes/apiRoutes";

export const classifyImage = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file); // Make sure htp-backend expects "image"

  const response = await axiosHTPInstance.post(API_ROUTES.CLASSIFY_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
