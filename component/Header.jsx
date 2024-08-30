import React from "react"
import { Link } from "react-router-dom"
import Footer from "../pages/Footer"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
          
        </header>
    )
}