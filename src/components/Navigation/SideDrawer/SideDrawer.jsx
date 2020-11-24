import React, { Fragment } from "react";

import "./SideDrawer.scss";
import BackDrop from "../../UI/BackDrop/BackDrop";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";

const SideDrawer = ({ show, close }) => {
	const classes = ["side-drawer", show ? "opened" : null];
	return (
		<Fragment>
			<BackDrop show={show} clicked={close} />
			<div className={classes.join(" ")}>
				<Logo sideDrawer closeSideDrawer={close} />
				<nav>
					<NavigationLinks closeSideDrawer={close} />
				</nav>
			</div>
		</Fragment>
	);
};

export default SideDrawer;
