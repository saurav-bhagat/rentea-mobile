const userDetail = {
	id: null,
	name: '',
	phoneNumber: null,
	userType: '',
	error: '',
};

export const addUserDetailReducer = (state = userDetail, action) => {
	switch (action.type) {
		case 'ADD_USER_DETAIL_SUCCESS':
			return {
				...state,
				id: action.id,
				name: action.name,
				phoneNumber: action.phoneNumber,
				userType: action.userType,
				error: null,
			};
		case 'ADD_USER_DETAIL_FAIL':
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
