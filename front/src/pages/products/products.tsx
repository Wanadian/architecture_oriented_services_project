import React, {useEffect, useState} from "react";
import {ProductCard} from "../../modules/productCard/productCard";
import "./products.css";
import {ProductResponse} from "../../backendSetup/productFormat";

export function Products() {
    const cartStater : any = () : ProductResponse[] => {
        const currentCart = localStorage.getItem("cart");
        return !!currentCart ? JSON.parse(currentCart) : [];
    }

    const [cart, setCart] = useState<ProductResponse[]>(cartStater());

    const productResponse : ProductResponse[] = [
        {id: "1", name: "test", price: 20, imageSource: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg", description: "description"},
        {id: "2", name: "test2", price: 20},
        {id: "4", name: "test4", price: 5, imageSource: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg"},
        {id: "3", name: "test3", price: 10, description: "description"}
    ];

    useEffect(() => {
        const currentCart = localStorage.getItem("cart");
        !!currentCart ? setCart([...JSON.parse(currentCart)]) : console.info("Starting new cart");
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addProductToCart = (product : ProductResponse) => {
        setCart([...cart, product]);
        console.log("Product added to cart");
    }

    return (
        <div className="productsContainer">
            {productResponse.map(product => (
                <ProductCard key={product.id} name={product.name} price={product.price} imageSource={product.imageSource} onClick={() => addProductToCart(product)}/>
            ))
            }
        </div>
    );
}