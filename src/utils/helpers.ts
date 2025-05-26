import dayjs from "dayjs";
import type { Movie, MovieResult } from "./types";

export const constructMovieObject = (movieResults: MovieResult[]): Movie[] =>
  movieResults.map(({ id, title, poster_path, release_date }) => ({
    id,
    title,
    imgUrl: poster_path,
    releaseDate: release_date,
  }));

export const formatReleaseDate = (releaseDate: string) =>
  releaseDate ? dayjs(releaseDate).format("MMMM D, YYYY") : "N/A";

export const buildImageUrl = (imgUrl: string) => {
  const imageEndpoint = "https://image.tmdb.org/t/p/w200";

  return `${imageEndpoint}/${imgUrl}`;
};

export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const maxPagesToShow = 5;
  const pages: (number | string)[] = [];

  if (totalPages <= maxPagesToShow) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const hideLeft = currentPage > maxPagesToShow / 2;
  const hideRight = currentPage < totalPages - maxPagesToShow / 2;

  pages.push(1);

  if (hideLeft) {
    pages.push("...");
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (hideRight) {
    pages.push("...");
  }

  pages.push(totalPages);

  return pages;
};
