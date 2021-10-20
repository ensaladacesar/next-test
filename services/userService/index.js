import axios from "axios";

const baseUrl = "http://localhost:8001/api/v0/";

export const login = async (email, password) => {
  return await axios.post(`${baseUrl}user/login`, { email, password });
};
