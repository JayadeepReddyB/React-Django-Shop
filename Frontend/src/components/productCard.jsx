import React from "react";

// component in React is just a JS funcction which returns JSX

const ProductCard = ({product}) => {
    console.log(product);
    return (
        <div className="col-mb-4">
            <div className="card">
                <img src="{product.image}" alt="{product.name}'s image" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        Title : {product.name}
                    </h5>
                    <p className="card-text">
                        &#8377; {product.price}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;

