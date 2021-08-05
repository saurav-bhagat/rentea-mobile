import {
	ADD_TENANT_FAILURE,
	ADD_TENANT_REQUEST,
	ADD_TENANT_SUCCESS,
} from '../../actions/ownerActions/addEntitiesTypes';

const initialState = {
	tenant: {},
	error: '',
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
				loading: false,
			};
		case ADD_TENANT_FAILURE:
			return {
				...state,
				tenant: {},
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default addTenantReducer;
