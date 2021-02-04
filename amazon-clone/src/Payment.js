import './Payment.css';
import { Link, useHistory} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormt from "react-currency-format"; 
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{basket, user }, dispatch ] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/paymets/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    const handleSubmite = async (event)  => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    } 
   
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
                        
                        <form onSubmit={handleSubmite}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                            <CurrencyFormt 
                             renderText={(value) =>(
                                        <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> : "Buy Now "}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default Payment
