import React from 'react'
import users from './usersData'
import ContactCard from './ContactCard'
import { FaXmark } from "react-icons/fa6";

const ContactListModal = ({ setContactModalVisible }) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-gray-800/80 z-40'>
      <div className='flex flex-col max-w-[90vw] w-[450px]'>
        <div>
          <FaXmark onClick={() => setContactModalVisible(false)} className='z-50 cursor-pointer text-white float-right text-2xl h-8 p-1' />
        </div>

        <div className='flex flex-col bg-gradient-to-r from-indigo-400/70 to-cyan-400/70 max-h-[70vh] overflow-auto'>
          <div className='w-full text-center text-gray-100 bg-gray-800 p-2'>

            Contact List

          </div>

          <div className='p-0 px-6 bg-gray-50/70 w-full'>
            {
              users.map((user, index) => {
                return <ContactCard key={index} contact={user} setContactModalVisible={setContactModalVisible} />
              })
            }
          </div>

        </div>


      </div>

    </div>

  )
}

export default ContactListModal