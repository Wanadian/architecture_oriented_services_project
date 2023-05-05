import React, {useEffect, useState} from "react";
import {ProductCard} from "../../modules/productCard/productCard";
import "./products.css";
import {ProductResponse} from "../../backendSetup/productFormat";

export function Products() {
    const cartStater : any = () : ProductResponse[] => {
        const currentCart = localStorage.getItem("cart");
        return !!currentCart ? JSON.parse(currentCart) : [];
    }

    const [products, setProducts] = useState<ProductResponse[]>([]);

    const [cart, setCart] = useState<ProductResponse[]>(cartStater());

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_API_HOST}:8080/products/product`)
            .then(response  => response.json())
            .then(data => setProducts(data))
    },[])

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
            {products.map(product => (
                <ProductCard key={product.id} name={product.name} price={product.price} imgUrl={product.imgUrl} onClick={() => addProductToCart(product)}/>
            ))
            }
        </div>
    );
}