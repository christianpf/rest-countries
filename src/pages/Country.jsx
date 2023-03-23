import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';

import {MdArrowBack} from 'react-icons/md';

const Country = () => {
  const navigate = useNavigate();
  const {name} = useParams();
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then(response => response.json())
    .then(data => setCountry(...data));
  }, [])

  return (
    <section className='xl:px-24 pt-16 h-screen max-h-100'>
      <CustomButton onClick={() => navigate(-1)}>
        <MdArrowBack/> Go back
      </CustomButton>
      <div className='flex flex-col md:flex-row  gap-16 pt-16'>
        <img src={country.flags.png} className="h-72"/>
         
         <div className="">
            <h2 className='font-bold text-2xl'>{country.name.common}</h2>
            <p></p>
         </div>
      </div>
    </section>
  )
}


export default Country;