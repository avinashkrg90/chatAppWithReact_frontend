import React, { useState } from 'react'
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ConversationCard from './ConversationCard';
import user from '../assets/userImage.png'
import users from './usersData';

const ConversationsList = ({ loggedinUser, setSelectedChatUser }) => {

    const [searchedUsers, setSearchedUsers] = useState(users);
    const [searchText, setSearchText] = useState("");

    const handleSearchName = (e) => {
        setSearchText(e.target.value);
        setSearchedUsers(users.filter((user)=>user.name.toLowerCase().includes(e.target.value)));
    }

    const handleSearch = () => {
        setSearchedUsers(users.filter((user)=>user.name.toLowerCase().includes(searchText)));
    }

    return (
        <div className='w-full p-0 lg:p-2 h-full bg-gray-200/50 flex flex-col '>
            <div className='w-full p-5 relative'>
                <input onChange={(e)=>handleSearchName(e)} type="text" placeholder='Search' className='w-full h-12 rounded-lg p-2 px-4 outline-none bg-gray-50/80 hover:bg-gray-50 focus:bg-gray-50' />
                <FaMagnifyingGlass onClick={handleSearch} className='absolute top-9 right-8 text-gray-500 cursor-pointer' />
            </div>
            <div className='w-full flex justify-between items-center p-2 px-4'>
                <h2 className='uppercase text-indigo-900 font-semibold'>conversations</h2>
                <div className='bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:text-indigo-600 text-gray-500'>
                    <FaPlus className='text-lg ' />
                </div>
            </div>
            <div className='w-full h-full p-2 overflow-auto'>
                {
                    searchedUsers.map((user, index) => {
                        return <ConversationCard key={index} loggedinUser={loggedinUser} user={user} setSelectedChatUser={setSelectedChatUser} lastMessage="how are you?" time="09:35 PM" onlineStatus={user.onlineStatus} readStatus="read" />
                    })
                }
            </div>
        </div>
    )
}

export default ConversationsList