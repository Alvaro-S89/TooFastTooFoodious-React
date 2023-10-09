import React from 'react'
import { useProducts } from '../hooks/useProducts'

export default function Category({ category }) {

    const {icon, name, id} = category
    const { handleClickCategory, currentCategory } = useProducts()

  return (
    <button 
      className={`${currentCategory.id === id ? 'bg-orange-400' : 'bg-white'} flex items-center gap-4 p-3 border w-full hover:bg-orange-400 cursor-pointer`}
      type='button'
      onClick={() => handleClickCategory(id)}
      >
        <img 
            src={`/img/icono_${icon}.svg`} alt="categoria"
            className='w-12' 
        />
        <p className='text-lg font-bold truncate'>{name}</p>
    </button>
  )
}