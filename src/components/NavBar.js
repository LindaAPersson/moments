import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand><img src={logo} alt="logo" height="45px" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact className={styles.NavLink}
                            activeClassName={styles.Active} to="/"><i class="fa-solid fa-house"></i>Home</NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active} to="/signin"><i class="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active} to="/signup"><i class="fa-solid fa-user"></i>Sign up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar