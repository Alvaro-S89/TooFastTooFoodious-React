import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import { useAuth } from '../hooks/useAuth'


export default function Register() {

    const nameRef = createRef()
    const directionRef = createRef()
    const phoneRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()

    const [errors, setErrors] = useState([])
    const { register } = useAuth({middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault()

        const data = {
            name: nameRef.current.value,
            direction: directionRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        register(data, setErrors)
    }

  return (
    <>
        <h1 className='text-4xl font-black'>Crea tu cuenta</h1>
        <p>Rellena el formulario</p>

        <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                
                {errors ? errors.map(error => <Alert key={error}>{error}</Alert>) : null}

                <div className='mb-4'>
                    <label htmlFor="name" className='text-slate-700'>
                        Nombre:
                    </label>
                    <input 
                        type="text"
                        id='name'
                        name='name'
                        placeholder='Tu nombre'
                        className='mt-2 w-full p-3 bg-gray-100' 
                        ref={nameRef}
                        />
                </div>

                <div className='mb-4'>
                    <label htmlFor="direction" className='text-slate-700'>
                        Dirección:
                    </label>
                    <input 
                        type="text"
                        id='direction'
                        name='direction'
                        placeholder='Tu dirección'
                        className='mt-2 w-full p-3 bg-gray-100' 
                        ref={directionRef}
                        />
                </div>

                <div className='mb-4'>
                    <label htmlFor="phone" className='text-slate-700'>
                        Teléfono:
                    </label>
                    <input 
                        type="tel"
                        id='phone'
                        name='phone'
                        placeholder='Tu teléfono'
                        className='mt-2 w-full p-3 bg-gray-100'
                        ref={phoneRef}
                        />
                </div>

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

                <div className='mb-4'>
                    <label htmlFor="Password_confirmation" className='text-slate-700'>
                        Repetir contraseña:
                    </label>
                    <input 
                        type="password"
                        id='Password_confirmation'
                        name='Password_confirmation'
                        placeholder='Repite tu contraseña'
                        className='mt-2 w-full p-3 bg-gray-100' 
                        ref={passwordConfirmationRef}
                        />
                </div>

                <input 
                    type="submit"
                    value="Crear cuenta"
                    className='bg-orange-600 hover:bg-orange-700 text-white uppercase w-full mt-5 p-3 font-bold cursor-pointer' />
            </form>
        </div>

        <nav className='mt-5'>
            <Link to="/auth/login">
                ¿Y tienes una cuenta? Entra aquí 🍕
            </Link>
        </nav>
    </>
  )
}
