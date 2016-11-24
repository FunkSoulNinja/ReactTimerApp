import React, { Component } from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                default:
                    return;
            }
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({ count: newCount >= 0 ? newCount : 0 });
        }, 1000);
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
         });
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
