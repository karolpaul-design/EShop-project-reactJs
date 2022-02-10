import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopData } from "../../redux/shop/shop.select";
import { selectCollectionsForPreview } from "../../redux/shop/shop.select";
import "./collections-overview.styles.scss";
const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);
const mapStateToProps = (state) =>
  createStructuredSelector({ collections: selectCollectionsForPreview });
export default connect(mapStateToProps)(CollectionOverview);
