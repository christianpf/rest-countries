import React, { useEffect, useState } from 'react'



const FilterByRegion = ({label, setShowCountries}) => {

  const [region, setRegion] = useState(JSON.parse(sessionStorage.getItem("region")));

  useEffect (() => {
    let regionStorage = "All"

    if(sessionStorage.getItem("region")) {
      regionStorage = JSON.parse(sessionStorage.getItem("region"));
    }else {
      sessionStorage.setItem("region", JSON.stringify(regionStorage));
    }
    document.getElementById("filter").value = regionStorage;
    setRegion(regionStorage);
  }, [])

  useEffect(() => {
    let api_call = null;
    if(region){
      api_call = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,capital,region`
      if(region === "All"){
        api_call = `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region`;
      }
    }
    fetch(api_call)
    .then(response => response.json())
    .then(data => setShowCountries(data))
  }, [region])

  const handleOnchange = (e) => {
    setRegion(e.target.value);
    sessionStorage.setItem('region', JSON.stringify(e.target.value));
  }

  return (
    <select name="region" onChange={handleOnchange} id="filter" className="p-3 w-full md:w-auto shadow-lg rounded-md dark:bg-dark-700 dark:text-dark-400 font-regular text-lg">
      <option value="All" disabled selected hidden>{label}</option>

      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default FilterByRegion