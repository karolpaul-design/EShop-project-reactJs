import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{/* {quantity} x ${price} */}</span>
    </div>
  </div>
);

export default CartItem;
