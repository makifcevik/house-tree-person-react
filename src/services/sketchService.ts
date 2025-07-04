import IResponse from "@/models/IResponse";
import ISketch from "../models/ISketch";
import API_ROUTES from "../routes/apiRoutes";
import { axiosInstance } from "./axiosInstance";

export const getAllSketches = async (): Promise<IResponse<ISketch[]>> => {
  const response = await axiosInstance.get<IResponse<ISketch[]>>(
    `${API_ROUTES.SKETCHES}`
  );
  return response.data;
};

export const getSketch = async (id: number): Promise<IResponse<ISketch>> => {
  const response = await axiosInstance.get<IResponse<ISketch>>(
    `${API_ROUTES.SKETCHES}/${id}`
  );
  return response.data;
};

export const createSketch = async (newSketch: ISketch): Promise<ISketch> => {
  const response = await axiosInstance.post<ISketch>(API_ROUTES.SKETCHES, newSketch);
  return response.data;
};

export const updateSketch = async (
  id: number,
  sketchData: Partial<ISketch>
): Promise<ISketch> => {
  const response = await axiosInstance.put<ISketch>(
    `${API_ROUTES.SKETCHES}/${id}`,
    sketchData
  );
  return response.data;
};

export const deleteSketch = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.SKETCHES}/${id}`);
};
