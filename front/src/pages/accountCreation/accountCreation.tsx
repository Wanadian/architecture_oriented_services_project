import React, {useRef} from "react";
import {TextInput} from "../../components/textInput/textInput";
import {Button} from "../../components/button/button";
import "./accountCreation.css";

export function AccountCreation() {
    const firstNameInput = useRef<HTMLInputElement>(null);
    const lastNameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(firstNameInput.current?.value);
    }

    return (
        <div className="accountCreationContainer">
            <TextInput placeholder="First name" inputReference={firstNameInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Last name" inputReference={lastNameInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Email" inputReference={emailInput} className="accountCreationTextInput"/>
            <TextInput placeholder="Password" inputReference={passwordInput} className="accountCreationTextInput"/>
            <Button label="Submit" onClick={handleClick}/>
        </div>
    );
}