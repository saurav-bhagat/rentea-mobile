import { ADD_EXPO_PUSH_TOKEN_SUCCESS } from '../../actions/authActions/authTypes';
import { ADD_BUILDING_SUCCESS } from '../../actions/ownerActions/addBuildingTypes';

const userDetail = {
	_id: null,
	name: '',
	phoneNumber: null,
	userType: '',
	address: '',
	error: '',
	loading: false,
	expoPushToken: '',
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

		case ADD_EXPO_PUSH_TOKEN_SUCCESS:
			return {
				...state,
				expoPushToken: action.payload,
			};

		default:
			return state;
	}
};
