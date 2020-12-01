import React from "react";
import { connect } from "react-redux";
import { selectCollectionsArray } from "../../redux/selectors/shop";

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

const mapStateToProps = (state) => ({
	collections: selectCollectionsArray(state),
});

CollectionOverview = connect(mapStateToProps)(CollectionOverview);

export default CollectionOverview;
