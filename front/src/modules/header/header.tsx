import React, {useState} from "react";
import shoppingCartIcon from "./assets/shoppingCartIcon.svg";
import "./header.css";
import {showHeaderLinks} from "./header.utils";

export function Header(){
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return(
        <div className="header">
            <a className={"headerLink"} href={window.origin + "/products"}>
                Grocery store
            </a>
            {showHeaderLinks() &&
                <span className="headerMenuContainer">
                    <a className="headerMenuCartImage"  href={window.origin + "/cartDetails"}>
                        <img src={shoppingCartIcon}/>
                    </a>
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
                                    <a href={window.origin + "/orders"}>My orders</a>
                                </li>
                                <li>
                                    <a href={window.origin}>Log out</a>
                                </li>
                            </ul>
                        </nav>
                </span>
            }
        </div>
    );
}