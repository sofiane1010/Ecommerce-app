import * as actionTypes from "../actions/actionTypes";

const initialState = {
	currentUser: null,
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.SET_CURRENT_USER)
		return { currentUser: action.user };
	return state;
};

export default reducer;
