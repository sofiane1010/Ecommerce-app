import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/actions";
import * as selector from "../../../redux/selectors";

import "./SideDrawer.scss";

import BackDrop from "../../UI/BackDrop/BackDrop";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";

const SideDrawer = ({ showSideDrawer, toggleSideDrawer }) => {
	const classes = ["side-drawer", showSideDrawer ? "opened" : null];
	return (
		<Fragment>
			<BackDrop show={showSideDrawer} clicked={toggleSideDrawer} />
			<div className={classes.join(" ")}>
				<Logo sideDrawer closeSideDrawer={toggleSideDrawer} />
				<nav>
					<NavigationLinks toggleSideDrawer={toggleSideDrawer} />
				</nav>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	showSideDrawer: selector.selectShowSideDrawer(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleSideDrawer: () => dispatch(action.toggleSideDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
