import React, {useRef} from "react";
import {Button} from "../../components/button/button";
import {TextInput} from "../../components/textInput/textInput";
import "./login.css";

export function Login() {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    async function loginUser(event: React.MouseEvent) {
        event.preventDefault();
        return fetch(`http://${process.env.REACT_APP_API_HOST}:8080/client/auth/login`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: emailInput.current?.value, password: passwordInput.current?.value})
        })
            .then(response => response.clone().json())
            .then(data => {
                localStorage.setItem("user", JSON.stringify(data))
                window.location.href = window.origin + "/products"
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