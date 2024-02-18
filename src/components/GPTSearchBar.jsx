import React from "react";
import { useSelector } from "react-redux";
import langVariables from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="flex justify-center w-full">
      <form className="py-5 px-3 bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          placeholder={langVariables[language].searchPlaceholder}
          className="col-span-9 mr-3 p-2"
        />
        <button className="col-span-3 bg-red-600 text-white py-2 px-4 rounded-lg font-bold">
          {langVariables[language].searchText}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
