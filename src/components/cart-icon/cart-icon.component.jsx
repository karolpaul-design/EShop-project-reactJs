import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemsQuantity }) => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsQuantity}</span>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    itemsQuantity: selectCartItemsCount,
  });

export default connect(mapStateToProps, null)(CartIcon);
