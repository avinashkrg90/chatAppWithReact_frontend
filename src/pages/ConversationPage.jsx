import React from 'react'
import users from '../components/usersData';
import { useParams } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';

const ConversationPage = ({ loggedinUser, selectedChatUser }) => {

    const { loggedinUsername, conversationUsername } = useParams();
    const conversationUser = users.filter((user) => user.username === conversationUsername)[0];
    console.log(conversationUser)
    return (

        <>
            <div className='w-full h-[100vh] flex bg-gradient-to-r from-indigo-400/20 to-cyan-500 p-0'>

                <ConversationBox loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser}/>

            </div>

        </>


    )
}

export default ConversationPage