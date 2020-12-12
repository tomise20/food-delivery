import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./actions";

const initialState = {
	show: false,
	text: "",
};

const snackbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_SNACKBAR:
			return {
				show: true,
				text: action.payload,
			};
		case HIDE_SNACKBAR:
			return {
				show: false,
				text: "",
			};
		default:
			return state;
	}
};

export default snackbarReducer;
