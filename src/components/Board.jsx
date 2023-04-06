import React, { useState } from "react";

import Card from "./Card";
import SearchBar from "./SearchBar";
import FilterByRegion from "./FilterByRegion";

const Board = ({ countries }) => {
  const [shownCountries, setShowCountries] = useState(countries);

  return (
    <>
      <section className="px-8 py-10 flex justify-between">
        <SearchBar placeholder="Search for a country..." countries={countries} setShownCountries={setShowCountries}/>
        <FilterByRegion label="Filter by region" setShowCountries={setShowCountries}/>
      </section>

      {shownCountries.length > 0 
      ?
      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 px-4 pt-6 pb-6">
        {shownCountries.map((country, index) => {
          return <Card key={index} country={country} />;
        })}
      </section>
      :
      <section className="flex justify-center pt-12">
        <h2 className="text-3xl font-bold">Country not found...</h2>
      </section>}
    </>
  );
};

export default Board;
