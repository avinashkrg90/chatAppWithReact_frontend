import React from 'react'

const IncomingMsg = ({msgObject}) => {
  return (
    <div className='w-full my-3'>
        <div className='mr-auto px-4 rounded-3xl rounded-tl-none bg-gradient-to-r from-indigo-400/40 to-cyan-500/30 w-fit max-w-[70%]'>
            <div className='pt-2'>{msgObject.text}</div>
            <div className='text-gray-700 text-[13px] pb-1 text-right'>{msgObject.timestamp.split(":")[0] + ":" +msgObject.timestamp.split(":")[1]}</div>
        </div>
    </div>
  )
}

export default IncomingMsg