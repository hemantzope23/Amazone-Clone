import { Link } from '@material-ui/core';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user }, dispatch ] = useStateValue();
    return (
        <div className="payment">
            <div className="paymet_container">

             <h1>
                 Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
             </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Delivery address </h2>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 Fekari </p>
                        <p>Bhusawal Jalgaon</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="paymet_title">
                        <h3>Review item and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                             />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h2>Payment Method</h2>
                    </div>
                    <div className="paymet_details">

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
