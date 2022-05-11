import {
	ADD_TENANT_FAILURE,
	ADD_TENANT_REQUEST,
	ADD_TENANT_SUCCESS,
	CLEAR_ADD_TENANT_MSG_ERROR,
} from '../../actions/ownerActions/addEntitiesTypes';

const initialState = {
	tenant: {},
	error: '',
	tenantMsg: '',
	loading: false,
};

const addTenantReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TENANT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_TENANT_SUCCESS:
			return {
				...state,
				tenant: action.payload,
				error: '',
				tenantMsg: 'tenant added successfully',
				loading: false,
			};
		case ADD_TENANT_FAILURE:
			return {
				...state,
				tenant: {},
				tenantMsg: 'failed to save tenant',
				error: action.payload,
				loading: false,
			};
		case CLEAR_ADD_TENANT_MSG_ERROR:
			return {
				...state,
				error: '',
			};
		default:
			return {
				...state,
				tenantMsg: 'default state',
			};
	}
};

export default addTenantReducer;
