import React from 'react';
import { 
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import xLogo from '../../assets/x-logo.png';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img className='logo' src={logo} alt='logo'/>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/cross-country" activestyle>
                    Cross Country
                </NavLink>
                <NavLink to="/track-field" activestyle>
                    Track & Field
                </NavLink>
                <NavLink to="/contact" activestyle>
                    Contact
                </NavLink>
            </NavMenu>
            <div className='socials'>
                <NavLink to="https://instagram.com/nhswildcatsxc/">
                    <img className='social-logo' src={instagram} alt="instagram"/>
                </NavLink>
                <NavLink to="https://twitter.com/NHSWildcatsXC">
                    <img className='social-logo' src={xLogo} alt='x-logo'/>
                </NavLink>
            </div>
        </Nav>
    </>
  )
}

export default Navbar