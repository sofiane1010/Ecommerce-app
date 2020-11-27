import React from "react";
import { connect } from "react-redux";
import "./CategoryCollection.scss";
import CollectionItem from "../CollectionsOverview/CollectionPreview/CollectionItem/CollectionItem";
import { Redirect } from "react-router-dom";

let CategoryCollection = ({ match, collections }) => {
	const categoryItems = collections.find(
		(category) => category.title.toLowerCase() === match.params.categoryId
	);
	const catergoryRendered = categoryItems ? (
		categoryItems.items.map((item) => (
			<CollectionItem key={item.id} item={item} />
		))
	) : (
		<Redirect to="/" />
	);
	return (
		<div className="category-collection">
			<h1 className="category-title">{categoryItems && categoryItems.title}</h1>
			<div className="category-items">{catergoryRendered}</div>
		</div>
	);
};

const mapStateToProps = ({ shop }) => ({
	collections: shop.collections,
});

export default connect(mapStateToProps)(CategoryCollection);
