import React from 'react'
import { categories } from '../data/categories'
import Category from './Category'

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
        <div className='p-4'>
            <img 
                src="img/logo2.svg" alt="Logo"
                className='w-60' />
        </div>

        <div className='mt-10'>
            {categories.map( category => (
                < Category key={ category.id } category={ category } />
            ))}
        </div>

        <div className='my-5 px-5'>
            <button
                type='submit'
                className='text-center bg-orange-600 w-full p-3 font-bold text-white'
            >
                Cancelar pedido
            </button>
        </div>
    </aside>
  )
}
