import { combineReducers } from 'redux';

import addBuildingReducer from './addBuildingReducer';
import authReducer from './authReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
});

export default rootReducer;
