import {productResponse} from "../../backendSetup/productFormat";

export type OrderCardProps = {
    date: Date,
    price: number,
    products: productResponse[],
    classname?: string,
    orderProductCardsClassname?: string
};