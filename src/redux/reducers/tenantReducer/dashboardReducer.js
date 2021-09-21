/*  tenantDetails object type is 
{
	_id:""
	userType:""
	tenantEmail:""
	tenantName:""
	tenantPhoneNumber:""
	roomNumber:""
	roomType:""
	rent:number
	floor:""
	joinDate:""
	rentDueDate:""
	security:number
	ownerName:""
	ownerEmail:""
	ownerPhoneNumber:""
}
*/

import {
	GET_TENANT_DASHBOARD_FAILURE,
	GET_TENANT_DASHBOARD_REQUEST,
	GET_TENANT_DASHBOARD_SUCCESS,
} from '../../actions/tenantAction/dashboardType';

const initialState = {
	tenantDetails: {},
	error: '',
	loading: false,
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TENANT_DASHBOARD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_TENANT_DASHBOARD_SUCCESS:
			return {
				...state,
				tenantDetails: action.payload,
				error: '',
				loading: false,
			};
		case GET_TENANT_DASHBOARD_FAILURE:
			return {
				...state,
				tenantDetails: {},
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default dashboardReducer;
