import React from 'react'
import Product from '../components/Product'
import { useProducts } from '../hooks/useProducts'
import useSWR from 'swr'
import client from '../utils/axios'
import DotLoader from "react-spinners/ClipLoader";


export default function Index() {

  const { currentCategory } = useProducts()

  //swr query
  const fetcher = () => client('/api/products').then(data=> data.data)
  const{ data, error, isLoading } = useSWR('/api/products', fetcher) //It is called fetcher in the swr documentation, it is nothing more than a callback
  
  if(isLoading)
    return 
      <DotLoader color="#f6a302" />
  const products = data.data.filter(product => product.category_id === currentCategory.id)

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
