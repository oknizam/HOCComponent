import React from "react";

const withLogging = (WrapperComponent) => {
    const WithLogging = (props) => {
        return (
            <WrapperComponent {...props}/>
        )
    }

    return WithLogging;
}

export default withLogging;