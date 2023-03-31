import React from "react";
import "./login.css"
import {Button} from "../../components/button/button";
import {TextInput} from "../../components/textInput/textInput";

export function Login() {
    return (
        <div className="loginContainer">
            <TextInput placeholder="Email" className={"loginTextInput"}/>
            <TextInput placeholder="Password" className={"loginTextInput"}/>
            <Button label="Submit"/>
        </div>
    );
}