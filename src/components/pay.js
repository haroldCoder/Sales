import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadScript } from "@paypal/paypal-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import Cookies from 'universal-cookie';
import EditAdvance from './editAdvance.js';
const cookie = new Cookies();

const stripePromise = loadStripe(cookie.get("idpay"));

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
 async function handleSubmit(event){
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    const { id } = paymentMethod;
    const {res} = await axios.post('http://localhost:8000/api/checkout',{
        id,
        amount: props.price * 100
    });
  };

  return (
      <form className="card card-body" style={{width: "100%", height: "53vh"}}>
        <CardElement/>
        <div className="card card-body bg-dark" style={{margin: "7% 30% 30% 2%",height: "1px"}}>
          <div className="offset-md-4">
            <h2 className="text-light card-text">{props.price}$</h2>
          </div>
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit} style={{position: "sticky", top: "90%"}}>
          Pay
        </button>
      </form> 
  );
};



const Stripe = (props) => {
  return(
      <Elements stripe={loadStripe(props.idpay)}>
        <div className="container p-4" style={{width: "100%"}}>
          <div className="row h-100" style={{width: "100%"}}>
            <div className="col-md-4 h-100" style={{width: "100%"}}>
            <CheckoutForm price={props.price}/>
            </div>
          </div>
        </div>
      </Elements>
  )
};


const Paypal = (props) =>{
  return (
    <div style={{width: "50%", position: "relative", left: "30%", top: "40%"}}>
				<PayPalButton
				options={{
					currency: 'USD',
					clientId: "AdAjYgQP7R246icKbZyeI1pAAUPoqRG3FG5JM83MMK3o7UgCfC-oD0Nn3Rx7YRa938RQTEZdRC9zCUrp"
				}}
				amount={props.price}
				// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
				onSuccess={(details, data) => {
				alert("Transaction completed by " + details.payer.name.given_name);
		
				// OPTIONAL: Call your server to save the transaction
				return fetch("/paypal-transaction-complete", {
					method: "post",
					body: JSON.stringify({
					orderID: data.orderID
					})
				});
				}}
			/>
		  </div>
  )
};

export default function Pay(props){
	return (
		<Stripe price={props.price} idpay={props.idpay} />
	);
}