import React, {Component} from 'react';
import {Col, ProgressBar} from "react-bootstrap";

class SkillBarItem extends Component {
    render() {
        return <Col sm={6} className="skill-item" data-aos={'flip-up'}>
            <Col className="skill-label">
                {this.props.label}
            </Col>
            <Col className="skill-progress">
                <ProgressBar animated now={this.props.progress} label={`${this.props.progress}%`}/>
            </Col>
        </Col>
    }
}

export default SkillBarItem;