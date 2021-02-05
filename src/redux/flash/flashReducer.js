import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "./actions";

const initialState = {
	messages: [],
};

const flashReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FLASH_MESSAGE: {
			return {
				...state,
				messages: [
					...state.messages,
					{
						message: action.payload.message,
						type: action.payload.type,
					},
				],
			};
		}
		case DELETE_FLASH_MESSAGE: {
			return {
				messages: action.payload,
			};
		}
		default:
			return state;
	}
};

export default flashReducer;
