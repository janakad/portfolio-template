import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios";
import moment from 'moment';

class Footer extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            year: ''
        }
    }

    componentDidMount() {
        this.setYear();
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return <Container as={'footer'} fluid={true} data-aos={'zoom-in'}>
            <Row>
                <Col className={'background-animation-dark'}>
                    <Row>
                        <Col sm={6}>
                            <ul>
                                <li><NavLink exact={true} to={'/'}>Home</NavLink></li>
                                <li><NavLink exact={true} to={'/about-me'}>About Me</NavLink></li>
                                <li><NavLink exact={true} to={'/contact-me'}>Contact Me</NavLink></li>
                            </ul>
                        </Col>
                        <Col sm={6} className={'text-right'}>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/johndoe"><i
                                        className="fab fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.github.com/johndoe"><i
                                        className="fab fa-github-square"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.xing.com/profile/johndoe"><i
                                        className="fab fa-xing-square"></i></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'text-center'}>
                            All rights reserved. {this.state.year}.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    }

    setYear = () => {
        axios.get('/').then(response => {
            let year = moment(response.headers.date).format('YYYY');
            this.setState({year: year});
        }).catch(error => {
            console.log(error);
        });
    }

}

export default Footer;