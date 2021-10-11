import { combineReducers } from 'redux';

import { addBuildingReducer } from './ownerReducers/addBuildingReducer';
import { addRoomsReducer } from './ownerReducers/addRoomsReducer';

import { authReducer } from './authReducers/authReducer';

import { addUserDetailReducer } from './userDetailReducers/addUserDetailsReducer';
import dashboardReducer from './ownerReducers/dashboardReducer';
import addTenantReducer from './ownerReducers/addTenantReducer';
import addBankDetailsReducer from './ownerReducers/addBankDetailReducer';
import tenantDashboard from './tenantReducer/dashboardReducer';
import payWithCashReducer from './payment/payWithCashReducer';
import updateRoomReducer from './ownerReducers/updateRoomReducer';
import updateTenantReducer from './ownerReducers/updateTenantReducer';
import addRoomSeparatelyReducer from './ownerReducers/addRoomSeparatelyReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
	updateRoom: updateRoomReducer,
	userDetail: addUserDetailReducer,
	ownerDashbhoard: dashboardReducer,
	addTenantResponse: addTenantReducer,
	addBankDetails: addBankDetailsReducer,
	tenantDashboard: tenantDashboard,
	payWithCash: payWithCashReducer,
	updateTenant: updateTenantReducer,
	addRoomSeparately: addRoomSeparatelyReducer,
});

export default rootReducer;
