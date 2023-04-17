import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		isVisible: "",
		rawCollection: null,
	},
	reducers: {
		toggleModal(state, action) {
			switch (state.isVisible) {
				case "":
					state.isVisible = "is-active";
					break;
				case "is-active":
					state.isVisible = "";
					break;
				default:
					return state;
			}
		},
	},
});

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
