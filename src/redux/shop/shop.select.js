import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const selectShop = (state) => state.shop;
export const selectShopData = createSelector(
  [selectShop],
  (item) => item.shopData
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((title) => collections[title])
);
export const selectCollection = (CollectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[CollectionUrlParam]
  );
