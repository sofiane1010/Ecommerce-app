import * as actionTypes from "./actionTypes";

export const setCurrentUser = (user) => ({
	type: actionTypes.SET_CURRENT_USER,
	user,
});

export const authStart = () => ({
	type: actionTypes.AUTH_START,
});

export const authSuccess = () => ({
	type: actionTypes.AUTH_SUCCESS,
});

export const authFail = (error, form) => ({
	type: actionTypes.AUTH_FAIL,
	form,
	error,
});
