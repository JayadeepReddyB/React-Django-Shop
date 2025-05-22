import React from "react";

// Let's import the ProductCard we built in components

import ProductCard from "../components/productCard";

const Home = () => {

    // Creating an arraay of fake products for testing the design
    // This section will be replace with logic for fetching the JSON response of products from API
    // and generating n array of products of the same structre.
    const fakeProducts = [
        {id: 1, name: "Iphone", price : 1000},
        {id: 2, name: "S23", price : 20},
        {id: 3, name: "Vivo", price: 10},
        {id: 4, name: "Redmi", price: 5}
    ];

    return (
        <div className="container mt-5">
            <h1>
                Products
            </h1>
            <div className="row">
                {fakeProducts.map((product) => (
                    <ProductCard key={product.id} product= {product}/>
                ))}

            </div>
        </div>
    )
};

export default Home;