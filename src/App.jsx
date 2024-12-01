
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import NoPage from './pages/NoPage'
import ConversationPage from './pages/ConversationPage'
import { useState } from 'react'
import messages from './components/messages.js'

function App() {

  const [selectedChatUser, setSelectedChatUser] = useState("");
  const [allMessages, setAllMessages] = useState(messages);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user/:loggedinUsername' element={<ChatPage selectedChatUser={selectedChatUser} setSelectedChatUser={setSelectedChatUser} allMessages={allMessages} setAllMessages={setAllMessages} />} />
          <Route path='/user/:loggedinUsername/conversation/:conversationUsername' element={<ConversationPage selectedChatUser={selectedChatUser} allMessages={allMessages} setAllMessages={setAllMessages} />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
