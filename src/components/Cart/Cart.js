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
                            <td>Item Price: </td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shippin $ Handling: </td>
                            <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total befor tax:</td>
                            <td> ${tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Esimated Tax: </td>
                            <td>${esimated}</td>
                        </tr>
                        <tr className='total-raw'>
                            <td>Order Total: </td>
                            <td>${orderTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <button><span>Review your order</span></button>
        </div>
    );
};

export default Cart;