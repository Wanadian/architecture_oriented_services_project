import {TextInputProps} from "./textInput.type";
import "./textInput.css";

export function TextInput ({placeholder, className} : TextInputProps) {
    return(
        <input className={`textInput ${className}`} name={placeholder} id={placeholder} type="text" placeholder={placeholder}></input>
    )
}