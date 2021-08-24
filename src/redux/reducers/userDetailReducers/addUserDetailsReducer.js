const userDetail = {
	_id: null,
	name: '',
	phoneNumber: null,
	userType: '',
	error: '',
	loading: false,
};

export const addUserDetailReducer = (state = userDetail, action) => {
	switch (action.type) {
		case 'ADD_USER_DETAIL_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'ADD_USER_DETAIL_SUCCESS':
			return {
				...state,
				...action.payload,
				error: null,
				loading: false,
			};
		case 'ADD_USER_DETAIL_FAIL':
			return {
				...state,
				error: action.error,
				loading: false,
			};
		default:
			return state;
	}
};
