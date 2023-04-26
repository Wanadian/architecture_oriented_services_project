import {ProductResponse} from "./productFormat";

export type OrderResponse = {
    id: string,
    date: Date,
    price: number,
    products: ProductResponse[]
};