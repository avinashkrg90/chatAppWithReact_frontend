import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ConversationBox from '../components/ConversationBox'
import ConversationsList from '../components/ConversationsList'
import users from '../components/usersData'

const ChatPage = ({selectedChatUser, setSelectedChatUser}) => {

    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return { width, height }
    };

    return (
        <>
            <div className='w-full h-[100vh] flex bg-gradient-to-r from-indigo-400 to-cyan-500 p-0'>

                <div className='flex-[1] md:flex-[2] md:max-w-[360px] lg:flex-[2] lg:max-w-[450px] xl:max-w-[550px]'>
                    <ConversationsList loggedinUser={users[0]} setSelectedChatUser={setSelectedChatUser} />
                </div>

                {
                    getWindowDimension().width > 767 ?

                        <div className='hidden md:block md:flex-[2] lg:flex-[3] xl:flex-[3]'>
                            <ConversationBox loggedinUser={users[0]} selectedChatUser={selectedChatUser} />
                        </div>
                    : ''
                }
            </div>

            <Toaster />
        </>
    )
}

export default ChatPage