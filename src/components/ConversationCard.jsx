import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


const ConversationCard = ({ loggedinUsername, user, setSelectedChatUser, allMessages, setAllMessages }) => {

    const nameRef = useRef();
    const lastMessageRef = useRef();
    const timeRef = useRef();
    const navigate = useNavigate();

    const getWindowDimension = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return { width, height }
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = "rgb(31, 41, 55)";
        nameRef.current.style.color = "#eee";
        lastMessageRef.current.style.color = "#999";
        timeRef.current.style.color = "#999";
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = "rgba(249, 250, 251, 0.6)";
        nameRef.current.style.color = "#111";
        lastMessageRef.current.style.color = "rgb(75, 85, 99)";
        timeRef.current.style.color = "rgb(75, 85, 99)";
    }

    const handleChatClick = () => {
        if (getWindowDimension().width <= 767) {
            navigate(`/user/${loggedinUsername}/conversation/${user.username}`)
        }
        setSelectedChatUser(user)

        // updating the read status of last messages for user
        let updatedMsg = Object.assign({}, allMessages); // creating a copy of object not just the reference

        if (updatedMsg[loggedinUsername][user.username].at(-1)) {
            updatedMsg[loggedinUsername][user.username].at(-1)["read"] = "read"
        }
        setAllMessages(updatedMsg)

    }

    const lastMsgDetail = () => {
        const msgArray = allMessages[loggedinUsername] ? (allMessages[loggedinUsername][user.username] ? allMessages[loggedinUsername][user.username] : "") : ""
        let lastMsg;
        let lastMsgTime;
        let lastMsgReadStatus
        if (msgArray) {
            lastMsg = msgArray.at(-1).text; // last element of the array
            lastMsgTime = msgArray.at(-1).timestamp
            lastMsgReadStatus = msgArray.at(-1).read
        }
        let i = 6;
        let msgToDisplay = lastMsg;

        try {
            if (msgToDisplay) {
                msgToDisplay = msgToDisplay.split(' ').slice(0, i).join(' ');
                while (msgToDisplay.length > 30) {
                    i--;
                    msgToDisplay = msgToDisplay.split(' ').slice(0, i).join(' ');
                }
            }
        } catch (error) {
            console.log(error)
        }

        if (msgToDisplay != lastMsg)
            msgToDisplay = msgToDisplay + "..."

        try {
            if (lastMsgTime) {
                lastMsgTime = lastMsgTime.split(":")[0] + ":" + lastMsgTime.split(":")[1]
            }
        } catch (error) {
            console.log(error)
        }

        return { msgToDisplay, lastMsgTime, lastMsgReadStatus }
    }
    const lastMessage = lastMsgDetail();

    return (
        <>
            <div onClick={() => handleChatClick()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cursor-pointer duration-75 w-full bg-gray-50/60 hover:bg-gray-800 p-2 h-20 flex items-center rounded-sm border-b-2'>
                <div className='w-[20%] min-w-[4rem] max-w-[4rem] relative flex justify-start items-center '>
                    <img src={user.profileImg} alt="avatar" className='border-2 rounded-full w-16 h-16 object-cover' />
                    <div className={`absolute top-[5px] right-[2px] w-3 h-3 rounded-full ${user.onlineStatus === "online" ? "bg-green-400 shadow-[-2px_1px_5px_rgb(0,0,0,0.4)]" : ''} `}></div>
                </div>
                <div className='w-[60%] flex flex-col items-start px-2 overflow-hidden'>
                    <div ref={nameRef} className='font-normal text-[0.9rem] sm:text-[1.2rem]'>{user.name}</div>
                    <div ref={lastMessageRef} className='text-gray-600 text-[0.8rem] sm:text-[0.9rem] text-nowrap'>{lastMessage.msgToDisplay}</div>
                </div>
                <div className='w-[20%] h-full flex flex-col items-end justify-around'>
                    <div ref={timeRef} className='text-gray-600 text-[0.8rem] sm:text-[0.9rem]'>{lastMessage.lastMsgTime}</div>
                    <div>
                        <div className={`w-2 h-2 rounded-full ${lastMessage.lastMsgReadStatus === "unread" ? "bg-red-600" : ""}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConversationCard