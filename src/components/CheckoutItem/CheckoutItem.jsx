import React from "react";

import "./CheckoutItem.scss";

const CheckoutItems = ({ item, addItem, removeItem, clearItem }) => {
	const { imageUrl, name, qt, price } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<div className="quantity-container">
				<span
					className="quantity-controls"
					onClick={() => removeItem(item)}
				></span>
				<span className="quantity">{qt}</span>
				<span
					className="quantity-controls"
					onClick={() => addItem(item)}
				></span>
			</div>
			<span className="price">{price * qt}</span>
			<div className="remove-button" onClick={() => clearItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItems;
