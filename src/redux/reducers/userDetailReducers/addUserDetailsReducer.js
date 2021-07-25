const userDetail = {
	_id: null,
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
				...action.payload,
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
