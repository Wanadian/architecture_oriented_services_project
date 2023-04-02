import {ProductCardProps} from "./productCard.type";
import "./productCard.css"

export function ProductCard({name, imageUrl, price, description} : ProductCardProps) {
    return(
        <span className="productCardContainer">
            <span></span>
        </span>
    )
}