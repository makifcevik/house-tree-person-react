import IUser from "../models/IUser";
import API_ROUTES from "../routes/apiRoutes";
import axiosInstance from "./AxiosInstance";

export const getAllUsers = async (): Promise<IUser[]> => {
  const response = await axiosInstance.get<IUser[]>(`${API_ROUTES.USERS}`);
  return response.data;
};

// TODO: ADJUST DATATYPE (BIGINT/NUMBER)
export const getUser = async (id: number): Promise<IUser> => {
  const response = await axiosInstance.get<IUser>(`${API_ROUTES.USERS}/${id}`);
  return response.data;
};
