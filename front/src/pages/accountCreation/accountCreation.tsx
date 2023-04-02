import React from "react";
import {TextInput} from "../../components/textInput/textInput";
import {Button} from "../../components/button/button";

export function AccountCreation() {
    return (
        <div className="accountCreationContainer">
            <TextInput placeholder="First name" className={"accountCreationTextInput"}/>
            <TextInput placeholder="Last name" className={"accountCreationTextInput"}/>
            <TextInput placeholder="Email" className={"accountCreationTextInput"}/>
            <TextInput placeholder="Password" className={"accountCreationTextInput"}/>
            <Button label="Submit"/>
        </div>
    );
}