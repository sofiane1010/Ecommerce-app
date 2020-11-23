import React from "react";

import "./BasketDropDown.scss";

import Button from "../UI/Button/Button";
const BasketDropDown = ({ show }) => {
	const classes = ["basket-dropdown", show ? "active" : null];
	return (
		<div className={classes.join(" ")}>
			<div className="basket-item"></div>
			<Button color="black">Go to checkout !</Button>
		</div>
	);
};

export default BasketDropDown;
