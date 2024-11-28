
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import NoPage from './pages/NoPage'
import ConversationPage from './pages/ConversationPage'
import users from './components/usersData.js'
import { useState } from 'react'

function App() {

  const [selectedChatUser, setSelectedChatUser] = useState(users[3]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user/:id' element={<ChatPage selectedChatUser={selectedChatUser} setSelectedChatUser={setSelectedChatUser} />} />
          <Route path='/user/:loggedUsername/conversation/:conversationUsername' element={<ConversationPage loggedinUser={users[0]} selectedChatUser={selectedChatUser}/>} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
