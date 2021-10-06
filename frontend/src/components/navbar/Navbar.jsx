import React from 'react'
import "./navbar.css";
import { Button } from '@mui/material'

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Logo</h1>
            <Button className="navbar-btn" variant="contained"> Post</Button>       
        </div>
    ) 
} 

export default Navbar
