import React, { useState } from 'react';
import './Shop.css';
import fakedata from '../../fakeData';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductCart from '../ProductCart/ProductCart';

const Shop = () => {
    const fromFakeData = fakedata.slice(0, 13);
    const [productContainer, setproductContainer] = useState(fromFakeData);

    const [cart, setCart] = useState([]);// Order counter..
    const handleAddProductInfo = (props) => {
        console.log(props);
        const newCart = [...cart, props];
        setCart(newCart);
    };
    return (
        <div>
            <div className="product-area">
                <div className="product-info">
                    <ul>
                        {
                            productContainer.map(data =>
                                <ProductInfo
                                    amar={data}// pass fakedata from shop js...
                                    handleAddProductInfo={handleAddProductInfo}// pass button haldleAddProductInfo from shop js..  
                                >
                                </ProductInfo>)
                        }
                    </ul>
                </div>
                <div className="product-cart">
                    <ProductCart cart= {cart}></ProductCart>
                </div>
            </div>
        </div>
    );
};
export default Shop;
















// // <ul>
// {
//     fakefive.map(data => <li>{data.name}</li> )
// }
// </ul>