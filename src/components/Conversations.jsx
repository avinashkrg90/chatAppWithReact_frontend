import React, { useEffect, useRef, useState } from 'react'
import OutgoingMsg from './OutgoingMsg';
import IncomingMsg from './IncomingMsg';
import users from './usersData';

const Conversations = ({ loggedinUsername, selectedChatUser, allMessages }) => {

    const messageListRef = useRef();
    const loggedInUser = users.filter((user) => user.username === loggedinUsername)[0];

    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return { width, height }
    };

    function scrollToBottom() {
        // get the scroll height of the window
        const scrollHeight = messageListRef.current.scrollHeight;
        // scroll to the bottom of webpage
        messageListRef.current.scrollTo(0, scrollHeight);
    }

    useEffect(() => {
        scrollToBottom();
    }, [selectedChatUser, allMessages])

    return (

        <div ref={messageListRef} className='w-full h-full overflow-auto p-2 xl:px-4'>
            {
                (allMessages[loggedinUsername] ? (allMessages[loggedinUsername][selectedChatUser.username] ? allMessages[loggedinUsername][selectedChatUser.username] : "") : "") ?
                    allMessages[loggedinUsername][selectedChatUser.username].map((msgObject, index) => {
                        if (msgObject.direction === "to") {
                            return <OutgoingMsg key={index} msgObject={msgObject} profileImgToSHow={getWindowDimension().width > 1024} loggedInUser={loggedInUser} selectedChatUser={selectedChatUser} />
                        } else {
                            return <IncomingMsg key={index} msgObject={msgObject} profileImgToSHow={getWindowDimension().width > 1024} loggedInUser={loggedInUser} selectedChatUser={selectedChatUser} />
                        }
                    })
                    : ""
            }
        </div>
    )
}

export default Conversations