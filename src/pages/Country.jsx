import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';

import {MdArrowBack} from 'react-icons/md';


const DataInCountry = ({name, data}) => {

  return (
    <>
      <p className='pt-2'><span className='font-regular'>{name}</span>: {data}</p>
    </>
  )
}

const Country = () => {
  const navigate = useNavigate();
  const {name} = useParams();
  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then(response => response.json())
    .then(data => setCountry(...data));
    
  }, [])

  return (
    <main className='xl:px-24 px-4 pt-16 h-screen max-h-100'>
    {country ?
     <>
      <CustomButton onClick={() => navigate(-1)}>
        <MdArrowBack/> Go back
      </CustomButton>
      <div className='flex flex-col md:flex-row  gap-16 pt-16'>
        <img src={country.flags.png} alt={country.flags.alt} className="w-full md:w-2/5 h-auto object-cover"/>
         <div className="">
            <h2 className='font-bold text-2xl pb-4'>{country.name.common}</h2>
            <div className='flex gap-4'>
            <div>
              <DataInCountry name="Native name" data={country.name.official}/>
              <DataInCountry name="Population" data={country.population}/>
              <DataInCountry name="Region" data={country.region}/>
              <DataInCountry name="Subregion" data={country.subregion}/>
              <DataInCountry name="Capital" data={country.capital}/>
            </div>
            <div>
              <DataInCountry name="Native name" data={country.name.official}/>
              <DataInCountry name="Population" data={country.population}/>
              <DataInCountry name="Region" data={country.region}/>
              <DataInCountry name="Subregion" data={country.subregion}/>
              <DataInCountry name="Capital" data={country.capital}/>
            </div>
            </div>
         </div>
      </div>
      </>
      :
      <h2>Loading ...</h2>
    }
    </main>
  )
}


export default Country;