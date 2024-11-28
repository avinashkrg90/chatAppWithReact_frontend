import React from 'react'
import ConversationHeader from './ConversationHeader'
import ConversationMessageBox from './ConversationMessageBox';
import Conversations from './Conversations';

const ConversationBox = ({ loggedinUsername, selectedChatUser }) => {

    return (
        <>
            <div className='w-full h-full bg-gray-200/70 flex flex-col justify-between'>

                <ConversationHeader loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser} />

                <Conversations loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser}/>

                <ConversationMessageBox selectedChatUser={selectedChatUser}/>
            </div>
        </>
    )
}

export default ConversationBox