import axios, { AxiosResponse } from "axios";
import authHeader, { AuthHeader } from "./auth-header";

interface ApiResponse<T extends any> {
  data: T;
}

const API_URL = "http://localhost:8080/api/test/";

export const getPublicContent = (): Promise<
  AxiosResponse<ApiResponse<any>>
> => {
  return axios.get<ApiResponse<any>>(API_URL + "all");
};

export const getUserBoard = (): Promise<AxiosResponse<ApiResponse<any>>> => {
  return axios.get<ApiResponse<any>>(API_URL + "user", {
    headers: authHeader(),
  });
};

export const getModeratorBoard = (): Promise<
  AxiosResponse<ApiResponse<any>>
> => {
  return axios.get<ApiResponse<any>>(API_URL + "mod", {
    headers: authHeader(),
  });
};

export const getAdminBoard = (): Promise<AxiosResponse<ApiResponse<any>>> => {
  return axios.get<ApiResponse<any>>(API_URL + "admin", {
    headers: authHeader(),
  });
};
