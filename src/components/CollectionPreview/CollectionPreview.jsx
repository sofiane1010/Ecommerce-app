import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions";

import "./CollectionPreview.scss";

import CollectionItem from "./CollectionItem/CollectionItem";

let CollectionPreview = ({ title, items, viewPortWidth, addItem }) => {
	let numberOfItems;
	if (viewPortWidth < 550) numberOfItems = 2;
	else if (viewPortWidth > 800) numberOfItems = 4;
	else numberOfItems = 3;
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((_, i) => i < numberOfItems)
					.map((item) => (
						<CollectionItem
							key={item.id}
							clicked={() => addItem(item)}
							{...item}
						/>
					))}
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(action.addItem(item)),
});

CollectionPreview = connect(null, mapDispatchToProps)(CollectionPreview);

export default CollectionPreview;
