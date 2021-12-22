import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;

    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
