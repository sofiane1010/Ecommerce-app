import React from "react";
import { connect } from "react-redux";

import "./Checkout.scss";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import * as action from "../../redux/actions";

let Checkout = ({ items, totalPrice, addItem, removeItem, clearItem }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="checkout-block">
					<span>Product</span>
				</div>
				<div className="checkout-block">
					<span>Description</span>
				</div>
				<div className="checkout-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-block">
					<span>Price</span>
				</div>
				<div className="checkout-block">
					<span>Remove</span>
				</div>
			</div>
			{items.map((item) => (
				<CheckoutItem
					key={item.id}
					item={item}
					addItem={addItem}
					removeItem={removeItem}
					clearItem={clearItem}
				/>
			))}
			<div className="total">Total Price: ${totalPrice}</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.shop.basketItems,
	totalPrice: state.shop.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(action.addItem(item)),
	removeItem: (item) => dispatch(action.removeItem(item)),
	clearItem: (item) => dispatch(action.clearItem(item)),
});

Checkout = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default Checkout;
