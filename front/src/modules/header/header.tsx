import "./header.css"
import {useState} from "react";

export function Header(){
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return(
        <div className="header">
            <a className={"headerLink"} href={window.origin + "/products"}>
                Online Shop
            </a>
            <span className="headerMenuContainer">
                <button onClick={onClick} className="headerMenuTrigger">
                    <span>Account</span>
                </button>
                <nav className={`headerMenu ${isActive ? "active" : "inactive"}`}>
                    <ul>
                        <li>
                            <a href={window.origin + "/account/login"}>Login</a>
                        </li>
                        <li>
                            <a href={window.origin + "/account/create"}>Create account</a>
                        </li>
                        <li>
                            <a href={window.origin + "/cartDetails"}>My cart</a>
                        </li>
                        <li>
                            <a href={window.origin + "/orders"}>My orders</a>
                        </li>
                    </ul>
                </nav>
            </span>
        </div>
    );
}