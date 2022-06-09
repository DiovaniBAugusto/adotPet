import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/css/styles.css'
import { UserProvider } from './context/UserProvider'


export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    </UserProvider>
  )
}


