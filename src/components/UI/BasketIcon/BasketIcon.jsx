import React from "react";

import "./BasketIcon.scss";

import { ReactComponent as Basket } from "../../../assets/basket.svg";
const BasketIcon = ({ clicked }) => {
	return (
		<div onClick={clicked} className="cart-icon">
			<Basket className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};
export default BasketIcon;
