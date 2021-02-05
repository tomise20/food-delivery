export const ADD_FLASH_MESSAGE = "ADD_FLASH_MESSAGE";
export const DELETE_FLASH_MESSAGE = "DELETE_FLASH_MESSAGE";

export const addFlashMessage = (message, type = "success") => {
	return {
		type: ADD_FLASH_MESSAGE,
		payload: {
			message,
			type,
		},
	};
};

export const deleteFlashMessage = (messages, msgIndex) => {
	const newMessages = messages.filter((message, index) => index !== msgIndex);
	return {
		type: DELETE_FLASH_MESSAGE,
		payload: newMessages,
	};
};
