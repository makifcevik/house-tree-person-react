import ITreeSketch from "../models/ITreeSketch";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./axiosInstance";

export const getAllTreeSketches = async (): Promise<ITreeSketch[]> => {
  const response = await axiosInstance.get<ITreeSketch[]>(`${API_ROUTES.TREE_SKETCHES}`);
  return response.data;
};
