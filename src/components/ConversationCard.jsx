import React, { useRef } from 'react'


const ConversationCard = ({image, name, lastMessage, time, onlineStatus, readStatus}) => {

    const nameRef = useRef();
    const lastMessageRef = useRef();
    const timeRef = useRef();

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

    const handleConversationClick = (e) => {

    }

  return (
    <>
        <div onClick={handleConversationClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='duration-75 w-full bg-gray-50/60 hover:bg-gray-800 p-2 h-20 flex items-center rounded-sm border-b-2'>
            <div className='w-[20%] min-w-[4rem] max-w-[4rem] relative flex justify-start items-center '>
                <img src={image} alt="avatar" className='border-2 rounded-full w-16 h-16 object-cover'/>
                <div className={`absolute top-[5px] right-[2px] w-3 h-3 rounded-full ${onlineStatus === "online" ? "bg-green-600 shadow-[-2px_1px_5px_rgb(255,255,255,0.8)]" : ''} `}></div>
            </div>
            <div className='w-[60%] flex flex-col items-start px-2 overflow-hidden'>
                <div ref={nameRef} className='font-normal text-[0.9rem] sm:text-[1.2rem]'>{name}</div>
                <div ref={lastMessageRef} className='text-gray-600 text-[0.8rem] sm:text-[0.9rem] text-nowrap'>{lastMessage}</div>
            </div>
            <div className='w-[20%] h-full flex flex-col items-end justify-around'>
                <div ref={timeRef} className='text-gray-600 text-[0.8rem] sm:text-[0.9rem]'>{time}</div>
                <div>
                    <div className={`w-2 h-2 rounded-full ${readStatus === "unread" ? "bg-red-600" : ""}`}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ConversationCard