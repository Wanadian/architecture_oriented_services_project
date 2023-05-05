import {ProductCardProps} from "./productCard.type";
import addIcon from "./assets/addIcon.svg";
import "./productCard.css";

export function ProductCard(
    {
        name,
        imgUrl,
        price,
        classname,
        onClick
    } : ProductCardProps) {
    return(
        <div className={`productCardContainer ${classname}`}>
            <span className={"productCardDetails"}>
                <span>{name}</span>
                <span>{`${price}$`}</span>
            </span>
            {imgUrl && <img className="productCardImage" src={imgUrl} alt={"product"}/>}
            <button className="productCardButton" onClick={onClick}>
                <img className="productCardButtonImage" src={addIcon} alt={"add"}/>
            </button>
        </div>
    )
}