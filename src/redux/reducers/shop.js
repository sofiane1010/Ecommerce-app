import * as actionTypes from "../actions/actionTypes";
import * as utils from "./utility";

const initialState = {
	basketItems: [],
	numberOfItems: 0,
};

const handleItem = (state, action) => {
	if (actionTypes.ADD_ITEM_TO_BASKET === action.type)
		return utils.addItemToBasket(state, action.item);
	if (actionTypes.REMOVE_ITEM_FROM_BASKET === action.type)
		return utils.removeItemFromBasket(state, action.item);
};

const handleNumberOfItems = (state, action) => {
	if (action.type === actionTypes.ADD_ITEM_TO_BASKET) return state + 1;
	if (action.type === actionTypes.REMOVE_ITEM_FROM_BASKET) return state - 1;
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.ADD_ITEM_TO_BASKET)
		return {
			basketItems: handleItem(state.basketItems, action),
			numberOfItems: handleNumberOfItems(state.numberOfItems, action),
		};
	if (action.type === actionTypes.REMOVE_ITEM_FROM_BASKET)
		return {
			basketItems: handleItem(state.basketItems, action),
			numberOfItems: handleNumberOfItems(state.numberOfItems, action),
		};
	return state;
};

export default reducer;
