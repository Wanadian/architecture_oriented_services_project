export type detailedProductResponse = {
    id: string,
    name: string,
    price : number,
    imageSource?: string,
    type?: productType,
    description?: string
}

export type productSummaryResponse = {
    id: string,
    name: string,
    price : number
}

export type productType  =  "cloth" | "electronic" | "entertainment" | "supply" | ""