import React, { useState, useEffect  } from 'react'

import allCountries from '../data/data.json'

import Board from '../components/Board';

const Home = () => {

  const [countries, setCountries] = useState();


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region")
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(error => setCountries(allCountries));
  }, []);

  return (
    <main className='xl:px-24'>
      {countries ?
       <Board countries={countries} />
      :<div className='h-screen bg-dark-700'></div>
  }
    </main>
  )
}



export default Home;