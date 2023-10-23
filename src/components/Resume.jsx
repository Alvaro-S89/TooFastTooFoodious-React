import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductSummary from './ProductSummary'

export default function Resume() {

  const { order, total, handleSubmitOrder } = useProducts()

  const handleSubmit = e => {
    e.preventDefault()

    handleSubmitOrder()
  }

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className='text-center text-4xl font-black'>
        Mi pedido
      </h1>
      <div className='py-10'>
      {order.length === 0 ? (
        <p className='text-center text-2xl'>
          Su cesta esta vacia
        </p>
      ):(
        order.map(product => (
          <ProductSummary key={ product.name } product={ product } />
        ))
      )}
      </div>
      {order.length >= 1 ? (
        <>
          <p className='text-xl mt-10'>
            total:{total}§
          </p>
          <form 
            className='w-full'
            onSubmit={handleSubmit}
          >
            <div className='mt-5'>
              <input 
                type="submit" 
                className='bg-orange-300 hover:bg-orange-400 w-full px-5 py-3 uppercase font-bold rounded text-center cursor-pointer'
                value={"confirmar pedido"}/>
            </div>
          </form>
        </>
      ):('')}
    </aside>
  )
}
