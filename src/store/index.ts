import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, toggleModal } from "./slices/modalSlice";
import {
	collectionReducer,
	updateSearchTerm,
	updateMyCollection,
	updateRarityFilter,
	updateCategoryFilter,
	updateSortFilter,
} from "./slices/CollectionSlice";

// @types/collection
import { CollectionSliceState, OpenLootCollection, NftData } from "./slices/CollectionSlice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		collection: collectionReducer,
	},
});

export { store };
export {
	toggleModal,
	updateSearchTerm,
	updateMyCollection,
	updateRarityFilter,
	updateCategoryFilter,
	updateSortFilter,
};

// @types/collection
export type { CollectionSliceState, OpenLootCollection, NftData };
