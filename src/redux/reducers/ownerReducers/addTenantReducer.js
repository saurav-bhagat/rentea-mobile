import {
	ADD_TENANT_FAILURE,
	ADD_TENANT_REQUEST,
	ADD_TENANT_SUCCESS,
	ADD_TENANT_COMPLETE,
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
				tenantMsg: action.payload.tenantMsg,
				tenant: action.payload.tenant,
				error: '',
				loading: false,
			};
		case ADD_TENANT_FAILURE:
			return {
				...state,
				tenantMsg: action.payload.tenantMsg,
				tenant: {},
				error: action.payload,
				loading: false,
			};
		case ADD_TENANT_COMPLETE: {
			return {
				...state,
				tenantMsg: action.tenantMsg,
			};
		}
		default:
			return state;
	}
};

export default addTenantReducer;
