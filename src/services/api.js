import axios from "axios";

export const createApiInstance = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
      Authorization: token && token != "null" ? token : "",
    },
  });
};

export const API = createApiInstance();
