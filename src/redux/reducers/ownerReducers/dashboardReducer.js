import {
	GET_OWNER_DASHBOARD_FAILURE,
	GET_OWNER_DASHBOARD_REQUEST,
	GET_OWNER_DASHBOARD_SUCCESS,
} from '../../actions/ownerActions/dashboardTypes';

const initialState = {
	properties: {},
	error: '',
	loading: false,
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_OWNER_DASHBOARD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_OWNER_DASHBOARD_SUCCESS:
			return {
				...state,
				properties: action.payload,
				error: '',
				loading: false,
			};
		case GET_OWNER_DASHBOARD_FAILURE:
			return {
				...state,
				properties: {},
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default dashboardReducer;
