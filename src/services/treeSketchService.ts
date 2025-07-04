import IResponse from "@/models/IResponse";
import ITreeSketch from "../models/ITreeSketch";
import API_ROUTES from "../routes/apiRoutes";
import { axiosInstance } from "./axiosInstance";

export const getAllTreeSketches = async (): Promise<IResponse<ITreeSketch[]>> => {
  const response = await axiosInstance.get<IResponse<ITreeSketch[]>>(
    `${API_ROUTES.TREE_SKETCHES}`
  );
  return response.data;
};

export const getTreeSketch = async (id: number): Promise<IResponse<ITreeSketch>> => {
  const response = await axiosInstance.get<IResponse<ITreeSketch>>(
    `${API_ROUTES.TREE_SKETCHES}/${id}`
  );
  return response.data;
};

export const createTreeSketch = async (newSketch: ITreeSketch): Promise<ITreeSketch> => {
  const response = await axiosInstance.post<ITreeSketch>(
    API_ROUTES.TREE_SKETCHES,
    newSketch
  );
  return response.data;
};

export const updateTreeSketch = async (
  id: number,
  sketchData: Partial<ITreeSketch>
): Promise<ITreeSketch> => {
  const response = await axiosInstance.put<ITreeSketch>(
    `${API_ROUTES.TREE_SKETCHES}/${id}`,
    sketchData
  );
  return response.data;
};

export const deleteTreeSketch = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.TREE_SKETCHES}/${id}`);
};
