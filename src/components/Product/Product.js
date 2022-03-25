import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart,product}=props;
    const {name,img,seller,price,stock,features}=product;
    let description;
    let value;
    for (const feature of features){
        console.log(feature);
         description = feature.description;
         value=feature.value
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="">
            <h4 className='product-name'>{name}</h4>
           
            <div className="product-info">
                <div >
                <p><small>By:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>handleAddToCart(product)} className='btn-style'> <BsFillCartFill></BsFillCartFill>  Add to Cart</button>
                </div>
                <div className="features-rating">
                   <small> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating> <FcRating></FcRating></small>
                    <h4>Features:</h4>
                   <ul>
                       <li>Display Type: {description} </li>
                       <li>Display size: <strong>{value}</strong></li>
                       <li>Operating System:chrome</li>
                       <li>Hard Disk size:16GB</li>
                   </ul>

                </div>
            </div>
            
            </div>

        </div>
    );
};

export default Product;