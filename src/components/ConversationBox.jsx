import React, { useEffect, useState, useRef } from 'react'
import ConversationHeader from './ConversationHeader'
import ConversationMessageBox from './ConversationMessageBox';
import Conversations from './Conversations';

const ConversationBox = ({ loggedinUsername, selectedChatUser, allMessages, setAllMessages }) => {

    return (
        <>
            <div className='w-full h-full bg-gray-200/90 flex flex-col justify-between'>

                <ConversationHeader loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser} />

                <Conversations loggedinUsername={loggedinUsername} selectedChatUser={selectedChatUser} allMessages={allMessages}/>

                <ConversationMessageBox selectedChatUser={selectedChatUser} loggedinUsername={loggedinUsername} allMessages={allMessages} setAllMessages={setAllMessages}/>
            </div>
        </>
    )
}

export default ConversationBox