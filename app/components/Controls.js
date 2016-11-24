import React from 'react';

class Controls extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    renderStartStopButton() {
        const { countdownStatus } = this.props;

        if (countdownStatus === 'started') {
            return <button className="button secondary">Pause</button>;
        } else if (countdownStatus === 'paused') {
            return <button className="button primary">Start</button>;
        }
    }

    render() {
        return (
            <div>
                {this.renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
};

export default Controls;
