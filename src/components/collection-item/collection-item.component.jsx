import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

function CollectionItem({ item }) {
  const { id, name, imageUrl, price } = item;

  // const collection = useSelector((state) => {
  //   const { cart } = state;
  //   return cart;
  // });
  // console.log("collection > ", collection);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addItem(item));
  };
  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={handleAdd} inverted>
        ADD to cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
