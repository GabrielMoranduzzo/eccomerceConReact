import { Link } from 'react-router-dom'
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
                    <Link to='/'>
                        <img className='logo' src={logo} alt=""/>
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/categoria/aperitivos y otros">Aperitivos y otros</Link>
                        <Link to="/categoria/whiskies y destilados">Whiskies y destilados</Link>
                    </Nav>
                    <Link to='/Cart'>
                        <CartWidget/>
                    </Link>
                </Container>
            </Navbar>
        
    )
}

export default NavBar
