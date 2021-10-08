import React, { useState, useEffect } from 'react';
import { Navbar as Navb, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    const router = useRouter();

    const moveToRoute = (routeName) => {
        router.push(`/${routeName}`)
    }

    return (
        <Navb bg="light" expand="lg" className={`light ${styles.greenBg} ${styles.whiteText}`}>
            <Container>
                <Navb.Brand href="#home">React-Bootstrap</Navb.Brand>
                <Navb.Toggle aria-controls="basic-navbar-nav" />
                <Navb.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link onClick={() => moveToRoute('about-us')}>About Us</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navb.Collapse>
            </Container>
        </Navb >
    )
}

export default Navbar;