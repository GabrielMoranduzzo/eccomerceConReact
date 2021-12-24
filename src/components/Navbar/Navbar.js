import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logoTienda.png'
import { BsCart3 } from 'react-icons/bs'
import CartWidget from '../CartWidget';
import './Navbar.css'


const NavBar = () => {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img className='logo' src={logo} alt=""/>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Shop</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        
    )
}

export default NavBar
