import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

import { ReactComponent as Logo } from "../../../assets/crown.svg";

const logo = ({ sideDrawer, closeSideDrawer }) => {
	const classes = ["logo-container", sideDrawer ? "sideDrawer" : null];
	return (
		<div className={classes.join(" ")}>
			<Link to="/" onClick={closeSideDrawer}>
				<Logo className="logo" />
			</Link>
		</div>
	);
};

export default logo;
