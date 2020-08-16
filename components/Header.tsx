import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { ITheme } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as SolidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as RegularMoon } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export const Header = () => {
  const { theme, setTheme } = useContext<ITheme>(ThemeContext);

  return (
    <header className="bg-elements flex justify-between px-4 py-8 shadow sm:px-24 sm:py-6">
      <Link href="/">
        <h1 className="transition duration-300 ease-in-out cursor-pointer transform hover:scale-125 text-primary font-bold sm:text-lg">
          Where in the world?
        </h1>
      </Link>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
        className="font-regular text-primary focus:outline-none"
      >
        <FontAwesomeIcon
          icon={theme === "light" ? RegularMoon : SolidMoon}
          className="mr-3"
        />
        Dark Mode
      </button>
    </header>
  );
};
