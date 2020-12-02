import React, { useState, useLayoutEffect, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./Shop.scss";

import * as selector from "../../redux/selectors";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CategoryCollection from "../../components/CategoryCollection/CategoryCollection";
import { fetchCollections } from "../../redux/actions";
import Spinner from "../../components/UI/Spinner/Spinner";

const Shop = ({ loading, match, collections, dispatch }) => {
	const [width, setWidth] = useState(window.innerWidth);
	useLayoutEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	useEffect(() => {
		if (!collections.length) {
			dispatch(fetchCollections());
		}
	}, [collections, dispatch]);

	const shopPage = loading ? (
		<Spinner fullScreen />
	) : (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={() => <CollectionsOverview width={width} />}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				component={CategoryCollection}
			/>
		</div>
	);
	return shopPage;
};

const mapStateToProps = (state) => ({
	collections: selector.selectCollectionsArray(state),
	loading: selector.selectShopLoading(state),
});

export default connect(mapStateToProps)(Shop);
