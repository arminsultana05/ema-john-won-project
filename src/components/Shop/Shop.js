import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('products.JSON')
        .then(res=>res.json())
        .then(data =>  setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>products:{products.length}</h3>
                {
                    products.map(product=>console.log(product))
                }

            </div>
            <div className="cart-caontainer">
                <h3>Order Summary:</h3>
                <h5>Item Ordered:</h5>

            </div>
        </div>
    );
};

export default Shop;