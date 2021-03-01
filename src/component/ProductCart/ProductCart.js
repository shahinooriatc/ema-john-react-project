import css from './ProductCart.css';
import React from 'react';

const ProductCart = (props) => {
    const cart = props.cart;

    let total = 0.00;
    for (let i = 0; i < cart.length; i++) {
        const amar = cart[i];        
        total = total + amar.price
    }

    let shipping =0;
    if(total > 500){
        shipping =0.00;
    }
    else if(total > 50){
       shipping = 5.00;
   }else if(total > 0){
       shipping = 12.00;
   }
    
    let tax =parseFloat(total/10).toFixed(2);

    let grandTotal = parseFloat(total +shipping+tax).toFixed(2);

    return (
        <div>
            <h2>Order Summery.</h2><hr/>
            <h3>Ordered Items : {cart.length} </h3><br/>
            <h5>Product Price: {parseFloat(total).toFixed(2)}</h5>
            <h6>Shipping: {shipping}</h6>
            <h6>Tax + VAT: {tax}</h6>
            <h4>Total Amount: {grandTotal}</h4>

        </div >
    );
};

export default ProductCart;