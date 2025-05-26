import axiosInstance from "./api";
import type { AxiosResponse } from "axios";
import type { SearchApiResult } from "../utils/types";

const TmdbApi = {
  searchMovie: async (
    query: string,
    page?: number
  ): Promise<AxiosResponse<SearchApiResult>> =>
    axiosInstance.get(`/search/movie`, { params: { query, page } }),
};

export default TmdbApi;
