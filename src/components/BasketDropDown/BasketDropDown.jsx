import React from "react";
import { connect } from "react-redux";

import "./BasketDropDown.scss";

import * as action from "../../redux/actions";
import Button from "../UI/Button/Button";
import BasketItem from "./BasketItem/BasketItem";
import { Link } from "react-router-dom";

let BasketDropDown = ({
	show,
	basketItems,
	addItem,
	removeItem,
	toggleBasketDropDown,
}) => {
	const classes = ["basket-dropdown", show ? "active" : null];
	return (
		<div className={classes.join(" ")}>
			<div className="basket-items">
				{basketItems.length ? (
					basketItems.map((item) => (
						<BasketItem
							key={item.id}
							item={item}
							addItem={addItem}
							removeItem={removeItem}
						/>
					))
				) : (
					<span className="empty-message">There is no items in the basket</span>
				)}
			</div>
			<Button color="black" onClick={toggleBasketDropDown}>
				<Link
					to="/checkout"
					style={{
						textDecoration: "none",
						color: "inherit",
						backgroundColor: "inherit",
						height: "48px",
					}}
				>
					Go to checkout !
				</Link>
			</Button>
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
