import {productSummaryResponse} from "../../backendSetup/productFormat";

export type OrderCardProps = {
    date: Date,
    price: number,
    products: productSummaryResponse[],
    classname?: string,
    orderProductCardsClassname?: string
}