import React from 'react'

const OutgoingMsg = ({msgObject}) => {
  return (
    <div className='w-full my-3'>
        <div className='ml-auto px-4 rounded-3xl rounded-tr-none bg-gradient-to-r from-gray-400/50 to-purple-400/80 w-fit max-w-[70%]'>
            <div className='pt-2'>{msgObject.text}</div>
            <div className='text-gray-700 text-[13px] pb-1'>{msgObject.timestamp.split(":")[0] + ":" +msgObject.timestamp.split(":")[1]}</div>
        </div>
    </div>
  )
}

export default OutgoingMsg