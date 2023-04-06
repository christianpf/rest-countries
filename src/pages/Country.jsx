import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";

import { MdArrowBack } from "react-icons/md";

const DataInCountry = ({ name, data }) => {
  if (name == "Currencies") {
    let currencies = [];
    let currenciesObj = JSON.parse(data);
    for (const abbr in currenciesObj) {
      currencies.push(currenciesObj[abbr].name);
    }
    return (
      <p className="pt-2">
        <span className="font-regular">{name}</span>: {currencies.join(", ")}
      </p>
    );
  }
  if (name == "Languages") {
    let languages = [];
    let languagesObj = JSON.parse(data);
    for (const abbr in languagesObj) {
      languages.push(languagesObj[abbr]);
    }
    return (
      <p className="pt-2">
        <span className="font-regular">{name}</span>: {languages.join(", ")}
      </p>
    );
  }
  return (
    <p className="pt-2 ">
      <span className="font-regular">{name}</span>: {data}
    </p>
  );
};

const Country = (props) => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => response.json())
      .then((data) => setCountry(...data));
  }, [name]);

  useEffect(() => {
    if (!country) return;
    if (!country.borders) return;

    let borders = country.borders.join(",");
    fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}`)
      .then((response) => response.json())
      .then((data) => {
        let countriesAux = [];
        data.forEach((country) => {
          countriesAux.push(country.name.common);
        });
        setBorderCountries(countriesAux);
      });
  }, [country]);

  return (
    <main className="xl:px-24 px-4 pt-16 h-screen max-h-100">
      {country ? (
        <>
          <CustomButton onClick={() => navigate(-1)}>
            <MdArrowBack /> Go back
          </CustomButton>
          <div className="flex flex-col md:flex-row items-center gap-16 pt-16">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full lg:max-w-2xl object-cover aspect-video shadow-lg flex-1"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl pb-4">{country.name.common}</h2>
              <div className="flex gap-8">
                <div className="flex-1">
                  <DataInCountry
                    name="Native name"
                    data={country.name.official}
                  />
                  <DataInCountry
                    name="Population"
                    data={country.population.toLocaleString("en-US")}
                  />
                  <DataInCountry name="Region" data={country.region} />
                  <DataInCountry name="Subregion" data={country.subregion} />
                  <DataInCountry
                    name="Capital"
                    data={country.capital.join(", ")}
                  />
                </div>
                <div className="flex-1">
                  <DataInCountry name="Top Level Domain" data={country.tld} />
                  <DataInCountry
                    name="Currencies"
                    data={JSON.stringify(country.currencies)}
                  />
                  <DataInCountry
                    name="Languages"
                    data={JSON.stringify(country.languages)}
                  />
                </div>
              </div>
              {borderCountries ? (
                <div className="flex flex-wrap pt-8 gap-4">
                  <h4 className="pt-2 font-regular">Border countries: </h4>

                  {borderCountries.map((country, index) => {
                    return (
                      <Link to={`/country/${country}`} key={index} className="inline-flex">
                        <CustomButton>{country}</CustomButton>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <h4 className="pt-8 font-regular">No border countries</h4>
              )}
            </div>
          </div>
        </>
      ) : (
        <h2>Loading ...</h2>
      )}
    </main>
  );
};

export default Country;
