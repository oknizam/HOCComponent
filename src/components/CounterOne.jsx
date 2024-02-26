import React, { useState } from "react";
import withCounter from "./CounterHOC";


const CounterOne = ({ count, incrementVal }) => {
    return(
        <div>
             <h3>{count}</h3>   
            <button onClick={incrementVal}>Increment + 2</button>
        </div>
    )
}


const CounterHoc = withCounter(CounterOne,2);

export default CounterHoc;