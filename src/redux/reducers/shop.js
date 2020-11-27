import * as actionTypes from "../actions/actionTypes";

const initialState = {
	collections: null,
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.SET_COLLECTIONS)
		return { collections: action.collections };
	return state;
};

export default reducer;
