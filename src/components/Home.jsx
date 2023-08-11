import React from "react"
import placeholder from "../assets/placeholder.png"

export default function Home() {
    return (
        <div className="home" href="Home">
            <ul className="left--buttons">
                <li><a href=""><button>Mens XC Top 10</button></a></li>
                <li><a href=""><button>Mens Track & Field Records</button></a></li>
            </ul>
            <img className="center--logo" src={placeholder}/>
            <ul className="right--buttons">

            </ul>
        </div>
    )
}