import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return <Container fluid as="header" data-aos={'fade'}>
            <Row>
                <Col>
                    <Navbar expand="lg">
                        <Navbar.Brand>
                            <Link to="/">
                                Logo
                                {/*    You can use image as logo with img tag. Styling is already done.*/}
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="ml-auto" as="ul">
                                <li className="nav-item">
                                    <NavLink exact={true} to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} to="/about-me" className="nav-link">
                                        About Me
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} to="/contact-me" className="nav-link">
                                        Contact Me
                                    </NavLink>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    }
}

export default Header;