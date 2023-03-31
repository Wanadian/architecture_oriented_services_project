import "./header.css"
import {useState} from "react";

export function Header(){
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return(
        <div className="header">
            <a className={"headerLink"} href="https://www.google.com/">
                Online Shop
            </a>
            <span className="headerMenuContainer">
                <button onClick={onClick} className="headerMenuTrigger">
                    <span>Account</span>
                </button>
                <nav className={`headerMenu ${isActive ? "active" : "inactive"}`}>
                    <ul>
                        <li>
                            <a href="https://www.google.com/">Login</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Create account</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">My cart</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">My orders</a>
                        </li>
                    </ul>
                </nav>
            </span>
        </div>
    );
}