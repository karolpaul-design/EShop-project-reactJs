import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total, ...otherProps }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="">Product</span>
        </div>
        <div className="header-block">
          <span className="">Description</span>
        </div>
        <div className="header-block">
          <span className="">Quantity</span>
        </div>
        <div className="header-block">
          <span className="">Price</span>
        </div>
        <div className="header-block">
          <span className="">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
  });
export default connect(mapStateToProps)(CheckoutPage);
