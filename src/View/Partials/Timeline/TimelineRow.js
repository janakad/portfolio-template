import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import TimelineItem from "./TimelineItem";
import TimelineBadge from "./TimelineBadge";

class TimelineRow extends Component {
    render() {
        return <Row className="timeline-row" key={this.props.id} data-aos={'fade-down'}>
            <TimelineBadge month={this.props.month} year={this.props.year}/>
            <TimelineItem name={this.props.name} description={this.props.description} month={this.props.month}
                          year={this.props.year} side={this.props.side} responsibilities={this.props.responsibilities}/>
        </Row>
    }
}

export default TimelineRow;