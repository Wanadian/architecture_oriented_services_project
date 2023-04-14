import React, {useRef} from "react";
import {Button} from "../../components/button/button";
import {TextInput} from "../../components/textInput/textInput";
import "./login.css";

export function Login() {
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    return (
        <form className="loginContainer">
            <TextInput placeholder="Email" inputReference={emailInput} className={"loginTextInput"}/>
            <TextInput placeholder="Password" inputReference={passwordInput} className={"loginTextInput"}/>
            <Button label="Submit"/>
        </form>
    );
}