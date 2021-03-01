
import React from 'react';
import css from './ProductInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import fakedata from '../../fakeData';

const ProductInfo = (props) => { 
    const { url, img, seller, name, price } = props.amar;
    return (
        <div>
            <ul>
                {
                    <div className="product-info">
                        <div className="image-area">
                            <a href={url}>
                                <img src={img} alt="Product Image" />
                            </a>
                        </div>
                        <div className="info-area">
                            <div className="title-area">
                                <h3>{seller}</h3>
                            </div>
                            <div className="feature-area">
                                <h5>{name}</h5>
                            </div>
                            <div className="price-area">
                                <h4>Price : $ {price}</h4>
                            </div>
                            <button className='buy-button' 
                                onClick = {() => props.handleAddProductInfo(props.amar)}> {/* catch handlAddProductInfo function  from shop.js file */}
                                <FontAwesomeIcon icon={faShoppingCart} />  Buy Here
                            </button>

                        </div>

                    </div>
                }
            </ul>
        </div>
    );
};

export default ProductInfo;