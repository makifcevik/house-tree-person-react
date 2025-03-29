import IHouseSketch from "../models/IHouseSketch";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./AxiosInstance";

export const getAllHouseSketches = async (): Promise<IHouseSketch[]> => {
  const response = await axiosInstance.get<IHouseSketch[]>(
    `${API_ROUTES.HOUSE_SKETCHES}`
  );
  return response.data;
};
