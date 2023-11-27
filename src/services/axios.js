import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.tvmaze.com/",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance