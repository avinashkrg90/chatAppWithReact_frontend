import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import users from './usersData';

const ConversationHeader = ({ loggedinUsername, selectedChatUser }) => {

    const navigate = useNavigate();
    const loggedinUser = users.filter((user)=>user.username===loggedinUsername)[0];
    console.log("loggedinUser", loggedinUsername)
    return (
        <div className='w-full h-20 py-2 bg-gray-800/90 flex items-center'>
            <div className='mx-3 ml-4 sm:hidden'><FaArrowLeft onClick={() => navigate(`/user/${loggedinUsername}`)} className='text-xl text-gray-200 cursor-pointer' /></div>

            {
                selectedChatUser ?
                    <div className='flex-1 flex items-center gap-3 justify-start sm:mx-4'>
                        <div className='relative'>
                            <img className='w-12 h-12 object-cover rounded-full border' src={selectedChatUser.profileImg} alt="Avatar" />
                            <div className={`absolute top-[4px] -right-[4px] w-3 h-3 rounded-full ${selectedChatUser.onlineStatus === "online" ? "bg-green-400 shadow-[-2px_1px_8px_rgb(0,0,0,0.6)]" : ''} `}></div>
                        </div>

                        <div>
                            <h3 className='text-lg text-gray-100'>{selectedChatUser.name}</h3>
                        </div>
                    </div>
                    : <div className='flex-1 sm:mx-4 text-gray-200'>Select a chat on left to start conversation</div>
            }


            <div className='w-12 mr-2 sm:mr-4'>
                <img className='w-12 h-12 object-cover rounded-full border' src={loggedinUser.profileImg} alt="Avatar" />
            </div>
        </div>
    )
}

export default ConversationHeader