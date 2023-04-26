import {ProductResponse} from "../../backendSetup/productFormat";

export type OrderCardProps = {
    date: Date,
    price: number,
    products: ProductResponse[],
    classname?: string,
    orderProductCardsClassname?: string
};