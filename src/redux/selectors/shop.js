import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsArray = createSelector(
	[selectCollections],
	(collections) => Object.values(collections)
);

export const selectShopLoading = createSelector(
	[selectShop],
	(shop) => shop.loading
);

export const selectCollection = (routeName) =>
	createSelector([selectCollections], (collections) => collections[routeName]);
