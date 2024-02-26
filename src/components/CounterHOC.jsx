import React, { useState } from "react";

const withCounter = (WrapperComponent, countVal) => {
    const Counter = (props) => {
        const [count, setCount] = useState(0);
        return (
            <WrapperComponent count={count} incrementVal={() => setCount((prev) => prev + countVal)} {...props} />
        )
    }

    return Counter;
}

export default withCounter;