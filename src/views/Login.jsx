import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <h1 className='text-4xl font-black'>Iniciar sesión</h1>

        <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
            <form action="">

                <div className='mb-4'>
                    <label htmlFor="email" className='text-slate-700'>
                        Email:
                    </label>
                    <input 
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Tu email'
                        className='mt-2 w-full p-3 bg-gray-100' />
                </div>

                <div className='mb-4'>
                    <label htmlFor="password" className='text-slate-700'>
                        Contraseña:
                    </label>
                    <input 
                        type="password"
                        id='password'
                        name='password'
                        placeholder='Inserta aquí tu contraseña'
                        className='mt-2 w-full p-3 bg-gray-100' />
                </div>

                <input 
                    type="submit"
                    value="Inicia sesión"
                    className='bg-orange-600 hover:bg-orange-700 text-white uppercase w-full mt-5 p-3 font-bold cursor-pointer' />
            </form>
        </div>

        <nav className='mt-5'>
            <Link to="/auth/register">
                ¿Todavia no tienes cuenta? Crea una aqui 🍜
            </Link>
        </nav>
    </>
  )
}
