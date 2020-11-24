import React from "react";
import { connect } from "react-redux";

import "./CollectionItem.scss";
import * as action from "../../../../redux/actions";

import Button from "../../../UI/Button/Button";

const collectionItem = ({ item, dispatch }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</div>
			<Button color="white" onClick={() => dispatch(action.addItem(item))}>
				Add to basket
			</Button>
		</div>
	);
};

export default connect()(collectionItem);
