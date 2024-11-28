import React from 'react'
import { IoAttach } from "react-icons/io5";

const ConversationMessageBox = () => {
    return (
        <div className='w-full px-2 sm:px-4 py-2 sm:py-3'>
            <div className='bg-gray-100/90 w-full h-14 sm:h-16 rounded-lg flex items-center px-2'>
                <IoAttach className='text-3xl cursor-pointer text-gray-800' />
                <input type="text" placeholder='Type your message here...' className=' w-full p-2 rounded-lg mx-0 bg-transparent outline-none' />
                <button className='p-2 sm:p-3 sm:px-4 rounded-lg bg-gray-800 text-gray-200'>Send</button>
            </div>
        </div>
    )
}

export default ConversationMessageBox