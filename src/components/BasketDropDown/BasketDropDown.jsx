import React from "react";
import { connect } from "react-redux";

import "./BasketDropDown.scss";

import * as action from "../../redux/actions";
import Button from "../UI/Button/Button";
import BasketItem from "./BasketItem/BasketItem";

let BasketDropDown = ({ show, basketItems, addItem, removeItem }) => {
	const classes = ["basket-dropdown", show ? "active" : null];
	return (
		<div className={classes.join(" ")}>
			<div className="basket-items">
				{basketItems.map((item) => (
					<BasketItem
						key={item.id}
						item={item}
						addItem={addItem}
						removeItem={removeItem}
					/>
				))}
			</div>
			<Button color="black">Go to checkout !</Button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	basketItems: state.shop.basketItems,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(action.addItem(item)),
	removeItem: (item) => dispatch(action.removeItem(item)),
});
BasketDropDown = connect(mapStateToProps, mapDispatchToProps)(BasketDropDown);

export default BasketDropDown;
