import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logoTienda.png'
import { BsCart3 } from 'react-icons/bs'
import CartWidget from './CartWidget';
import './Navbar.css'


const NavBar = () => {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container className='containerNav'>
                    <Link to='/'>
                        <img className='logo' src={logo} alt=""/>
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/categoria/aperitivos y otros" className='aperitivosCateg'>Aperitivos y Otros</Link>
                        <Link to="/categoria/whiskies y destilados" className='whiskiesCateg'>Whiskies y Destilados</Link>
                        <Link to="/categoria/vinos" className='vinosCateg'>Vinos</Link>
                        <Link to="/categoria/cervezas" className='cervezasCateg'>Cervezas</Link>
                    </Nav>
                    <Link to='/Cart'>
                        <CartWidget/>
                    </Link>
                </Container>
            </Navbar>
        
    )
}

export default NavBar
