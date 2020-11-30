import { createSelector } from "reselect";

const selectSideDrawer = (state) => state.sideDrawer;

export const selectShowSideDrawer = createSelector(
	[selectSideDrawer],
	(sideDrawer) => sideDrawer.showSideDrawer
);
