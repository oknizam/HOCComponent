import React, { useState } from "react";
import withCounter from "./CounterHOC";


const CounterTwo = ({ count, incrementVal }) => {
    return(
        <div>
             <h3>{count}</h3>   
            <button onClick={incrementVal}>Increment + 4</button>
        </div>
    )
}


const CounterHoc = withCounter(CounterTwo,4);

export default CounterHoc;