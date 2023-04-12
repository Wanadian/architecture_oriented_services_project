import {OrderProductCardProps} from "./orderProductCard.type";
import "./orderProductCard.css"

export function OrderProductCard({name, price, classname} : OrderProductCardProps) {
    return(
        <div className={`orderProductCardContainer ${classname}`}>
            <span className={"orderProductCardName"}>{name}</span>
            <span>{price}</span>
        </div>
    );
}