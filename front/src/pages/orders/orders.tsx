import React, {useEffect, useState} from "react";
import {OrderCard} from "../../modules/orderCard/orderCard";
import "./orders.css";
import {OrderResponse} from "../../backendSetup/orderFormat";

export function Orders() {
    const [orders, setOrders] = useState<OrderResponse[]>([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/ms-orders/order/user/${localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")!).email : ""}`, {mode: "cors"})
            .then(response  => response.json())
            .then(data => setOrders(data))
    },[])

    return (
        <div className={"ordersContainer"}>
            {orders.length >= 1 && orders.map(order => (
                <OrderCard key={order.id} date={order.date} price={order.price} products={order.products}/>
            ))
            }
        </div>
    );
}