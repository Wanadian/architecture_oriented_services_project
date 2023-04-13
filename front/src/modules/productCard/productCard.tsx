import {ProductCardProps} from "./productCard.type";
import addIcon from "./assets/addIcon.svg";
import "./productCard.css";

export function ProductCard({name, imageSource = "https://www.mrpanet.org/global_graphics/default-store-350x350.jpg", price, classname} : ProductCardProps) {
    return(
        <div className={`productCardContainer ${classname}`}>
            <span className={"productCardDetails"}>
                <span>{name}</span>
                <span>{`${price}$`}</span>
            </span>
            {imageSource && <img className="productCardImage" src={imageSource} alt={"product image"}/>}
            <button className="productCardButton">
                <img className="productCardButtonImage" src={addIcon}/>
            </button>
        </div>
    )
}