import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
 const{cart}=props;
 console.log(cart);
 let total =0;
 let shipping =0;
 for(const product of cart){
     total =total+product.price;
     shipping=shipping+product.shipping;
 }
 const tax = total*10/100;
 const esimated = 0;
 const orderTotal=total+shipping+tax+esimated;
    return (
        <div className='cart'>
            <h3>Order Summary:</h3>
                <h5>Item Ordered:{cart.length}</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Item Price: ${total.toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shippin $ Handling: ${shipping.toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total befor tax: ${tax.toFixed(2)}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Esimated Tax: ${esimated}</td>
                            <td></td>
                        </tr>
                        <tr className='total-raw'>
                            <td>Order Total: ${orderTotal.toFixed(2)}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <button><span>Review your order</span></button>
        </div>
    );
};

export default Cart;