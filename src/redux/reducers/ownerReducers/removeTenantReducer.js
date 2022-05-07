import {
	TENANT_REMOVE_FAIL,
	TENANT_REMOVE_REQUEST,
	TENANT_REMOVE_SUCCESS,
} from '../../actions/ownerActions/removeTenantType';

const initialState = {
	error: '',
	loading: false,
	message: '',
};

export const removeTenantReducer = (state = initialState, action) => {
	switch (action.type) {
		case TENANT_REMOVE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case TENANT_REMOVE_SUCCESS:
			return {
				...state,
				loading: false,
				message: action.payload.message,
			};

		case TENANT_REMOVE_FAIL:
			return {
				...state,
				error: action.payload.error,
				loading: false,
			};

		default:
			return {
				...state,
				message: 'default state',
			};
	}
};
