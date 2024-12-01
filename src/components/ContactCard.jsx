import React from 'react'
import { FaPlus } from "react-icons/fa6";


const ContactCard = ({contact, setContactModalVisible}) => {
  return (
    <div className='flex justify-between items-center gap-10 py-0 border-b border-gray-400'>
        <div className='flex items-center gap-2 max-w-[300px] py-2'>
            <img src={contact.profileImg} alt="Image" className='rounded-full w-10 h-10 border-1'/>
            <h2 className='text-md'>{contact.name}</h2>
        </div>
        <div>
            <button onClick={()=>setContactModalVisible(false)} className='flex justify-center items-center rounded-full cursor-pointer w-8 h-8 hover:bg-gray-800 hover:text-gray-100'><FaPlus className='text-md'/></button>
        </div>
    </div>
  )
}

export default ContactCard