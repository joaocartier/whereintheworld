import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setSearchText: (text: string) => void;
};

export const SearchBar: React.FC<Props> = ({ setSearchText }) => {
  return (
    <div className="w-full relative  pt-6 pb-10 sm:w-full sm:col-span-6 sm:col-span-5 sm:pt-10">
      <div className="absolute inset-y-0 left-0 pl-6 pb-6 sm:pb-1 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-input" />
      </div>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a country..."
        className="bg-elements text-input shadow-md rounded-md w-full pl-16 py-4 placeholder-input"
        type="text"
      ></input>
    </div>
  );
};
