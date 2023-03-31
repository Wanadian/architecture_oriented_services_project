import React from "react";
import "./home.css"
import {Button} from "../../components/button/button";

export function Home() {
    return (
        <div className="homeContainer">
            <div className="homeTitle">Welcome to your Online Shop</div>
            <div className="homeButtonContainer">
                <Button label={"Create account"}/>
                <Button label={"Sign in"}/>
            </div>
        </div>
    );
}