import { useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex w-full gap-2">
      <input
        type="text"
        name="search"
        id="search"
        className="p-3 flex-grow border border-gray-200 rounded-md"
        placeholder="Type here to start TMDBing!"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <button
          onClick={() => onSearch(searchValue)}
          className="bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-400"
        >
          Search
        </button>
      )}
    </div>
  );
};

export default Search;
