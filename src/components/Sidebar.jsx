import React from 'react'
import Category from './Category'
import { useProducts } from '../hooks/useProducts'
import { useAuth } from '../hooks/useAuth'


export default function Sidebar() {

    const { categories } = useProducts()
    const { logout, data } = useAuth({middleware: 'auth'})


  return (
    <aside className='md:w-72'>
        <div className='p-4'>
            <img 
                src="img/logo2.svg" alt="Logo"
                className='w-60' />
        </div>

        <div className='flex items-center justify-center gap-3'>
            <p className='font-bold'>{data?.name}</p>
            <button 
                className='text-center bg-orange-600 p-2 font-bold text-white'
                onClick={logout}
                >
                Cerrar sesión
            </button>
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
