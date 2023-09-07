import React, {useState} from 'react'
import placeholder from '../assets/cross-image.jpg'

function CrossCountry() {
    return (
    <div className='cross-country'>
      <div className='team--image--container'>
          <img className='team--image' src={placeholder} />
      </div>
      <div className='info'>
        <h3 className='info-text'>Head Coach - Erika McCullough</h3>
        <h3 className='info-text'>Phone - (999) 999-9999</h3>
        <h3 className='info-text'>Email - mccullough@email.com</h3>
        <h3 className='info-text'>Assistant Coach - Jacob Sites</h3>
        <h3 className='info-text'>Email - jsites@newarkcityschools.org</h3>
      </div>
      <div class='button-wrapper'>
        <div className='right-column'>
          <a class='xc-buttons' href='https://instagram.com/nhswildcatsxc/'>button</a>
          <a class='xc-buttons'>button</a>
          <a class='xc-buttons'>button</a>
        </div>
        <div className='left-column'>
          <a class='xc-buttons'>button</a>
          <a class='xc-buttons'>button</a>
          <a class='xc-buttons'>button</a>
        </div>
        <div className='centered-button'>
          <a class='xc-buttons'>button</a>
        </div>
      </div>
    </div>
  )
}

export default CrossCountry