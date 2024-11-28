import React from 'react'
import messages from './messages'
import OutgoingMsg from './OutgoingMsg';
import IncomingMsg from './IncomingMsg';

const Conversations = ({ loggedinUsername, selectedChatUser }) => {
    
    const msg = messages[loggedinUsername][selectedChatUser.username]
    console.log(msg);

    return (
        <div className='w-full h-full overflow-auto p-2 px-4'>
            {
                msg ?
                msg.map((msgObject, index) => {
                    if(msgObject.direction === "to"){
                        return <OutgoingMsg key={index} msgObject={msgObject} />
                    }else{
                        return <IncomingMsg key={index} msgObject={msgObject} />
                    }
                })
                : ""
            }
        </div>
    )
}

export default Conversations