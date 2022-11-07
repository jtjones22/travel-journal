import React from "react";
import globeIcon from '../images/globe-icon.png'

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="navbar--globe" alt="globe" src={globeIcon} />
            <h1 className="navbar--title">my travel journal</h1>
        </nav>
    )
}