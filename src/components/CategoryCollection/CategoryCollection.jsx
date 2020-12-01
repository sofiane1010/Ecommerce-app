import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors";

import "./CategoryCollection.scss";

import CollectionItem from "../CollectionsOverview/CollectionPreview/CollectionItem/CollectionItem";

let CategoryCollection = ({ collection }) => {
	const catergoryRendered = collection ? (
		collection.items.map((item) => <CollectionItem key={item.id} item={item} />)
	) : (
		<Redirect to="/" />
	);
	return (
		<div className="category-collection">
			<h1 className="category-title">{collection && collection.title}</h1>
			<div className="category-items">{catergoryRendered}</div>
		</div>
	);
};

const mapStateToProps = (state, { match }) => ({
	collection: selectCollection(match.params.categoryId)(state),
});

export default withRouter(connect(mapStateToProps)(CategoryCollection));
