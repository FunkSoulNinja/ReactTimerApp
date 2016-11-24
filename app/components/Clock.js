import React from 'react';

class Clock extends React.Component {

    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return minutes + ':' + seconds;
    }
    render() {
        const { totalSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};

Clock.defaultProps = {
    totalSeconds: 0
};

export default Clock;
