import IPersonSketch from "../models/IPersonSketch";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./axiosInstance";

export const getAllPersonSketches = async (): Promise<IPersonSketch[]> => {
  const response = await axiosInstance.get<IPersonSketch[]>(
    `${API_ROUTES.PERSON_SKETCHES}`
  );
  return response.data;
};
