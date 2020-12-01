import * as actionTypes from "../actions/actionTypes";

const initialState = {
	collections: {},
	loading: true,
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.SET_COLLECTIONS)
		return { laoding: false, collections: action.collections };
	return state;
};

export default reducer;
