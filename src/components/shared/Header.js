import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: "24px"
}
const authenticatedOptions = (
	<>
        <Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
        <Nav.Link>
            <Link to='/create-character' style={linkStyle}>Create</Link>
        </Nav.Link>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change PW
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Exit
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>New</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar fixed='bottom' variant='light' expand='md'>
        <Container  className='ui-container' style={{width: "fit-content"}}>
            <Navbar.Brand>
                <Link to='/' style={linkStyle}>
                    <img
                    alt=""
                    src="images/Junimo.gif"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-6'>
                    {user ? authenticatedOptions : unauthenticatedOptions}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header
