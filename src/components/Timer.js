import React from 'react';
import convertTime from '../util/convertTime';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat'
import * as utc from 'dayjs/plugin/utc';
import { Spinner } from 'react-bootstrap';

// mainly based off of this post https://stackoverflow.com/questions/40885923/countdown-timer-in-react
// modified for this project for my own purposes

dayjs.extend(utc);
dayjs.extend(customParseFormat);

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: "000:00:00:00", remainingTime: dayjs(this.props.dueDate, "YYYY-MM-DD").diff((new Date()).getTime()) }
        this.timerRunning = 0;
    }

    componentDidMount() {
        this.setState({
            time:
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerRunning);
    }

    startTimer = () => {
        if (this.timerRunning === 0 && this.state.remainingTime > 0) {
            this.timerRunning = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {
        // we subtract the remaining time a second and set the state once more
        let newTime = this.state.remainingTime - 1000;
        this.setState({
            time: convertTime(newTime),
            remainingTime: newTime
        });

        if (newTime === 0) {
            clearInterval(this.timerRunning)
        }
    }

    render() {
        return (
            <div id={this.props.id} onLoad={this.startTimer()} className={this.state.remainingTime > 0 ? "todo-item" : "due todo-item"}>
                {this.state.remainingTime > 0 ? this.state.time : "TIME IS UP"}
            </div>
        )
    }
}