import * as actionTypes from "../actions/actionTypes";

const initialState = {
	showSideDrawer: false,
};

const reducer = (state = initialState, action) => {
	if (action.type === actionTypes.TOGGLE_SHOW_SIDE_DRAWER)
		return { showSideDrawer: !state.showSideDrawer };
	return state;
};

export default reducer;
