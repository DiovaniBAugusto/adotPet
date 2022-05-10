import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  )
}

export default App
