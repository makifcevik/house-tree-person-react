import IResponse from "@/models/IResponse";
import IUser from "../models/IUser";
import API_ROUTES from "../routes/apiRoutes";
import { axiosInstance } from "./axiosInstance";

export const getAllUsers = async (): Promise<IResponse<IUser[]>> => {
  const response = await axiosInstance.get<IResponse<IUser[]>>(API_ROUTES.USERS);
  return response.data;
};

export const getUser = async (id: number): Promise<IResponse<IUser>> => {
  const response = await axiosInstance.get<IResponse<IUser>>(`${API_ROUTES.USERS}/${id}`);
  return response.data;
};

export const createUser = async (newUser: IUser): Promise<IUser> => {
  const response = await axiosInstance.post<IUser>(API_ROUTES.USERS, newUser);
  return response.data;
};

export const updateUser = async (
  id: number,
  userData: Partial<IUser>
): Promise<IUser> => {
  const response = await axiosInstance.put<IUser>(`${API_ROUTES.USERS}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.USERS}/${id}`);
};
