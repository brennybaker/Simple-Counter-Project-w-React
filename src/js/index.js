import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import "../styles/index.css";

function Counter(props) {
    return (
        <div className="bigContainer">
            <div className="container1">
                <div className="clock-and-numbers">
                    <img src="https://i.pinimg.com/originals/9e/e5/fb/9ee5fbb0c90d66eea8445d13527cb635.jpg" alt="Clock" />
                    <div className="digit sixth">{props.sixthDigit % 10}</div>
                    <div className="digit fifth">{props.fifthDigit % 10}</div>
                    <div className="digit fourth">{props.fourthDigit % 10}</div>
                    <div className="digit third">{props.thirdDigit % 10}</div>
                    <div className="digit second">{props.secondDigit % 10}</div>
                    <div className="digit first">{props.firstDigit % 10}</div>
                </div>
            </div>
        </div>
    );
}

Counter.propTypes = {
    firstDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    sixthDigit: PropTypes.number
};

function App() {
    const [start, setStart] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        let interval;

        if (running) {
            interval = setInterval(() => {
                setStart(prevStart => prevStart + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [running]);

    const handleStartStop = () => {
        setRunning(prevRunning => !prevRunning);
    };

    const handleReset = () => {
        setStart(0);
    };

    const six = Math.floor(start / 100000);
    const five = Math.floor(start / 10000);
    const four = Math.floor(start / 1000);
    const three = Math.floor(start / 100);
    const two = Math.floor(start / 10);
    const one = Math.floor(start / 1);

    return (
        <div>
            <Counter sixthDigit={six} fifthDigit={five} fourthDigit={four} thirdDigit={three} secondDigit={two} firstDigit={one} />
            <div className="button-container">
                <button className="start-stop-button" onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
                <button className="reset-button" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));