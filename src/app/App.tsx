import { useState } from "react";
import TmdbApi from "../services/tmdb";
import type { Movie, Pagination } from "../utils/types";
import { constructMovieObject } from "../utils/helpers";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [currentSearch, setCurrentSearch] = useState("");
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    totalPages: 0,
  });

  const handleSearch = async (query: string, page = 1) => {
    try {
      setError(false);
      setLoading(true);
      setCurrentSearch(query.trim());
      const response = await TmdbApi.searchMovie(query, page);

      if (response.status === 200) {
        setMovies(constructMovieObject(response.data.results));
        setPagination((pagination) => ({
          ...pagination,
          page: response.data.page,
          totalPages: response.data.total_pages,
        }));
      }
    } catch (error) {
      console.error(`Error in searching page ${page} of ${query}:`, error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-3xl flex flex-col gap-4 px-3">
      <div className="text-center">
        <div className="my-5">
          <p className="text-4xl">
            <span className="text-indigo-500 font-bold">TMDB</span>ed!
          </p>
          <p className="text-xl">Your movies, TMDBed and delivered.</p>
        </div>
        <Search onSearch={handleSearch} />
      </div>
      <div className="flex-grow py-5">
        {error ? (
          <div className="text-center">
            <p className="text-lg">Oops, some error occurred.</p>
            <p className="text-sm">Please try again later.</p>
          </div>
        ) : (
          <>
            {!loading && !!currentSearch && (
              <p className="mb-3">
                Search results for{" "}
                <span className="text-indigo-500">"{currentSearch}"</span>:
              </p>
            )}
            <MovieList
              movies={movies}
              loading={loading}
              pagination={pagination}
              onPageChange={(page) => handleSearch(currentSearch, page)}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
