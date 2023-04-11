import {productSummaryResponse} from "./productFormat";

export type orderResponse = {
    id: string,
    date: Date,
    price: number,
    products: productSummaryResponse[]
}