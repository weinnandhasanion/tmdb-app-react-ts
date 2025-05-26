import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
});

axiosInstance.interceptors.request.use((request) => {
  request.params["api_key"] = import.meta.env.VITE_TMDB_API_KEY;
  return request;
});

export default axiosInstance;
