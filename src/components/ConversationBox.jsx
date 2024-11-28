import React from 'react'
import ConversationHeader from './ConversationHeader'
import ConversationMessageBox from './ConversationMessageBox';

const ConversationBox = ({ loggedinUser, selectedChatUser }) => {

    return (
        <>
            <div className='w-full h-full bg-gray-200/70 flex flex-col justify-between'>

                <ConversationHeader loggedinUser={loggedinUser} selectedChatUser={selectedChatUser} />

                <div className='w-full h-full overflow-auto p-2 px-4'>
                    <div>Hi, How are you?</div>
                </div>

                <ConversationMessageBox />
            </div>
        </>
    )
}

export default ConversationBox