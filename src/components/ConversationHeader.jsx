import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const ConversationHeader = ({ loggedinUser, conversationUser }) => {
    return (
        <div className='w-full py-2 bg-gray-800/90 flex items-center'>
            <div className='mx-3 sm:hidden'><FaArrowLeft className='text-3xl text-gray-200'/></div>
            <div className='flex-1 flex items-center gap-3 justify-start mx-4'>
                <img className='w-14 h-14 object-cover rounded-full border' src={conversationUser.profileImg} alt="Avatar" />
                <div>
                    <h3 className='text-xl text-gray-100'>{conversationUser.name}</h3>
                </div>
            </div>
            <div className='w-14 mr-4'>
                <img className='w-14 h-14 object-cover rounded-full border' src={loggedinUser.profileImg} alt="Avatar" />
            </div>
        </div>
    )
}

export default ConversationHeader