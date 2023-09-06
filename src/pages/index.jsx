import React, {useState} from 'react'
import placeholder from '../assets/cross-image.jpg'
import instagram from '../assets/instagram.png'
import logo from '../assets/logo.png'

function Home() {
    return (
    <div className="home">
        <div className='team--image--container'>
            <img className='team--image' src={placeholder} />
        </div>
        <div className='left--buttons'>
            <a href="https://stackoverflow.com/questions/28634584/how-to-disable-underline-in-a-button" target='_blank'>
                <button className="home--buttons">Mens XC Top 10</button>
            </a>
            <a href="" target='_blank'>
                <button className="home--buttons">Mens Track & Field Records</button>
            </a>
        </div>
        <img className="center--logo" src={logo}/>
        <div className='right--buttons'>
            <a href="" target='_blank'>
                <button className="home--buttons">Womens XC Top 10</button>
            </a>
            <a href="" target='_blank'>
                <button className="home--buttons">Womens Track & Field Records</button>
            </a>
        </div>
    </div>
  )
}

export default Home