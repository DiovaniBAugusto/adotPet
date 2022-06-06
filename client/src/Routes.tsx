import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import Teste from "./pages/teste";

export default () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/teste" element={<Teste/>} />
        </Routes>
    )
}