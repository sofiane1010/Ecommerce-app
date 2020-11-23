import React from "react";

import "./CollectionItem.scss";

import Button from "../../UI/Button/Button";

const collectionItem = ({ name, price, imageUrl }) => (
	<div className="collection-item">
		<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}$</span>
		</div>
		<Button color="white"> Add to basket </Button>
	</div>
);

export default collectionItem;
