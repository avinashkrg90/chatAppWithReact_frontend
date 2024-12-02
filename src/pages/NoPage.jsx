import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='gradient-text leading-[18rem] text-[14rem] font-bold bg-gradient-to-r from-indigo-600 to-orange-400'>404</h1>
            <h1 className='text-5xl my-2 mb-8'>Oops! Page not found</h1>
            <h2 className='text-red-500 font-semibold text-2xl mb-8'>You seem to be lost.</h2>
            <p className='text-gray-500 font-semibold text-2xl'>Here are some helpful links:</p>
            <div className='flex flex-col gap-5 mt-4'> 
                <Link to='/login' className='bg-red-600 text-white rounded-full p-2 px-4 hover:bg-red-500'>Login page</Link>
                <Link to='/user/testUser' className='bg-red-600 text-white rounded-full p-2 px-4 hover:bg-red-500'>Chat page</Link>
            </div>
        </div>
    </>
  )
}

export default NoPage