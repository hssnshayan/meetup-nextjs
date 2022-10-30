import axios from "axios";

const API = () => {
    const DEBUG = process.env.DEBUG
    if (DEBUG)  return axios.create({ baseURL: "http://localhost:3000" });
    else  return axios.create({ baseURL: "https://meetup-nextjs-beta.vercel.app" });
};

export default API;