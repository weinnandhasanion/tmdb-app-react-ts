import type { Movie, Pagination as PaginationType } from "../utils/types";
import MovieTile from "./MovieTile";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

type MovieListProps = {
  movies: Movie[] | null;
  loading: boolean;
  pagination: PaginationType;
  onPageChange: (page: number) => void;
};

const MovieList = ({
  movies,
  loading,
  pagination,
  onPageChange,
}: MovieListProps) => {
  if (loading) {
    return <Spinner />;
  }

  if (movies?.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg">No movies found</p>
        <p className="text-sm">Try searching for something else!</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {movies?.map((movie) => (
          <div className="w-[170px] h-auto" key={movie.id}>
            <MovieTile {...movie} />
          </div>
        ))}
      </div>
      {!!movies?.length && (
        <Pagination onPageChange={onPageChange} {...pagination} />
      )}
    </>
  );
};

export default MovieList;
