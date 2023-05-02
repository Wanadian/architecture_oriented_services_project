import {MouseEventHandler} from "react";

export type ProductCardProps = {
    name: string,
    imageSource?: string,
    price: number,
    classname?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
};