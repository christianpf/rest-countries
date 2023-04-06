import React, { useContext } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { DarkModeContext } from "../context/useDarkModeContext";
import { ThemeButton } from "./ThemeButton";

const Nav = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav
      className={`flex justify-between bg-primary-100 items-center p-4 md:px-32  shadow-[0_2px_1px_0_rgba(214,214,214,0.75)] dark:shadow-[0_2px_1px_0_rgba(148,148,156,0.75)] dark:bg-dark-700`}
    >
      <h1 className="text-xl text-primary-400 font-bold dark:text-dark-400">
        Where in the world?
      </h1>
      {darkMode ? (
        <ThemeButton Icon={<BsFillSunFill />} text="Light Mode" />
      ) : (
        <ThemeButton Icon={<BsFillMoonFill />} text="Dark Mode" />
      )}
    </nav>
  );
};

export default Nav;
