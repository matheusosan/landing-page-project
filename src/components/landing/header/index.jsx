import React from 'react'
import { HeaderBar, Nav } from './styles'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <HeaderBar>
        <FiMenu />
        <Nav>
        <img src="" alt="" />
            <a href="##">Home</a>
            <a href="##">About Us</a>
            <a href="##">Services</a>
            <a href="##">Contact</a>
        </Nav>
            <button>Book Now</button>
    </HeaderBar>
  )
}

export default Header