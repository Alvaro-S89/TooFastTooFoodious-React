import React from 'react'

export default function Category({ category }) {

    const {icon, name, id} = category

  return (
    <div className='flex items-center gap-4 p-3 border w-full hover:bg-orange-400 cursor-pointer'>
        <img 
            src={`/img/icono_${icon}.svg`} alt="categoria"
            className='w-12' 
        />
        <p className='text-lg font-bold truncate'>{name}</p>
    </div>
  )
}