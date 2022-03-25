import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name,img,seller,price,stock,}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="">
            <h4 className='product-name'>{name}</h4>
            <p><small>By:{seller}</small></p>
            <div className="product-info">
                <div >
                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='btn-style'> <BsFillCartFill></BsFillCartFill>  Add to Cart</button>
                </div>
                <div className="features-rating">
                   <small> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating></small>
                    <h4>Features:</h4>
                   <ul>
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                       <li>4</li>
                   </ul>

                </div>
            </div>
            
            </div>

        </div>
    );
};

export default Product;