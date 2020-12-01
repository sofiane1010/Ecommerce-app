import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/selectors";

import "./CategoryCollection.scss";

import CollectionItem from "../CollectionsOverview/CollectionPreview/CollectionItem/CollectionItem";

let CategoryCollection = ({ match, collections }) => {
	const categoryItems = collections[match.params.categoryId];
	const catergoryRendered = categoryItems
		? categoryItems.items.map((item) => (
				<CollectionItem key={item.id} item={item} />
		  ))
		: Object.keys(collections).length && <Redirect to="/" />;
	return (
		<div className="category-collection">
			<h1 className="category-title">{categoryItems && categoryItems.title}</h1>
			<div className="category-items">{catergoryRendered}</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	collections: selectCollections(state),
});

export default connect(mapStateToProps)(CategoryCollection);
