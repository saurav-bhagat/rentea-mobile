import { combineReducers } from 'redux';
import addBuildingReducer from './addBuildingReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
	buildingDetails: addBuildingReducer,
});

export default rootReducer;
