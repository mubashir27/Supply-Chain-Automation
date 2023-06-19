import axios from "axios";

const BASE_URL = "http://localhost:5004/";
const USER_URL = "user/";

export const RegisterAPI = async (body) => {
  const data = await axios.post(`${BASE_URL + USER_URL}register`, body);
  return data;
};
