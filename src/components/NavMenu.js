import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


function NavMenu() {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{margin:'0px'}}>
            <Container>
                <Navbar.Brand href="#home" style={{color:'#f1356d',fontWeight:'bold',textSize:'20px'}}>EShopping Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{marginLeft:'400px'}}>
                    <Nav.Link href="/">Home</Nav.Link>

                    {/*<NavDropdown title="Product" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/products">All Products</NavDropdown.Item> 
                    <NavDropdown.Item href="/add-product/_add">Add Product</NavDropdown.Item>                   
                    </NavDropdown>*/}
                    <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/users">All Users</NavDropdown.Item>
                    <NavDropdown.Item href="/users">My Orders</NavDropdown.Item>                    
                    </NavDropdown>
                    <Nav.Link href="/add-user/_add" style={{ color: 'white', backgroundColor: '#f1356d',width:'85px',borderRadius: '8px',textAlign:'center' }}>Register</Nav.Link>
                    <Nav.Link href="/login" style={{ color: 'white', backgroundColor: '#f1356d',width:'85px',borderRadius: '8px',textAlign:'center' }}>Login</Nav.Link>
                    <Nav.Link href="/getCart"><img src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" className="cart"></img></Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>


        </div>
    )
}

export default NavMenu
