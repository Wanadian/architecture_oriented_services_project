import {ButtonProps} from "./button.type";
import "./button.css";

export function Button ({label, onClick, className} : ButtonProps) {
    return(
        <button className={`button ${className}`} onClick={onClick}>
            <div className={"label"}>{label}</div>
        </button>
    )
}