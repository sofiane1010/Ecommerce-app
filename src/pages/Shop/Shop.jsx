import React, { useState, useLayoutEffect } from "react";
import "./Shop.scss";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useLayoutEffect(() => {
		const onResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	return (
		<div className="shop-page">
			{SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview
					viewPortWidth={width}
					key={id}
					{...otherCollectionProps}
				/>
			))}
		</div>
	);
};

export default Shop;
