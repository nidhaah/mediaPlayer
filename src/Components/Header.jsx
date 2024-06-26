import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
    <Container>
      <Navbar.Brand >
      <FontAwesomeIcon className='text-warning' icon={faVideo} beat size='2xl'/>
        <span className='text-warning ms-2 fs-4' >Media Fusion</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
