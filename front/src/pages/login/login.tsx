import React, {useRef} from "react";
import {Button} from "../../components/button/button";
import {TextInput} from "../../components/textInput/textInput";
import "./login.css";

export function Login() {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    async function loginUser() {
        return fetch('http://localhost:8080/api/v1/ms-client/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: emailInput.current?.value, password: passwordInput.current?.value})
        })
            .then(data => {
                data.json();
                localStorage.setItem("token", JSON.stringify(data))
            })
    }

    return (
        <form className="loginContainer">
            <TextInput placeholder="Email" inputReference={emailInput} className={"loginTextInput"}/>
            <TextInput placeholder="Password" inputReference={passwordInput} className={"loginTextInput"}/>
            <Button label="Submit" onClick={loginUser}/>
        </form>
    );
}