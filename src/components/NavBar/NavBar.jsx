
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../NavBar/NavBar.css"


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Link to="/">
                    <h3>SucuRex</h3>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex">
                    <Nav className="me-auto flex ">
                        <Link to="/category/Ofertas">
                            ¡¡¡Ofertas!!!
                        </Link>
                        <NavDropdown title="Plantas" id="basic-nav-dropdown" className="textStyle">
                            <NavDropdown.Item as={Link} to={"/category/Plantas de interior"} >
                                Plantas de interior
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/category/Plantas de exterior"}>
                                    Plantas de exterior
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/category/Macetas">
                            Macetas
                        </Link>
                        <Link to="/category/Insumos">
                            Insumos
                        </Link>
                        <Link to="/category/Decoracion">
                            Decoracion
                        </Link>
                        <Link to="/">
                            Todos
                        </Link>
                        <Link to ="/cart" style={{hover:"color:green"}}><CartWidget /></Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
