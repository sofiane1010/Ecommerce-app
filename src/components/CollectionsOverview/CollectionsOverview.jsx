import React from "react";

import SHOP_DATA from "../../pages/Shop/shop-data";
import CollectionPreview from "./CollectionPreview/CollectionPreview";

const collectionOverview = ({ width }) => {
	return (
		<div className="collection-overview">
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

export default collectionOverview;
