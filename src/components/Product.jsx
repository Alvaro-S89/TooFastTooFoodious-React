import React from 'react'
import { useProducts } from '../hooks/useProducts'


export default function Product({product}) {

    const { name, price, image } = product
    const { handleClickModal, handleSetProduct } = useProducts()

  return (
    <div className='border shadow-2xl p-3 bg-white'>
        <img src={`/img/${image}.jpg`} alt="imagen de producto" />

        <div className='p-5'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='mt-5 font-black text-2xl text-orange-400'>{price}§</p>
            <button 
                type='button'
                className='bg-orange-300 hover:bg-orange-400 w-full mt-5 p-3 uppercase font-bold'
                onClick={()=> {
                  handleClickModal()
                  handleSetProduct(product)
                }}
                >
                añadir al carrito
            </button>
        </div>
    </div>
  )
}
