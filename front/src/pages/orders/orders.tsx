import React from "react";
import {OrderCard} from "../../modules/orderCard/orderCard";

export function Orders() {
    return (
        <div>
            <OrderCard date={new Date()} price={20} products={[{id: "id", name: "name", price: 20}, {id: "id", name: "name", price: 20}]}/>
        </div>
    );
}