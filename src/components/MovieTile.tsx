import { formatReleaseDate } from "../utils/helpers";
import type { Movie } from "../utils/types";
import Poster from "./Poster";

const MovieTile = ({ title, imgUrl, releaseDate }: Movie) => {
  return (
    <div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start gap-2">
      <Poster imgUrl={imgUrl} alt={title} />
      <div>
        <div className="text-indigo-500 line-height-[1.2] font-semibold">
          {title}
        </div>
        <p className="text-xs">
          Release date: {formatReleaseDate(releaseDate)}
        </p>
      </div>
    </div>
  );
};

export default MovieTile;
