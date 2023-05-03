import React, {useState} from "react";
import {OrderProductCard} from "../../modules/orderProductCard/orderProductCard";
import {Button} from "../../components/button/button";
import "./cartDetails.css";
import {ProductResponse} from "../../backendSetup/productFormat";

export function CartDetails() {
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

    const resetCart = () => localStorage.removeItem("cart");

    return (
        <div className="cartDetailsContainer">
            <h1>{`Your order : ${renderPrice(cart)}$`}</h1>
            <ul className={"orderCardProductList"}>
                {cart.map(product =>
                    <OrderProductCard key={product.id} name={product.name} price={product.price}></OrderProductCard>
                )}
            </ul>
            <Button label={"Validate"} href={window.origin + "/payment"}/>
            <Button label={"Clear"} onClick={resetCart}/>
        </div>
    );
}