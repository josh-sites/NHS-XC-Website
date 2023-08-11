import React from "react";
import Logo from "../assets/logo.png"
import instagram from "../assets/instagram.png"
import xLogo from "../assets/x-logo.png"

export default function navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={Logo}/>
            <ul className="nav--buttons">
                <li><a href="#"><button className="nav--button">Home</button></a></li>
                <li><a href="#"><button className="nav--button">Cross Country</button></a></li>
                <li><a href="#"><button className="nav--button">Track & Field</button></a></li>
                <li><a href="#"><button className="nav--button">Contact</button></a></li>
            </ul>
            <a href="https://www.instagram.com/nhswildcatsxc/" target="_blank"><button className="nav--button"><img className="socialLogo" src={instagram}/></button></a>
            <a href="https://www.instagram.com/nhswildcatsxc/" target="_blank"><button className="nav--button"><img className="socialLogo" src={xLogo}/></button></a>
        </nav>
    )
}