import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
<Navbar className="bg-danger" style={{marginTop:'-20px'}}>
        <Container >
          <Navbar.Brand className='fw-bolder '>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
              <i className="fa-solid fa-upload fa-bounce"></i>{' '}
      Media Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>  )
}

export default Header