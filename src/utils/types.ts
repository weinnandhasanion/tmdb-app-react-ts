export type MovieResult = {
  id: number;
  backdrop_path: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
};

export type SearchApiResult = {
  results: MovieResult[];
  page: number;
  total_pages: number;
};

export type Movie = {
  id: number;
  title: string;
  imgUrl: string;
  releaseDate: string;
};

export type Pagination = {
  page: number;
  totalPages: number;
};
