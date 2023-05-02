import React from "react";
import {Button} from "../../components/button/button";
import "./home.css";

export function Home() {
    return (
        <div className="homeContainer">
            <div className="homeTitle">Welcome to your Online Grocery store</div>
            <div className="homeButtonContainer">
                <Button label={"Create account"} href={window.origin + "/account/create"}/>
                <Button label={"Sign in"} href={window.origin + "/account/login"}/>
            </div>
        </div>
    );
}