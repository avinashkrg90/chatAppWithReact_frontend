import React, { useRef, useState } from 'react'
import { IoAttach } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";

const ConversationMessageBox = ({ selectedChatUser, loggedinUsername, allMessages, setAllMessages }) => {

    const [typedMessage, setTypedMessage] = useState();
    const messageTextAreaRef = useRef();

    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return { width, height }
    };

    const handleSendClick = () => {
        if (typedMessage) {
            const dateTime = new Date();
            const hour = dateTime.getHours();
            const min = dateTime.getMinutes();

            let updatedMsg = Object.assign({}, allMessages); // creating a copy of object not just the reference
            const newMsg = { direction: "to", text: typedMessage, timestamp: `${hour}:${min}` };

            if (updatedMsg[loggedinUsername]) {
                if (updatedMsg[loggedinUsername][selectedChatUser.username]) {
                    updatedMsg[loggedinUsername][selectedChatUser.username].push(newMsg)
                } else {
                    updatedMsg[loggedinUsername][selectedChatUser.username] = [newMsg];
                }
            } else {
                updatedMsg[loggedinUsername] = {};
                updatedMsg[loggedinUsername][selectedChatUser.username] = [newMsg];
            }

            setAllMessages(updatedMsg)
            setTypedMessage("")
            messageTextAreaRef.current.style.height = "auto";
        }

    }

    const handleMessageChange = (e) => {
        setTypedMessage(e.target.value)
        if (messageTextAreaRef.current) {
            messageTextAreaRef.current.style.height = "auto";
            messageTextAreaRef.current.style.height = `${e.target.scrollHeight - 16}px`;
        }
    }

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            handleSendClick();
        }
    }

    return (
        <div className={`w-full px-2 sm:px-4 pb-2 sm:pb-3 ${selectedChatUser ? "" : "opacity-50"}`}>
            <div className={`bg-gray-100/90 w-full rounded-lg flex items-center px-2 py-2${selectedChatUser ? "" : "pointer-events-none"}`}>
                <div>
                    <input type="file" className='hidden' id='attachInput' />
                    <label htmlFor="attachInput">
                        <IoAttach className='text-3xl cursor-pointer text-gray-800' />
                    </label>
                </div>
                <textarea onKeyDown={(e)=>handleKeyDown(e)} ref={messageTextAreaRef} onChange={(e) => handleMessageChange(e)} value={typedMessage} placeholder={`type your message here...  ${getWindowDimension().width>767 ? "(press 'enter' for newline, and 'CRTL+Enter' to send the message)" : ""}`} rows="1" name="message" id="message" className='text-sm p-2 bg-transparent w-full outline-none max-h-[7.6rem] resize-none'></textarea>
                <button onClick={handleSendClick} type='Submit' className='p-2 sm:p-3 sm:px-6 rounded-lg bg-gray-800 text-gray-200'><FaPaperPlane className='text-[1.35rem] text-gray-200' /></button>
            </div>
        </div>
    )
}

export default ConversationMessageBox