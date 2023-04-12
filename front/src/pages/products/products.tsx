import React from "react";
import {ProductCard} from "../../modules/productCard/productCard";

export function Products() {
    return (
        <div>
            <ProductCard name={"name"} imageSource={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0nnbMsXR7fhM5DuS3hHNq2&ust=1681418444945000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODa3vqZpf4CFQAAAAAdAAAAABAE"} price={20}/>
        </div>
    );
}