import React, {useEffect, useState} from "react";
import {OrderCard} from "../../modules/orderCard/orderCard";
import "./orders.css";
import {OrderResponse} from "../../backendSetup/orderFormat";

export function Orders() {
    const [orders, setOrders] = useState<OrderResponse[]>([])

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_API_HOST}:8080/orders/order/user/${localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")!).email : ""}`,
            {headers : {'Authorization': "Bearer " + localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")!).email : ""}})
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