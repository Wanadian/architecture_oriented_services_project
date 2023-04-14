import {Button} from "../../components/button/button";
import React, {useState} from "react";
import {TextInput} from "../../components/textInput/textInput";
import "./payment.css";

export function Payment() {
    const price = 100;
    const [isAccepted, setIsAccepted] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleClick = () => {
        setIsAccepted(true);
        setIsSent(true);
    }

    return (
        <div className={`paymentContainer ${isSent? "sentPayment" : ""}`}>
            <h1 className={isSent? `${isAccepted ? "acceptedPayment" : "refusedPayment"}` : ""}>{`${price}$`}</h1>
            {!isSent &&
                <>
                    <div>
                        <TextInput className={"paymentTextInput"} placeholder={"First and last name of the holder"}/>
                        <TextInput className={"paymentTextInput"} placeholder={"Card number"}/>
                        <TextInput className={"paymentTextInput"} placeholder={"Card verification code"}/>
                        <TextInput className={"paymentTextInput"} placeholder={"Date expiration"}/>
                    </div>
                    <Button label={"Validate"} onClick={handleClick}/>
                </>
            }
            {isSent &&
                <span className={isAccepted ? "acceptedPayment" : "refusedPayment"}>
                    {isAccepted ? "Thank you for your trust" : "Oops! Something went wrong please try again"}
                </span>
            }
            {isSent && !isAccepted &&
                <Button label={"Go back to my cart"} href={window.origin + "/cartDetails"}/>
            }
        </div>
    );
}