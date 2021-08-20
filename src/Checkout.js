import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import ad from './Checkout__ad.jpg';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            {/*  */}
                <img className='checkout__ad' src ={ad} alt=''/>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        
                    </div>
                )}
            {/*  */}
            </div>
            {basket.length  > 0 && (
                <div className='checkout__right'>
                    <Subtotal/>
                </div>

            )}
            
        </div>
    )
}

export default Checkout
