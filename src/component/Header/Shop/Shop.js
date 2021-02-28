import React, { useState } from 'react';
import './Shop.css';
import fakedata from '../../../fakeData';

const Shop = () => {
    const fakefive = fakedata.slice(5,80);
    const [con , setcon] = useState(fakefive);
    const conter =(fakefive.length);
    return (
        <div>
            
             <ul className='mainUl'>
                 {
                     <h1>Total data :{conter}</h1>
                 }
                {   
                    fakefive.map(data => <li>{data.name}</li>)

                }
             </ul>
        </div>
    );
};

export default Shop;