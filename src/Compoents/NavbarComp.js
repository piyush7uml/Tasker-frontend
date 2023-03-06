import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { userLogoutAction } from '../Actions/userActions';

const NavbarComp = () => {


    const userLogin = useSelector(state => state.userLogin)

    const { userInfo } = userLogin

    const dispatch = useDispatch();


    const logoutHandler = () => {
        dispatch(userLogoutAction())
    }



    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Tasker</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {(userInfo && userInfo.id) ? (<>

                            <NavDropdown title={userInfo.firstname} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                            </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                            </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>

                        </>) : (<>
                            <LinkContainer to="/login">
                                <Nav.Link href="#home">Login</Nav.Link>
                            </LinkContainer>
                        </>)}



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
