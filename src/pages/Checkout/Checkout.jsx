import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions";
import * as selector from "../../redux/selectors";

import "./Checkout.scss";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeCheckout/StripeCheckout";

let Checkout = ({
	items,
	totalPrice,
	addItem,
	removeItem,
	clearItem,
	emptyBasket,
}) => {
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
			<div className="test-warning">
				*Please use one of the following test credit cards for payments* <br />
				VISA : 4242 4242 4242 4242 - Exp: 01/22 - CVC: 123
				<br />
				MASTERCARD : 5555 5555 5555 4444 - Exp : 01/22 - CVC: 123
				<br />
				AMERICAN EXPRESS : 3782 822463 10005 - Exp : 01/22 - CVC: 1234
			</div>
			<StripeButton price={totalPrice} emptyBasket={emptyBasket} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: selector.selectBasketItems(state),
	totalPrice: selector.selectTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(action.addItem(item)),
	removeItem: (item) => dispatch(action.removeItem(item)),
	clearItem: (item) => dispatch(action.clearItem(item)),
	emptyBasket: () => dispatch(action.emptyBasket()),
});

Checkout = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default Checkout;
