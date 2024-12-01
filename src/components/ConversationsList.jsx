import React, { useEffect, useState } from 'react'
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ConversationCard from './ConversationCard';
import users from './usersData';

const ConversationsList = ({ loggedinUsername, setSelectedChatUser, setContactModalVisible, allMessages, setAllMessages }) => {
    const [contactUsers, setContactUsers] = useState();
    const [searchedUsers, setSearchedUsers] = useState(users);
    const [searchText, setSearchText] = useState("");

    const handleSearchName = (e) => {
        setSearchText(e.target.value);
        setSearchedUsers(contactUsers.filter((user)=>user.name.toLowerCase().includes(e.target.value)));
    }

    const handleSearch = () => {
        setSearchedUsers(contactUsers.filter((user)=>user.name.toLowerCase().includes(searchText)));
    }

    useEffect(()=>{
        const loggedInUser = users.filter((user)=>user.username === loggedinUsername)[0];
        setSearchedUsers((users.filter((user) => loggedInUser.contacts.includes(user.username))));
        setContactUsers((users.filter((user) => loggedInUser.contacts.includes(user.username))));
    }, [])

    return (
        <div className='w-full p-0 lg:p-2 h-full bg-gray-200/50 flex flex-col '>
            <div className='w-full p-5 relative'>
                <input onChange={(e)=>handleSearchName(e)} type="text" placeholder='Search' className='w-full h-12 rounded-lg p-2 px-4 outline-none bg-gray-50/80 hover:bg-gray-50 focus:bg-gray-50' />
                <FaMagnifyingGlass onClick={handleSearch} className='absolute top-9 right-8 text-gray-500 cursor-pointer' />
            </div>
            <div className='w-full flex justify-between items-center p-2 px-4'>
                <h2 className='uppercase text-indigo-900 font-semibold'>conversations</h2>
                <div onClick={()=>setContactModalVisible(true)} className='bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:text-indigo-600 text-gray-500'>
                    <FaPlus className='text-lg' />
                </div>
            </div>
            <div className='w-full h-full p-2 overflow-auto'>
                {
                    searchedUsers.map((user, index) => {
                        return <ConversationCard key={index} allMessages={allMessages} setAllMessages={setAllMessages} loggedinUsername={loggedinUsername} user={user} setSelectedChatUser={setSelectedChatUser} onlineStatus={user.onlineStatus} />
                    })
                }
            </div>
        </div>
    )
}

export default ConversationsList