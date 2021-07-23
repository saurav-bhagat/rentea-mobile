import { combineReducers } from 'redux';

import { addBuildingReducer, addRoomsReducer } from './ownerReducers';
import { authReducer } from './authReducers';

import counterReducer from './counterReducer';
import { addUserDetailReducer } from './userDetailReducers';

const rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
	userDetail: addUserDetailReducer,
});

export default rootReducer;
