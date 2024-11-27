
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatPage from './pages/ChatPage'
import NoPage from './pages/NoPage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/user/:id' element={<ChatPage />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
