import React from 'react';
import './Cart.css'

const Cart = (props) => {
 const{cart}=props;
 let total =0;
 for(const product of cart){
     total =total+product.price;
 }
    return (
        <div className='cart'>
            <h3>Order Summary:</h3>
                <h5>Item Ordered:{cart.length}</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Item Price: ${total}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shippin $ Handling:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total befor tax:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Esimated Tax:</td>
                            <td></td>
                        </tr>
                        <tr className='total-raw'>
                            <td>Order Total:</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <button><span>Review your order</span></button>
        </div>
    );
};

export default Cart;