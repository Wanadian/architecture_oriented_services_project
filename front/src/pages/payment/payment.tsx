import {Button} from "../../components/button/button";
import React, {useRef, useState} from "react";
import {TextInput} from "../../components/textInput/textInput";
import "./payment.css";
import {ProductResponse} from "../../backendSetup/productFormat";

export function Payment() {
    const nameInput = useRef<HTMLInputElement>(null);
    const cardNumberInput = useRef<HTMLInputElement>(null);
    const cardCodeInput = useRef<HTMLInputElement>(null);
    const dateInput = useRef<HTMLInputElement>(null);

    const [isAccepted, setIsAccepted] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const cartStater  = () : ProductResponse[] => {
        const currentCart = localStorage.getItem("cart");
        return !!currentCart ? JSON.parse(currentCart) : [];
    }

    const [cart, setCart] = useState<ProductResponse[]>(cartStater());

    const renderPrice = (cart: ProductResponse[]) => {
        let price : number = 0;
        !!cart ? cart.map(product => price = price + product.price) : console.warn("No cart running");
        return price;
    }

    async function confirmOrder (event: React.MouseEvent) {
        event.preventDefault();
        return fetch(`http://${process.env.REACT_APP_API_HOST}:8080/api/v1/ms-client/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cardNumber: cardNumberInput.current?.value, cardLimitDate: dateInput.current?.value, cardSecret: cardCodeInput.current?.value, price: renderPrice(cart), clientId: ""})
        })
            .then(response => {
                response.ok ? setIsAccepted(true) : setIsAccepted(false);
                setIsSent(true);
            })
            .catch(reason => {
                setIsAccepted(false);
                setIsSent(true);
            })
    }

    return (
        <div className={`paymentContainer ${isSent? "sentPayment" : ""}`}>
            <h1 className={isSent? `${isAccepted ? "acceptedPayment" : "refusedPayment"}` : ""}>{`${renderPrice(cart)}$`}</h1>
            {!isSent &&
                <>
                    <div>
                        <TextInput className={"paymentTextInput"} inputReference={nameInput} placeholder={"First and last name of the holder"}/>
                        <TextInput className={"paymentTextInput"} inputReference={cardNumberInput} placeholder={"Card number"}/>
                        <TextInput className={"paymentTextInput"} inputReference={cardCodeInput} placeholder={"Card verification code"}/>
                        <TextInput className={"paymentTextInput"} inputReference={dateInput} placeholder={"Date expiration"}/>
                    </div>
                    <Button label={"Validate"} onClick={confirmOrder}/>
                </>
            }
            {isSent &&
                <span style={{marginBottom: 10}} className={isAccepted ? "acceptedPayment" : "refusedPayment"}>
                    {isAccepted ? "Thank you for your trust" : "Oops! Something went wrong please try again"}
                </span>
            }
            {isSent && !isAccepted &&
                <Button label={"Go back to my cart"} href={window.origin + "/cartDetails"}/>
            }
        </div>
    );
}