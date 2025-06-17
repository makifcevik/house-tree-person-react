import IHouseSketch from "../models/IHouseSketch";
import API_ROUTES from "../routes/apiRoutes";
import { axiosInstance } from "./axiosInstance";

export const getAllHouseSketches = async (): Promise<IHouseSketch[]> => {
  const response = await axiosInstance.get<IHouseSketch[]>(
    `${API_ROUTES.HOUSE_SKETCHES}`
  );
  return response.data;
};

export const getHouseSketch = async (id: number): Promise<IHouseSketch> => {
  const response = await axiosInstance.get<IHouseSketch>(
    `${API_ROUTES.HOUSE_SKETCHES}/${id}`
  );
  return response.data;
};

export const createHouseSketch = async (
  newSketch: IHouseSketch
): Promise<IHouseSketch> => {
  const response = await axiosInstance.post<IHouseSketch>(
    API_ROUTES.HOUSE_SKETCHES,
    newSketch
  );
  return response.data;
};

export const updateHouseSketch = async (
  id: number,
  sketchData: Partial<IHouseSketch>
): Promise<IHouseSketch> => {
  const response = await axiosInstance.put<IHouseSketch>(
    `${API_ROUTES.HOUSE_SKETCHES}/${id}`,
    sketchData
  );
  return response.data;
};

export const deleteHouseSketch = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.HOUSE_SKETCHES}/${id}`);
};
