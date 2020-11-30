import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/selectors";

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
	collections: selectCollections(state),
});

CollectionOverview = connect(mapStateToProps)(CollectionOverview);

export default CollectionOverview;
