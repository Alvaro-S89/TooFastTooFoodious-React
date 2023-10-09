import React from 'react'
import { products as data } from '../data/products'
import Product from '../components/Product'
import { useProducts } from '../hooks/useProducts'
import Category from '../components/Category'

export default function Index() {

  const { currentCategory } = useProducts()

  const products = data.filter(product => product.category_id === currentCategory.id)

  return (
    <>
    <h1 className='text-4xl font-black'>{ currentCategory.name }</h1>
    <p className='text-2xl my-10'>Personaliza tu pedido</p>

    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      { products.map(product => (
        <Product key={product.id} product={ product }/>
      ))}
    </div>
    </>
  )
}
