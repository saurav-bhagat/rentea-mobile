import { combineReducers } from 'redux';

import { addBuildingReducer } from './ownerReducers/addBuildingReducer';
import { addRoomsReducer } from './ownerReducers/addRoomsReducer';

import { authReducer } from './authReducers/authReducer';

import counterReducer from './counterReducer';
import { addUserDetailReducer } from './userDetailReducers/addUserDetailsReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
	userDetail: addUserDetailReducer,
});

export default rootReducer;
