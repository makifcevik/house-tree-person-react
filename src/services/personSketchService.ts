import IPersonSketch from "../models/IPersonSketch";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./axiosInstance";

export const getAllPersonSketches = async (): Promise<IPersonSketch[]> => {
  const response = await axiosInstance.get<IPersonSketch[]>(
    `${API_ROUTES.PERSON_SKETCHES}`
  );
  return response.data;
};

export const getPersonSketch = async (id: number): Promise<IPersonSketch> => {
  const response = await axiosInstance.get<IPersonSketch>(
    `${API_ROUTES.PERSON_SKETCHES}/${id}`
  );
  return response.data;
};

export const createPersonSketch = async (
  newSketch: IPersonSketch
): Promise<IPersonSketch> => {
  const response = await axiosInstance.post<IPersonSketch>(
    API_ROUTES.PERSON_SKETCHES,
    newSketch
  );
  return response.data;
};

export const updatePersonSketch = async (
  id: number,
  sketchData: Partial<IPersonSketch>
): Promise<IPersonSketch> => {
  const response = await axiosInstance.put<IPersonSketch>(
    `${API_ROUTES.PERSON_SKETCHES}/${id}`,
    sketchData
  );
  return response.data;
};

export const deletePersonSketch = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.PERSON_SKETCHES}/${id}`);
};
