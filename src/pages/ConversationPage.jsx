import React from 'react'
import users from '../components/usersData';
import { useParams } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';

const ConversationPage = ({ loggedinUser, selectedChatUser, allMessages, setAllMessages }) => {

    const { loggedinUsername, conversationUsername } = useParams();
    
    return (

        <>
            <div className='w-full h-[100vh] flex bg-gradient-to-r from-indigo-400/20 to-cyan-500 p-0'>

                <ConversationBox loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser} allMessages={allMessages} setAllMessages={setAllMessages}/>
                
            </div>

        </>

    )
}

export default ConversationPage