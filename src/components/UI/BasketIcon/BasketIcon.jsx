import React from "react";

import { connect } from "react-redux";

import "./BasketIcon.scss";

import { ReactComponent as Basket } from "../../../assets/basket.svg";
let BasketIcon = ({ clicked, numberOfItems }) => {
	return (
		<div onClick={clicked} className="cart-icon">
			<Basket className="shopping-icon" />
			<span className="item-count">{numberOfItems}</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	numberOfItems: state.basket.numberOfItems,
});

BasketIcon = connect(mapStateToProps)(BasketIcon);
export default BasketIcon;
