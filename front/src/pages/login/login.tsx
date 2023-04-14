import React from "react";
import {Button} from "../../components/button/button";
import {TextInput} from "../../components/textInput/textInput";
import "./login.css";

export function Login() {
    return (
        <div className="loginContainer">
            <TextInput placeholder="Email" className={"loginTextInput"}/>
            <TextInput placeholder="Password" className={"loginTextInput"}/>
            <Button label="Submit"/>
        </div>
    );
}