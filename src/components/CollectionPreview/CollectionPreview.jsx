import React from "react";

import "./CollectionPreview.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items, viewPortWidth }) => {
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
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
