import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useOutsideClick from "../utils/useOutsideClick";

const countries = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

type Props = {
  region: string;
  setRegion: (region: string) => void;
};

export const Spinner: React.FC<Props> = ({ region, setRegion }) => {
  const [showCountries, setShowCountries] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    showCountries && setShowCountries(false);
  });

  return (
    <div className="select-none cursor-pointer relative w-7/12 sm:w-full sm:col-start-7 md:col-start-9 lg:col-start-10  xl:col-start-11 sm:col-end-13">
      <div
        ref={ref}
        onClick={() => setShowCountries(!showCountries)}
        className="bg-elements px-6 py-4 w-full rounded-md shadow-md flex justify-between content-center items-center"
      >
        <span className="text-primary">{`${
          region !== "" && region !== "All" ? region : "Filter by Region"
        }`}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-primary" />
      </div>

      <ul
        className={`transition duration-300 ease-in-out opacity-${
          showCountries ? 100 : 0
        } mt-2 ${
          showCountries ? "visible" : "invisible"
        } absolute w-full px-3 py-4 bg-elements rounded-md shadow-md z-50`}
      >
        {countries.map((c) => (
          <li
            key={c}
            onClick={() => setRegion(c)}
            className={`text-primary ${
              region === c && "bg-secondary"
            } mb-4 last:mb-0 rounded-md px-6 py-3 hover:bg-secondary `}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};
