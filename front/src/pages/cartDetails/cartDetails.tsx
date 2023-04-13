import React from "react";
import "./cartDetails.css";
import {OrderProductCard} from "../../modules/orderProductCard/orderProductCard";

export function CartDetails() {
    const price = 0;
    const products = [{id: "id", name: "name", price: 20}, {id: "id", name: "name", price: 20}];

    return (
        <div className="cartDetailsContainer">
            <h1>{`Your order : ${price}$`}</h1>
            <ul className={"orderCardProductList"}>
                {products.map(product =>
                    <OrderProductCard name={product.name} price={product.price}></OrderProductCard>
                )}
            </ul>
        </div>
    );
}