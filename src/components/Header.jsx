import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary position-fixed w-100">
        <Container>
         <Link to={'/'}>
         <Navbar.Brand style={{zIndex:1}}>
            <i className="fa-solid fa-music me-2"></i>
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header
