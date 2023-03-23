import React from 'react'

import Card from './Card'



const Board = ({countries}) => {


  return (
    <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 px-4 pt-6 '>
       {countries.map((country, index) => {
        return (
          <Card key={index} country={country}/>
        )
      })}
    </div>
  )
}


export default Board;
