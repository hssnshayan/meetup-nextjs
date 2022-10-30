import axios from "axios";

const API = () => {
  return axios.create({ baseURL: "http://localhost:3000" });
};

export default API;
