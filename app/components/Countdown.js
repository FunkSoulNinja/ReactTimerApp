import React, { Component } from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

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

    handleStatusChange(newStatus) {
        this.setState({ countdownStatus: newStatus });
    }

    render() {
        const { count, countdownStatus } = this.state;
        const renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />;
            }
            return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />;
        }
        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
}

export default Countdown;
