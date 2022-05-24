import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './public/css/styles.css'


export function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  )
}


