import React from "react";
import {ProductCard} from "../../modules/productCard/productCard";
import "./products.css";
import {ProductResponse} from "../../backendSetup/productFormat";

export function Products() {
    const productResponse : ProductResponse[] = [
        {id: "1", name: "test", price: 20, imageSource: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg", description: "description"},
        {id: "2", name: "test2", price: 20},
        {id: "4", name: "test4", price: 5, imageSource: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg"},
        {id: "3", name: "test3", price: 10, description: "description"}
    ];

    return (
        <div className="productsContainer">
            {productResponse.map(product => (
                <ProductCard name={product.name} price={product.price} imageSource={product.imageSource}/>
            ))
            }
        </div>
    );
}