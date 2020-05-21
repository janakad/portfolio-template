import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";

class SingleProject extends Component {


    /**
     *
     * @returns {*}
     */
    render() {
        return <Col sm={6} className={"project"} key={this.props.id} data-aos={'flip-down'}>
            <Row>
                <Col sm={6}>
                    <img className={"img-fluid"} src={this.props.thumbnail} alt={"project thumbnail"}/>
                </Col>
                <Col sm={6}>
                    <Col className={"name"}>{this.props.name}</Col>
                    <Col className={"description"}>{this.props.description}</Col>
                    <Col className={'link'}><a href={this.props.url} rel="noopener noreferrer" target='_blank'>Visit
                        website</a></Col>
                </Col>
            </Row>
        </Col>
    }


}

export default SingleProject;