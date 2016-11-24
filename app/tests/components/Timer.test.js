import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from '../../components/Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('Count up', () => {
        it('should count up', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');

            expect(timer.state.count).toBe(0);
            setTimeout(() => {
                expect(timer.state.count).toBe(1);
            }, 1001);
        });

        it('should pause', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.setState({ count: 10 });
            timer.handleStatusChange('paused');

            expect(timer.state.count).toBe(10);
            setTimeout(() => {
                expect(timer.state.count).toBe(10);
                expect(timer.state.timerStatus).toBe('paused');
            }, 1001);
        });

        it('should clear timer when stopped', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.setState({ count: 10 });
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            expect(timer.state.count).toBe(0);
            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
            }, 1001);
        });
    });
});
