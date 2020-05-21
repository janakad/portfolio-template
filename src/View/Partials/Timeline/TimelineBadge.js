import React, {Component} from "react";

class TimelineBadge extends Component {
    render() {
        return <div className="timeline-badge">
            <span className="timeline-balloon-date-month">{this.props.month}</span>
            <span className="timeline-balloon-date-year">{this.props.year}</span>
        </div>
    }
}

export default TimelineBadge;