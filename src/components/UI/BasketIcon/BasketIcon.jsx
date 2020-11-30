import React from "react";

import { connect } from "react-redux";

import "./BasketIcon.scss";
import * as action from "../../../redux/actions";

import { ReactComponent as Basket } from "../../../assets/basket.svg";
let BasketIcon = ({ toggleShowBasket, numberOfItems }) => {
	return (
		<div onClick={toggleShowBasket} className="cart-icon">
			<Basket className="shopping-icon" />
			<span className="item-count">{numberOfItems}</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	numberOfItems: state.basket.numberOfItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleShowBasket: () => dispatch(action.toggleShowBasket()),
});

BasketIcon = connect(mapStateToProps, mapDispatchToProps)(BasketIcon);
export default BasketIcon;
