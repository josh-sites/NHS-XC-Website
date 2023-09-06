import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements'
import instagram from '../../assets/instagram.png';
import xLogo from '../../assets/x-logo.png';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
           <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='/cross-country' onClick={toggle}>
                    Cross Country
                </SidebarLink>
                <SidebarLink to='/track-field' onClick={toggle}>
                    Track & Field
                </SidebarLink>
                <SidebarLink to='/contact' onClick={toggle}>
                    Contact
                </SidebarLink>
            </SidebarMenu>
            <div className='sidebar--socials'>
                <SidebarLink to="https://instagram.com/nhswildcatsxc/">
                    <img className='sidebar--social-logo' src={instagram} alt="instagram"/>
                </SidebarLink>
                <SidebarLink to="https://twitter.com/NHSWildcatsXC">
                    <img className='sidebar--social-logo' src={xLogo} alt='x-logo'/>
                </SidebarLink>
            </div>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar