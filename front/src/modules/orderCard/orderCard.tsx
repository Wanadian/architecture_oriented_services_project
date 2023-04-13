import {OrderCardProps} from "./orderCard.type";
import React, {useState} from "react";
import expandIcon from "./assets/expandIcon.svg";
import retractIcon from "./assets/retractIcon.svg";
import {OrderProductCard} from "../orderProductCard/orderProductCard";
import "./orderCard.css";

export function OrderCard({date, price, products, classname, orderProductCardsClassname} : OrderCardProps) {
    const [showProducts, setShowProducts] = useState(false)

    const onClickAction = () =>{setShowProducts(!showProducts);}

    return(
        <div className={`orderCardContainer ${classname}`} onClick={onClickAction}>
            <div className={`smallOrderCardContainer`}>
                <span>
                    <span className={"orderCardDate"}>{date.toDateString()}</span>
                    <span>{`${price}$`}</span>
                </span>
                <img className={"orderCardImage"} src={showProducts? retractIcon : expandIcon} alt={"expand icon"}/>
            </div>
            {showProducts &&
                <ul className={"orderCardProductList"}>
                    {products.map(product =>
                        <OrderProductCard name={product.name} price={product.price} classname={orderProductCardsClassname}></OrderProductCard>
                    )}
                </ul>
            }
        </div>
    );
}