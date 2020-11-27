import React, { useState, useLayoutEffect } from "react";
import "./Shop.scss";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CategoryCollection from "../../components/CategoryCollection/CategoryCollection";

const Shop = ({ match }) => {
	const [width, setWidth] = useState(window.innerWidth);
	useLayoutEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
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
};

export default Shop;
