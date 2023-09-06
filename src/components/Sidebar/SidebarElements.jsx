import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: rgb(0,0,0,0.8);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(Link)`
    /* color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: maroon;
    } */

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: 40px;
    padding-bottom: 40px;
    text-decoration: none;
    list-style: none;
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;

    &.active {
        color: maroon;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
       grid-template-rows: repeat(6, 60px);
    }
`