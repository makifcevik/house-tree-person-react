import IUser from "../models/IUser";
import ROUTES from "../routes/routes";
import axiosInstance from "./AxiosInstance";

export const getAllUsers = async (): Promise<IUser[]> => {
  const response = await axiosInstance.get<IUser[]>(`${ROUTES.USERS}`);
  return response.data;
};
