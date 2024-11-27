import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ChatPage = () => {
    return (
        <>
            <div>ChatPage</div>
            <Link to='/'><button className='bg-blue-500'>Go to login page</button></Link>
            <Toaster />
        </>
    )
}

export default ChatPage