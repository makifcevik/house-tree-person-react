import IPatient from "../models/IPatient";
import API_ROUTES from "../routes/apiRoutes";
import { axiosInstance } from "./axiosInstance";

export const getAllPatients = async (): Promise<IPatient[]> => {
  const response = await axiosInstance.get<IPatient[]>(`${API_ROUTES.PATIENTS}`);
  return response.data;
};

export const getPatient = async (id: number): Promise<IPatient> => {
  const response = await axiosInstance.get<IPatient>(`${API_ROUTES.PATIENTS}/${id}`);
  return response.data;
};

export const createPatient = async (newPatient: IPatient): Promise<IPatient> => {
  const response = await axiosInstance.post<IPatient>(API_ROUTES.PATIENTS, newPatient);
  return response.data;
};

export const updatePatient = async (
  id: number,
  patientData: Partial<IPatient>
): Promise<IPatient> => {
  const response = await axiosInstance.put<IPatient>(
    `${API_ROUTES.PATIENTS}/${id}`,
    patientData
  );
  return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${API_ROUTES.PATIENTS}/${id}`);
};
