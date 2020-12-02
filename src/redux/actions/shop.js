import * as actionTypes from "./actionTypes";
import { convertCollectionsSnapshotToMap, db } from "../../firebase.utils";

const fetchCollectionsStart = () => ({
	type: actionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
	type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
	collections,
});

const fetchCollectionsFail = (error) => ({
	type: actionTypes.FETCH_COLLECTIONS_FAIL,
	error,
});

export const fetchCollections = () => {
	return (dispatch) => {
		dispatch(fetchCollectionsStart());
		const collectionsRef = db.collection("collections");
		collectionsRef
			.get()
			.then((collectionsSnapShot) => {
				const collections = convertCollectionsSnapshotToMap(
					collectionsSnapShot
				);
				dispatch(fetchCollectionsSuccess(collections));
			})
			.catch((error) => dispatch(fetchCollectionsFail(error.message)));
	};
};
