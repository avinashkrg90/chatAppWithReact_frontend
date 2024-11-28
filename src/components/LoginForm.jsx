import React, { useEffect, useState } from 'react'
import user from '../assets/userImage.png'
import { FaUpload } from "react-icons/fa6";
import { GiConsoleController } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'

const LoginForm = () => {

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true)
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState(
    {
      username: "testUser",
      password: "testUser",
      firstname: "",
      lastname: "",
    }
  )
  const [userCredential, setUserCredential] = useState([{ username: "testUser", password: "testUser", image: preview }])

  const verifyCredentials = () => {
    let result = false;
    let userFound = false;
    userCredential.map((user) => {
      if (user.username === formData.username) {
        userFound = true;
        if (user.password === formData.password) {
          return result = true;
        } else {
          toast.error('Incorrect password')
        }
      }
    })
    if (!userFound){
      toast.error('User not found')
    }
    return result;
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (verifyCredentials()) {
      navigate(`/user/${formData.username}`)
      toast.success(`Welcome, ${formData.username}`)
    }
  }

  const handleSignupClick = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.firstname || !formData.lastname) {
      toast.error('All fields are required!')
    } else {
      toast.success('User registered successfully!')
      setUserCredential([...userCredential, { username: formData.username, password: formData.password, image: preview }])
      setShowLogin(true);
    }
  }

  //ser profile image
  const setAvatar = (e) => {
    setImage(e.target.files[0])
  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }
  }, [image])

  useEffect(() => {
    if (!showLogin) {
      setFormData({ ...formData, username: "", password: "" })
    }

  }, [showLogin])

  return (
    <>
      <div className='border-1 border-gray-200 p-8 px-2 sm:px-8 rounded-xl bg-gray-100/60 w-[90%] max-w-[600px] flex flex-col items-center'>
        {
          showLogin ? <h1 className='text-xl sm:text-2xl text-black mb-5'>Welcome back</h1>
            : <h1 className='text-xl sm:text-2xl text-black mb-5'>Welcome to chat app</h1>
        }
        {
          showLogin ? " " :
            <>
              <div className='w-full mb-2'>
                <div className='relative m-auto w-20 h-20 rounded-full overflow-hidden'>
                  <img className='object-cover m-auto border-2 w-20 h-20 rounded-full' src={preview ? preview : user} alt="user Avatar" />
                  <input onChange={setAvatar} type="file" id='userAvatar' className='hidden' />

                  <label htmlFor="userAvatar" className='z-10  absolute top-[0px] left-[0px] w-20 h-20 rounded-full cursor-pointer'>
                    <div className={`w-full h-full flex justify-center items-center ${preview ? "text-gray-800/0 hover:text-sky-600" : 'text-gray-800/100 hover:text-sky-600'} ${preview ? "bg-gray-200/10" : "bg-gray-200/70"} imageInput`}>
                      <FaUpload className={`text-2xl`} />
                    </div>
                  </label>
                </div>
              </div>
              <div className='float-left w-[70%] mb-1'><label htmlFor="firstName" className='labelForInput'>First name</label></div>
              <input onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} type="text" placeholder='First name' className='inputBox' />
              <div className='float-left w-[70%] mb-1'><label htmlFor="lastName" className='labelForInput'>Last name</label></div>
              <input onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} type="text" placeholder='Last name' className='inputBox' />
            </>
        }

        <div className='float-left w-[70%] mb-1'><label htmlFor="username" className='labelForInput'>Username</label></div>
        <input onChange={(e) => setFormData({ ...formData, username: e.target.value })} type="text" placeholder='username' className='inputBox' value={formData.username} />
        <div className='float-left w-[70%] mb-1'><label htmlFor="password" className='labelForInput'>Password</label></div>
        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder='Password' className='inputBox' value={formData.password} />
        {
          showLogin ? <button onClick={handleLoginClick} type='submit' className='btn'>Log in</button>
            : <button onClick={handleSignupClick} type='submit' className='btn'>Sign up</button>
        }

        {/* <hr className='w-full text-gray-600' /> */}
        <div className='border-t-[1px] border-gray-500 w-[70%] my-4'></div>
        {
          showLogin ?
            <h2 onClick={() => setShowLogin(false)} className='select-none'>Do not have an account? <span className='underline cursor-pointer text-indigo-700'>sign-up</span></h2>
            :
            <h2 onClick={() => setShowLogin(true)} className='select-none'>Already have an account? <span className='underline cursor-pointer text-indigo-700'>Log-in</span></h2>
        }

      </div>
      <Toaster />
    </>
  )
}

export default LoginForm