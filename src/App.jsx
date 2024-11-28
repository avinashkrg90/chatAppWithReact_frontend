
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import NoPage from './pages/NoPage'
import ConversationPage from './pages/ConversationPage'
import users from './components/usersData.js'
import { useState } from 'react'

function App() {

  const [selectedChatUser, setSelectedChatUser] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user/:loggedinUsername' element={<ChatPage selectedChatUser={selectedChatUser} setSelectedChatUser={setSelectedChatUser} />} />
          <Route path='/user/:loggedinUsername/conversation/:conversationUsername' element={<ConversationPage selectedChatUser={selectedChatUser}/>} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
