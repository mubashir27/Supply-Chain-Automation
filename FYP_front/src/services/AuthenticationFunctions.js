import axios from "axios";

export const BASE_URL = "http://localhost:5004/";
const USER_URL = "user/";

export const RegisterAPI = async (body) => {
  const data = await axios.post(`${BASE_URL + USER_URL}register`, body);
  return data;
};

export const LoginAPI = async (body) => {
  const data = await axios.post(`${BASE_URL + USER_URL}login`, body);
  return data;
};

export const CurrentAPI = async (body) => {
  console.log("Bearer111", "Bearer " + body);
  const data = await axios.get(`${BASE_URL + USER_URL}current`, {
    headers: {
      Authorization: `Bearer ${body}`,
    },
  });
  return data;
};
