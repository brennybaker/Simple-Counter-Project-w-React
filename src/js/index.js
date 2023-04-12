//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function Counter(props){
    return (<><div className = "bigContainer">
                    <div className = "container1">
                             <div className = "clock"><img src="https://www.citypng.com/public/uploads/preview/white-clock-icon-symbol-png-11639648062guyflnf40u.png"></img></div>
                    </div>
                    <div className = "container2"> 
                            <div className = "sixth">{props.sixthDigit % 10}</div>
                            <div className = "fifth">{props.fifthDigit % 10}</div>
                            <div className = "fourth">{props.fourthDigit % 10}</div>
                            <div className = "third">{props.thirdDigit % 10}</div>
                            <div className = "second">{props.secondDigit % 10}</div>
                            <div className = "first">{props.firstDigit % 10}</div>
                    </div>
            </div></>
            )
}

Counter.propTypes = {
        firstDigit: PropTypes.number,
        secondDigit: PropTypes.number,
        thirdDigit: PropTypes.number,
        fourthDigit: PropTypes.number,
        fifthDigit: PropTypes.number,
        sixthDigit: PropTypes.number
};

let start =0;
setInterval(function(){
        const six = Math.floor(start/100000);
        const five = Math.floor(start/10000);
        const four = Math.floor(start/1000);
        const three = Math.floor(start/100);
        const two = Math.floor(start/10);
        const one = Math.floor(start/1);
console.log(six,five,four,three,two,one);
        start++;

        ReactDOM.render(<Counter sixthDigit={six} fifthDigit={five} fourthDigit={four} thirdDigit={three} secondDigit={two} firstDigit={one}/>
        , document.querySelector("#app")
);

}, 1000
);
//render your react application

