import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

class ContactMe extends Component {
    render() {
        return <Container className={'contact'} fluid as={'section'} data-aos={'fade-zoom-in'}>
            <Row>
                <Col className={'text-center'}>
                    <h2 data-aos={'fade-zoom-in'}>Contact Me</h2>
                    <Col className="description" data-aos={'fade-zoom-in'}>
                        If you like to contact me feel free to <a href="mail:myawesomemail@domain.com">email
                        me to myawesomemail@domain.com</a>
                    </Col>
                </Col>
            </Row>
        </Container>
    }
}

export default ContactMe;