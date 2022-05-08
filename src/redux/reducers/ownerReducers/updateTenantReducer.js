import {
	UPDATE_TENANT_REQUEST,
	UPDATE_TENANT_SUCCESS,
	UPDATE_TENANT_FAIL,
	CLEAR_UPDATE_TENANT_MSG_ERROR,
} from '../../actions/ownerActions/updateTenantActionTypes';

const initialState = {
	loading: false,
	msg: '',
};

const updateTenantReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TENANT_REQUEST:
			return {
				...state,
				loading: true,
				msg: '',
			};
		case UPDATE_TENANT_SUCCESS:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};

		case UPDATE_TENANT_FAIL:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};
		case CLEAR_UPDATE_TENANT_MSG_ERROR:
			return {
				...state,
				msg: '',
			};
		default:
			return {
				...state,
				msg: 'default state',
			};
	}
};

export default updateTenantReducer;
