import { axiosHTPClassifierInstance } from "./axiosInstance";
import API_ROUTES from "../routes/apiRoutes";

export const classifyImage = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file); // Make sure HTP Classifier expects "image"

  const response = await axiosHTPClassifierInstance.post(
    API_ROUTES.CLASSIFY_IMAGE,
    formData
  );

  return response.data;
};
