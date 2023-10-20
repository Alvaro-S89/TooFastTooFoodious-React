import React from 'react'

export default function Alert({children}) {
  return (
    <div className='bg-red-500 text-white uppercase p-2 m-2 text-center font-bold'>
        {children}
    </div>
  )
}
