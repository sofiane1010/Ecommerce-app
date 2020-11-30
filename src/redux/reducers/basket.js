import * as actionTypes from "../actions/actionTypes";
import * as utils from "./utility";

const initialState = {
	basketItems: [],
	showBasket: false,
};

const handleItem = (state, action) => {
	if (actionTypes.ADD_ITEM_TO_BASKET === action.type)
		return utils.addItemToBasket(state, action.item);
	if (actionTypes.REMOVE_ITEM_FROM_BASKET === action.type)
		return utils.removeItemFromBasket(state, action.item);
	if (action.type === actionTypes.CLEAR_ITEM)
		return state.filter((item) => item.id !== action.item.id);
	return state;
};

const handleShowBasket = (state, action) => {
	if (action.type === actionTypes.TOGGLE_SHOW_BASKET) return !state;
	return state;
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ITEM_TO_BASKET:
		case actionTypes.REMOVE_ITEM_FROM_BASKET:
		case actionTypes.CLEAR_ITEM:
		case actionTypes.TOGGLE_SHOW_BASKET:
			return {
				basketItems: handleItem(state.basketItems, action),
				showBasket: handleShowBasket(state.showBasket, action),
			};
		case actionTypes.SET_BASKET_ITEMS:
			return action.items;
		case actionTypes.EMPTY_BASKET:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
