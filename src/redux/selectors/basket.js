import { createSelector } from "reselect";

const selectBasket = (state) => state.basket;

export const selectBasketItems = createSelector(
	[selectBasket],
	(basket) => basket.basketItems
);

export const selectNumberOfItems = createSelector(
	[selectBasketItems],
	(basketItems) => basketItems.reduce((acc, curr) => acc + curr.qt, 0)
);

export const selectTotalPrice = createSelector(
	[selectBasketItems],
	(basketItems) =>
		basketItems.reduce((acc, curr) => acc + curr.qt * curr.price, 0)
);

export const selectShowBasket = createSelector(
	[selectBasket],
	(basket) => basket.showBasket
);
