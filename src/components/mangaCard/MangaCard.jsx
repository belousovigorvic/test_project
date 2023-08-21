import React from 'react'

const MangaCard = ({ bg, year, name }) => {
  return (
    <div className="flex flex-col justify-end w-48 h-56 rounded-2xl relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg})`,
          filter: 'brightness(60%)'
        }}
      />
      <div className="relative z-10 p-2">
        <p className='text-white'>Год: {year}</p>
        <p className='font-medium text-white'>{name}</p>
      </div>
    </div>
  )
}

export default MangaCard
