import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
            
            <a href="/">
                Home
            </a>
            
            <a href="/login">
                Login
            </a>
            <a href="register">
                Register
            </a>
        </nav>
    )
}