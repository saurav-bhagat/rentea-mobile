import { combineReducers } from 'redux';

import addBuildingReducer from './addBuildingReducer';
import addRoomsReducer from './addRoomsReducer';
import authReducer from './authReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
	addRoomDetails: addRoomsReducer,
});

export default rootReducer;
