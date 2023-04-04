import React, { useState } from "react";

import Card from "./Card";
import SearchBar from "./SearchBar";

const Board = ({ countries }) => {
  const [shownCountries, setShowCountries] = useState(countries);

  return (
    <>
      <section className="px-4 py-10">
        <SearchBar placeholder="Search for a country..." countries={countries} setShownCountries={setShowCountries}/>
      </section>

      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 px-4 pt-6 pb-6">
        {shownCountries.map((country, index) => {
          return <Card key={index} country={country} />;
        })}
      </section>
    </>
  );
};

export default Board;
