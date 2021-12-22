import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';



const NavBar = () => {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mi Tienda </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#features">Nosotros</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
    )
}

export default NavBar
