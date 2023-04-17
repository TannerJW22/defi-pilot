import { createSlice } from "@reduxjs/toolkit";
import { localDb_full } from "../../components/App/App";

export type NftData = {
	name: string;
	issuedId: number;
	imageUrl: string;
	rarity: string;
	maxIssuance: number;
	status: string;
	optionName: string;
	collection: string;
	tags: string[];
};

export type OpenLootCollection = {
	items: NftData[];
};

export interface CollectionSliceState {
	searchTerm: string;
	collection: OpenLootCollection;
}

const _collectionSlice = {
	name: "collection",
	initialState: {
		searchTerm: "",
		collection: null,
		rarityFilter: "all",
		categoryFilter: "all",
		sortFilter: "none",
	},
	reducers: {
		updateMyCollection(state: any, action: any) {
			state.collection = action.payload;
		},
		updateSearchTerm(state: any, action: any) {
			state.searchTerm = action.payload;
		},
		updateRarityFilter(state: any, action: { payload: any }) {
			state.rarityFilter = action.payload;
		},
		updateCategoryFilter(state: any, action: any) {
			state.categoryFilter = action.payload;
		},
		updateSortFilter(state: any, action: any) {
			state.sortFilter = action.payload;
		},
	},
};
const collectionSlice = createSlice(_collectionSlice);

export const collectionReducer = collectionSlice.reducer;
export const {
	updateSearchTerm,
	updateMyCollection,
	updateRarityFilter,
	updateCategoryFilter,
	updateSortFilter,
} = collectionSlice.actions;
