import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import CategoryPage from "../collection/collection.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/*" element={<CollectionOverview />} />
        <Route
          path="/:categoryId"
          element={<CategoryPage props={useParams()}></CategoryPage>}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
