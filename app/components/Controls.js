import React from 'react';

class Controls extends React.Component {

    renderStartStopButton() {
        const { countdownStatus } = this.props;

        if (countdownStatus === 'started') {
            return <button className="button secondary" onClick={() => this.onStatusChange('paused')}>Pause</button>;
        } else if (countdownStatus === 'paused') {
            return <button className="button primary" onClick={() => this.onStatusChange('started')}>Start</button>;
        }
    }

    onStatusChange(newStatus) {
        this.props.onStatusChange(newStatus);
    }

    render() {
        return (
            <div className="controls">
                {this.renderStartStopButton()}
                <button className="button alert hollow" onClick={() => this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
