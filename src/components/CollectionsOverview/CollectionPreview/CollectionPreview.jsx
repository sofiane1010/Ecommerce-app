import React from "react";
import { withRouter } from "react-router-dom";

import "./CollectionPreview.scss";

import CollectionItem from "./CollectionItem/CollectionItem";

let CollectionPreview = ({ title, items, viewPortWidth, history, match }) => {
	let numberOfItems;
	if (viewPortWidth < 650) numberOfItems = 2;
	else if (viewPortWidth > 900) numberOfItems = 4;
	else numberOfItems = 3;
	return (
		<div className="collection-preview">
			<h1
				className="title"
				onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
			>
				{title.toUpperCase()}
			</h1>
			<div className="preview">
				{items
					.filter((_, i) => i < numberOfItems)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);
