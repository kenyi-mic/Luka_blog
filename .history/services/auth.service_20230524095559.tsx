import axios from "axios";
import { NextPageContext } from "next";

const API_URL = "http://localhost:8080/users/";

export const register = (
  username: string,
  email: string,
  password: string,
  confirm_password: string
) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    confirm_password,
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response: any) => {
      if (typeof window !== "undefined" && response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data.result);
      }
      return response.data;
    });
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

export const getCurrentUser = (ctx?: NextPageContext) => {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem("user");
    console.log(userStr);
    if (userStr) return JSON.parse(userStr);
  } else if (ctx?.req?.headers?.cookie) {
    // Handle server-side rendering
    const cookies = ctx.req.headers.cookie.split("; ");
    const userCookie = cookies.find((cookie) => cookie.startsWith("user="));
    if (userCookie) {
      const userStr = userCookie.split("=")[1];
      if (userStr) return JSON.parse(decodeURIComponent(userStr));
    }
  }
  return null;
};
