import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <>
        <div className='bg-gradient-to-r from-indigo-400 to-cyan-500 w-full h-[100vh] flex flex-col justify-center items-center gap-6'>
            <div className='px-4 w-full'>
              <h1 className='text-white text-4xl sm:text-5xl font-normal top-8 sm:top-16 text-center left-4 right-4'>Chat App with React</h1>
            </div>
            
            <LoginForm />
        </div>
        
    </>
  )
}

export default LoginPage