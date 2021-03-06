import * as actionTypes from "./actionTypes";

export const addItem = (item) => ({
	type: actionTypes.ADD_ITEM_TO_BASKET,
	item,
});

export const removeItem = (item) => ({
	type: actionTypes.REMOVE_ITEM_FROM_BASKET,
	item,
});

export const clearItem = (item) => ({
	type: actionTypes.CLEAR_ITEM,
	item,
});

export const setBasketItems = (items) => ({
	type: actionTypes.SET_BASKET_ITEMS,
	items,
});

export const emptyBasket = () => ({
	type: actionTypes.EMPTY_BASKET,
});

export const toggleShowBasket = () => ({
	type: actionTypes.TOGGLE_SHOW_BASKET,
});
