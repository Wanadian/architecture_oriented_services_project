import {ProductCardProps} from "./productCard.type";
import "./productCard.css"

export function ProductCard({name, imageSource, price} : ProductCardProps) {
    return(
        <span className="productCardContainer">
            <h1 className={"productCardName"}>{name}</h1>
            <span>{price}</span>
            {imageSource && <img src={imageSource} alt={"product image"}/>}
        </span>
    )
}