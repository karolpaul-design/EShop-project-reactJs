import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./stripe.styles.scss";
const CheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KRgxJEnfa1IT0ek674cMZUWs5pfdG0D8m6bFH1Go9KEJFZRghJBbrHEe3lcfJQWDSgTpOytZypYmVYqNuDy3cYm00vbZWKSmL";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default CheckoutButton;
