import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "./CollectionPreview/CollectionPreview";

let CollectionOverview = ({ width, SHOP_DATA }) => {
	console.log(SHOP_DATA);
	return (
		<div className="collection-overview">
			{(SHOP_DATA || []).map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview
					viewPortWidth={width}
					key={id}
					{...otherCollectionProps}
				/>
			))}
		</div>
	);
};

const mapStateToProps = ({ shop }) => ({
	SHOP_DATA: shop.collections,
});

CollectionOverview = connect(mapStateToProps)(CollectionOverview);

export default CollectionOverview;
