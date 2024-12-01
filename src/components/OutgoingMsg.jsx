import React from 'react'

const OutgoingMsg = ({ msgObject, profileImgToSHow, loggedInUser }) => {

  const getWindowDimension = () => {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    return { width, height }
  };

  return (
    <div className='w-full my-3 flex'>
      <div className={`ml-auto px-4 rounded-3xl rounded-tr-none bg-gradient-to-r from-gray-400/50 to-purple-400/80 w-fit max-w-[70%]`}>
        <div className='pt-2 text-sm'><pre className='font-["Poppins"] text-wrap'>{msgObject.text}</pre></div>
        <div className='text-gray-600 text-[13px] pb-1'>{msgObject.timestamp.split(":")[0] + ":" + msgObject.timestamp.split(":")[1]}</div>
      </div>
      <div className=''>
        {
          profileImgToSHow ?
            <img src={loggedInUser.profileImg} alt="profileImage" className='w-8 h-8 rounded-full ml-1 -mt-5 object-cover' /> : ""
        }
      </div>
    </div>
  )
}

export default OutgoingMsg