export type productResponse = {
    id: string,
    name: string,
    price : number,
    imageSource?: string,
    type?: productType,
    description?: string
}

export type productType  =  "cloth" | "electronic" | "entertainment" | "supply" | ""