import { combineReducers } from 'redux';

import { addBuildingReducer } from './ownerReducers/addBuildingReducer';
import { addRoomsReducer } from './ownerReducers/addRoomsReducer';

import { authReducer } from './authReducers/authReducer';

import counterReducer from './counterReducer';
import { addUserDetailReducer } from './userDetailReducers/addUserDetailsReducer';
import dashboardReducer from './ownerReducers/dashboardReducer';
import addTenantReducer from './ownerReducers/addTenantReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
	userDetail: addUserDetailReducer,
	ownerDashbhoard: dashboardReducer,
	addTenantResponse: addTenantReducer,
});

export default rootReducer;
