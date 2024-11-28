import React from 'react'
import users from './usersData'
import ConversationHeader from './ConversationHeader'

import ConversationMessageBox from './ConversationMessageBox';

const ConversationBox = ({ loggedinUser, conversationUser }) => {
    return (
        <div className='w-full h-full bg-gray-200/70 flex flex-col justify-between'>
            
            <ConversationHeader loggedinUser={loggedinUser} conversationUser={conversationUser} />

            <div className='w-full h-full overflow-auto p-2 px-4'>
                <div>Hi, How are you?</div>
            </div>

            <ConversationMessageBox />
        </div>
    )
}

export default ConversationBox