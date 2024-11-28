import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ConversationBox from '../components/ConversationBox'
import ConversationsList from '../components/ConversationsList'

const ChatPage = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex bg-gradient-to-r from-indigo-400 to-cyan-500 p-0'>
                <div className='flex-[1]'>
                    <ConversationsList />
                </div>
                <div className='flex-[3]'>
                    <ConversationBox />
                </div>
            </div>

            <Toaster />
        </>
    )
}

export default ChatPage