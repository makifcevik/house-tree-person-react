import axios from "axios";

// Backend instance
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// HTP Classifier instance
export const axiosHTPClassifierInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HTP_CLASSIFIER_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Add other instances for other connection endpoints.
