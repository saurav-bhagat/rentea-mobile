import { combineReducers } from 'redux';

import { addBuildingReducer } from './ownerReducers/addBuildingReducer';
import { addRoomsReducer } from './ownerReducers/addRoomsReducer';

import { authReducer } from './authReducers/authReducer';

import { addUserDetailReducer } from './userDetailReducers/addUserDetailsReducer';
import dashboardReducer from './ownerReducers/dashboardReducer';
import addTenantReducer from './ownerReducers/addTenantReducer';
import addBankDetailsReducer from './ownerReducers/addBankDetailReducer';
import tenantDashboard from './tenantReducer/dashboardReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
	userDetail: addUserDetailReducer,
	ownerDashbhoard: dashboardReducer,
	addTenantResponse: addTenantReducer,
	addBankDetails: addBankDetailsReducer,
	tenantDashboard: tenantDashboard,
});

export default rootReducer;
