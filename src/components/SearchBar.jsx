import React from "react";

const SearchBar = ({ placeholder, countries, setShownCountries}) => {

  const customContains = (str, match) => {
    return str.indexOf(match) >= 0;
  }


  const handleOnChange = (event) => {
    var found = [];
    countries.forEach(country => {
      if(customContains(country.name.common.toLowerCase(), event.target.value.toLowerCase())) {
        found.push(country);
      }
    });
    setShownCountries(found);
  }

  return (
    <input
      className="p-4 w-1/3 shadow-lg rounded-md dark:bg-dark-700 dark:text-dark-400 font-regular text-lg"
      type="text"
      placeholder={placeholder}
      onChange={handleOnChange}
    ></input>
  );
};

export default SearchBar;
