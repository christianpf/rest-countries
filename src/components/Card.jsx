import React from "react";
import { Link } from "react-router-dom";

const CardLine = ({ text, data }) => {
  return (
    <p className="text-md">
      <span className="font-regular">{text}: </span>
      {data}
    </p>
  );
};

const Card = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div
        role="button"
        className="flex flex-col border-2 rounded-xl h-96 text-primary-400 transition ease-in-out duration-300 hover:scale-105  dark:border-gray-500 dark:text-dark-400"
      >
        <img
          src={country.flags.png}
          className="h-48 w-96 rounded-t-xl object-cover border-b-2 dark:border-gray-500"
        />
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">{country.name.common}</h2>
          <CardLine text="Population" data={country.population} />
          <CardLine text="Region" data={country.region} />
          <CardLine text="Capital" data={country.capital} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
