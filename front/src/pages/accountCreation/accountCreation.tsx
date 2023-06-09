import React, {useRef} from "react";
import {TextInput} from "../../components/textInput/textInput";
import {Button} from "../../components/button/button";
import "./accountCreation.css";

export function AccountCreation() {
    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    async function createAccount() {
        return fetch(`http://${process.env.REACT_APP_API_HOST}:8080/client/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: emailInput.current?.value, password: passwordInput.current?.value, pseudo: "", firstname: firstNameInput.current?.value, lastname: lastNameInput.current?.value})
        })
            .then(response => response.ok ? window.location.href = window.origin : "")
    }

    return (
        <div className="accountCreationContainer">
            <TextInput placeholder="First name" inputReference={firstNameInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Last name" inputReference={lastNameInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Email" inputReference={emailInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Password" inputReference={passwordInput} className="accountCreationTextInput"/>
            <Button label="Submit" onClick={createAccount}/>
        </div>
    );
}