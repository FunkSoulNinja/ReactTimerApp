import React, { Component } from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    handleSetCountdown(seconds) {
        this.setState({ count: seconds });
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            </div>
        );
    }
}

export default Countdown;
