import React, {Component} from 'react';
import Header from "../Partials/Header";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../Partials/Footer";
import ContactMe from "../Partials/ContactMe";

class About extends Component {
    render() {
        return <div>
            <Header/>
            <Container className={'about-me'} as={'section'} fluid={true} data-aos={'zoom-in'}>
                <Row>
                    <Col className={'text-center background-animation-dark'}>
                        <h2>
                            About Me
                        </h2>
                        <Col className={'description'} sm={{span: 8, offset: 2}}>
                            My awesome description
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </Col>
                    </Col>
                </Row>
            </Container>
            <ContactMe/>
            <Footer/>
        </div>
    }
}

export default About;