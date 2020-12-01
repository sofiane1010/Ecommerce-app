import * as actionTypes from "../actions/actionTypes";

const intialErrorState = {
	signIn: null,
	signUp: null,
};

const initialState = {
	currentUser: null,
	loading: true,
	error: intialErrorState,
};

const handleError = (state, action) => {
	return { ...state, [action.form]: action.error };
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.SET_CURRENT_USER)
		return { ...state, currentUser: action.user, loading: false };
	if (action.type === actionTypes.AUTH_START)
		return { ...state, loading: true, error: intialErrorState };
	if (action.type === actionTypes.AUTH_SUCCESS)
		return { ...state, loading: false, error: intialErrorState };
	if (action.type === actionTypes.AUTH_FAIL)
		return {
			...state,
			loading: false,
			error: handleError(state.error, action),
		};

	return state;
};

export default reducer;
