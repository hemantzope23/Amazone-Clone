import React from 'react'
import './Product.css';
 function Product() {
    return (
        <div className="product"> 
            <div className="product_info">
                <p>The learn startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>25.25</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                </div>
            </div>   
            <img src=""/>

            <button> Add to Basket</button>
        </div>
    )
}
export default Product;