import {ButtonProps} from "./button.type";
import "./button.css";

export function Button ({label, href, onClick, className} : ButtonProps) {
    if(!href) {
        return (
            <button className={`buttonContainer ${className}`} onClick={onClick}>
                <div className={"buttonLabel"}>{label}</div>
            </button>
        )
    }
    else{
        return (
            <a className={`buttonContainer ${className}`} href={href}>
                <div className={"buttonLabel"}>{label}</div>
            </a>
        )
    }
}