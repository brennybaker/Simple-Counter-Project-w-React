//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function Counter(props){
    return (<><div className = "bigContainer">
                    <div className = "container1">
                             <div className = "clock"><img src ="https://static.vecteezy.com/system/resources/previews/019/923/746/non_2x/clock-face-icon-black-and-white-transparent-background-free-png.png"></img></div>
                    </div>
                    <div className = "container2"> 
                            <div className = "first">{props.firstDigit}</div>
                            <div className = "second">{props.secondDigit}</div>
                            <div className = "third">{props.thirdDigit}</div>
                            <div className = "fourth">{props.fourthDigit}</div>
                            <div className = "fifth">{props.fifthDigit}</div>
                            <div className = "sixth">{props.sixthDigit}</div>
                    </div>
            </div></>
            )
}
//render your react application
let counter = 0;
setInterval(function(){
ReactDOM.render(<Counter firstsDigit />, document.querySelector("#app")
);
},1000);