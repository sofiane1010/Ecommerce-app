import React from "react";

import "./BasketItem.scss";

const BasketItem = ({ item, addItem, removeItem }) => {
	const { name, qt, imageUrl, price } = item;
	return (
		<div className="basket-item">
			<img src={imageUrl} alt={name} />
			<div className="quantity-container">
				<span
					className="quantity-controls"
					onClick={() => removeItem(item)}
				></span>
				<span className="quantity">x{qt}</span>
				<span
					className="quantity-controls"
					onClick={() => addItem(item)}
				></span>
			</div>

			<span className="price">{price}$</span>
		</div>
	);
};

export default BasketItem;
