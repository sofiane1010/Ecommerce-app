import * as actionTypes from "./actionTypes";

export const addItem = (item) => ({
	type: actionTypes.ADD_ITEM_TO_BASKET,
	item,
});

export const removeItem = (item) => ({
	type: actionTypes.REMOVE_ITEM_FROM_BASKET,
	item,
});
