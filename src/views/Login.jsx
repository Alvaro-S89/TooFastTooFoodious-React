import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import { useAuth } from '../hooks/useAuth'


export default function Login() {

    const emailRef = createRef()
    const passwordRef = createRef()

    const [errors, setErrors] = useState([])
    const{ login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        
        login(data, setErrors)
    }

  return (
    <>
        <h1 className='text-4xl font-black'>Iniciar sesión</h1>

        <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
            <form 
                onSubmit={handleSubmit}
                noValidate
            >

                {errors ? errors.map(error => <Alert key={error}>{error}</Alert>) : null}

                <div className='mb-4'>
                    <label htmlFor="email" className='text-slate-700'>
                        Email:
                    </label>
                    <input 
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Tu email'
                        className='mt-2 w-full p-3 bg-gray-100' 
                        ref={emailRef}
                        />
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
                        className='mt-2 w-full p-3 bg-gray-100' 
                        ref={passwordRef}
                        />
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
