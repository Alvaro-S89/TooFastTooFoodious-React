import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'


export default function ModalProduct() {

    const { product, handleClickModal  } = useProducts()
    const [quantity, setQuantity] = useState(1)

  return (
    <div className='md:flex items-center gap-10'>
        <div className='md:w-1/3'>
            <img 
                src={`/img/${product.image}.jpg`} 
                alt={`Producto ${product.name}`} />
        </div>

        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <h1 className='text-3xl font-bold mt-5'>
                {product.name}
            </h1>
            <p className='mt-5 font-black text-4xl text-orange-400'>
                {product.price}§
            </p>

            <div className='flex gap-4 mt-5'>
                <button
                type='button'
                onClick={() =>{
                    if(quantity <= 1) return
                    setQuantity(quantity - 1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <p className='text-3xl'>{quantity}</p>

                <button
                type='button'
                onClick={() =>{
                    if(quantity >= 20) return
                    setQuantity(quantity + 1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <button 
                type='button'
                className='bg-orange-300 hover:bg-orange-400 px-5 py-2 mt-5 font-bold uppercase rounded cursor-pointer'>
                Añadir a la cesta
            </button>
        </div>
    </div>
  )
}
