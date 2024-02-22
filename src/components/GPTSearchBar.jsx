import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import langVariables from "../utils/languageConstants";
import { OPTIONS } from "../utils/constants";
import { addUserSearchMovies } from "../utils/moviesSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  console.log("search text", searchText);

  const handleSearchButton = async () => {
    const searchQuery = searchText.current.value;

    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    const data = await result.json();
    console.log("data", data);
    dispatch(addUserSearchMovies(data.results));
  };
  return (
    <div className="flex justify-center w-full">
      <form
        className="py-5 px-3 bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={langVariables[language].searchPlaceholder}
          className="col-span-9 mr-3 p-2"
        />
        <button
          className="col-span-3 bg-red-600 text-white py-2 px-4 rounded-lg font-bold"
          onClick={handleSearchButton}
        >
          {langVariables[language].searchText}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
