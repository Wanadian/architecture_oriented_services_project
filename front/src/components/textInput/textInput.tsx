import {TextInputProps} from "./textInput.type";
import "./textInput.css";
import React, {useState} from "react";


export function TextInput ({placeholder, defaultValue = "", inputReference, className} : TextInputProps) {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    return(
        <input
            className={`textInput ${className}`}
            value={inputValue}
            ref={inputReference}
            onChange={handleChange}
            type="text"
            placeholder={placeholder}
        />
    )
}