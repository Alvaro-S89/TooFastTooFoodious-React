import React from 'react'
import { products } from '../data/products'
import Product from '../components/Product'

export default function Index() {

  return (
    <>
    <h1 className='text-4xl font-black'></h1>
    <p className='text-2xl my-10'>Personaliza tu pedido</p>

    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      { products.map(product => (
        <Product key={product.id} product={ product }/>
      ))}
    </div>
    </>
  )
}
