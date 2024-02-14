import React from "react";
import withLogging from "./components/HOC";


const InputText = ({ label, type = "text", placeholder = "Enter text", value = "", onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} value={value}
                onChange={onChange}
            />
        </div>
    )


}

const InputTextWithLog = withLogging(InputText);

export default InputTextWithLog;