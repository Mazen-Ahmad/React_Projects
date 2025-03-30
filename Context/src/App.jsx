import { useState } from 'react'
import './App.css'
import UserContextProvider from './UserContext/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/profile'

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
