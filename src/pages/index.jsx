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
            <a className="home--buttons" href="https://stackoverflow.com/questions/28634584/how-to-disable-underline-in-a-button" target='_blank'>
                Mens XC Top 10
            </a>
            <a className="home--buttons" href="https://stackoverflow.com/questions/28634584/how-to-disable-underline-in-a-button" target='_blank'>
                Mens Track & Field Records
            </a>
        </div>
        <img className="center--logo" src={logo}/>
        <div className='right--buttons'>
            <a className="home--buttons" href="https://stackoverflow.com/questions/28634584/how-to-disable-underline-in-a-button" target='_blank'>
                Womens XC Top 10
            </a>
            <a className="home--buttons" href="https://stackoverflow.com/questions/28634584/how-to-disable-underline-in-a-button" target='_blank'>
                Womens Track & Field Records
            </a>
        </div>
    </div>
  )
}

export default Home