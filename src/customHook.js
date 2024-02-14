import React, { useState, useEffect } from "react";


const WindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleWindowSize);

        return () => {
            window.removeEventListener("resize", handleWindowSize)
        }


    }, []);


    return width;
}

export default WindowSize;