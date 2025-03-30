import ISketch from "../models/ISketch";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./axiosInstance";

export const getAllSketches = async (): Promise<ISketch[]> => {
  const response = await axiosInstance.get<ISketch[]>(`${API_ROUTES.SKETCHES}`);
  return response.data;
};
