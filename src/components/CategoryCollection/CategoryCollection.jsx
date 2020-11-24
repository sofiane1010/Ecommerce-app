import React from "react";

import "./CategoryCollection.scss";
import SHOP_DATA from "../../pages/Shop/shop-data";
import CollectionItem from "../CollectionsOverview/CollectionPreview/CollectionItem/CollectionItem";
import { Redirect } from "react-router-dom";

const CategoryCollection = ({ match }) => {
	const categoryItems = SHOP_DATA.find(
		(category) => category.routeName === match.params.categoryId
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

export default CategoryCollection;
