import {MouseEventHandler} from "react";

export type ProductCardProps = {
    name: string,
    imgUrl?: string,
    price: number,
    classname?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
};