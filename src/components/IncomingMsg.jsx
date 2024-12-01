import React from 'react'

const IncomingMsg = ({ msgObject, profileImgToSHow, selectedChatUser }) => {



  return (
    <div className='w-full my-3 flex'>
      <div className=''>
        {
          profileImgToSHow ?
            <img src={selectedChatUser.profileImg} alt="profileImage" className='w-8 h-8 rounded-full mr-1 -mt-5 object-cover' /> : ""
        }
      </div>

      <div className={`mr-auto px-4 rounded-3xl rounded-tl-none bg-gradient-to-r from-indigo-400/40 to-cyan-500/30 w-fit max-w-[70%] `}>
          <div className='pt-2 text-sm'><pre className='font-["Poppins"] text-wrap'>{msgObject.text}</pre></div>
          <div className='text-gray-600 text-[13px] pb-1 text-right'>{msgObject.timestamp.split(":")[0] + ":" + msgObject.timestamp.split(":")[1]}</div>
      </div>
    </div>
  )
}

export default IncomingMsg