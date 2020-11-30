import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "./CollectionPreview/CollectionPreview";

let CollectionOverview = ({ width, collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
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
