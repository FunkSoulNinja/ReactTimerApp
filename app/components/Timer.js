import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;

                default:
                    return;
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleStatusChange(newStatus) {
        this.setState({ timerStatus: newStatus });
    }
    startTimer() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    render() {
        const { count, timerStatus } = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls onStatusChange={this.handleStatusChange.bind(this)} countdownStatus={timerStatus} />
            </div>
        );
    }
}

export default Timer;
