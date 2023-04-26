import React from "react";
import {OrderCard} from "../../modules/orderCard/orderCard";
import "./orders.css";
import {OrderResponse} from "../../backendSetup/orderFormat";

export function Orders() {
    const orderResponse : OrderResponse[] = [
        {id: "1", price: 20, date: new Date(), products: [{id: "id", name: "name", price: 20}, {id: "id", name: "name", price: 20}]},
        {id: "2", price: 1000, date: new Date(), products: [{id: "id", name: "product", price: 50}, {id: "id", name: "name", price: 20}]},
        {id: "3", price: 25, date: new Date(), products: [{id: "id", name: "name", price: 20}, {id: "id", name: "name", price: 20}]},
        {id: "4", price: 1, date: new Date(), products: [{id: "id", name: "name", price: 20}, {id: "id", name: "name", price: 20}]}
    ]

    return (
        <div className={"ordersContainer"}>
            {orderResponse.map(order => (
                <OrderCard date={order.date} price={order.price} products={order.products}/>
            ))
            }
        </div>
    );
}