import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => history(`${routeName}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
