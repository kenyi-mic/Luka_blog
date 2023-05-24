import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import authHeader from "./auth-header";

const API_URL = "https://blog-api-whsn.onrender.com/";

export const getPublicContent = (): Promise<AxiosResponse<any>> => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = (): Promise<AxiosResponse<any>> => {
  const headers: AxiosRequestConfig["headers"] | any = {
    ...authHeader(),
  };
  return axios.get(API_URL + "user", { headers });
};

export const getModeratorBoard = (): Promise<AxiosResponse<any>> => {
  const headers: AxiosRequestConfig["headers"] | any = {
    ...authHeader(),
  };
  return axios.get(API_URL + "mod", { headers });
};

export const getAdminBoard = (): Promise<AxiosResponse<any>> => {
  const headers: AxiosRequestConfig["headers"] | any = {
    ...authHeader(),
  };
  return axios.get(API_URL + "admin", { headers });
};
