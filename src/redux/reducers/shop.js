import * as actionTypes from "../actions/actionTypes";

const initialState = {
	collections: {},
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.FETCH_COLLECTIONS_START)
		return { ...state, error: null, laoding: true };
	if (action.type === actionTypes.FETCH_COLLECTIONS_SUCCESS)
		return { ...state, loading: false, collections: action.collections };
	if (action.type === actionTypes.FETCH_COLLECTIONS_FAIL)
		return { ...state, loading: false, error: action.error };
	return state;
};

export default reducer;
